import { redirect } from "next/navigation";
import { getSession, login } from "@/lib/auth";

export const metadata = {
  title: "Prijava - SOĆA",
  description: "Prijavi se na svoj nalog",
};

export default async function Page() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <section className="w-full h-full my-auto flex items-center justify-center py-[4rem]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Prijava na sistem
        </h2>
        <form
          action={async (formData) => {
            "use server";
            await login(formData);
            redirect("/");
          }}
          className="space-y-6"
        >
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
