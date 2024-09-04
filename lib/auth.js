import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function loginUser(email, password) {
  // Replace this with an actual API call to your backend
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  const { name, token } = data;

  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  const session = await encrypt({ name, token, expires });

  // Set cookies
  cookies().set("session", session, {
    expires,
    httpOnly: true,
    secure: true,
    path: "/",
  });
  cookies().set("username", name, {
    expires,
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return data;
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0), path: "/" });
  cookies().set("username", "", { expires: new Date(0), path: "/" });
}

export async function getSession() {
  const cookieStore = cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
