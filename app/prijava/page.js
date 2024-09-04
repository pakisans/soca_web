import { redirect } from "next/navigation";
import { loginUser } from "@/lib/auth";
import { cookies } from "next/headers";

export const metadata = {
  title: "Prijava - SOĆA",
  description: "Prijavi se na svoj nalog",
};

export async function handleLogin(formData) {
  "use server"; // Marking this function as a server function

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await loginUser(email, password);

    if (response.token) {
      cookies().set("session", response.token, {
        secure: true,
        path: "/",
      });
      cookies().set("username", response.name, {
        secure: true,
        path: "/",
      });
      redirect("/");
    }
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Pogrešan email ili lozinka." };
  }
}

export default async function Page() {
  const session = cookies().get("session");

  if (session) {
    redirect("/");
  }

  return (
    <section className="w-full h-full my-auto flex items-center justify-center py-[4rem]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Prijava na sistem
        </h2>
        {/* Handle error messages here if needed */}
        <form action={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-offRed focus:border-offRed text-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Lozinka
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-offRed focus:border-offRed text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-offRed text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg"
          >
            Prijava
          </button>
        </form>
      </div>
    </section>
  );
}
