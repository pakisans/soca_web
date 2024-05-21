import { NextResponse } from "next/server";
import { setCookie } from "cookies-next";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "user@example.com" && password === "password") {
    const token = "fake-jwt-token";

    const response = NextResponse.json({ message: "Login successful" });
    setCookie("token", token, { req, res: response, maxAge: 60 * 60 * 24 });
    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
