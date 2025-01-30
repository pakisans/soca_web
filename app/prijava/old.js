// // Import js-cookie
// import Cookies from 'js-cookie';
// import { redirect } from 'next/navigation';
// import { loginUser } from '@/lib/auth';
// import { cookies } from 'next/headers';
// // import customToast from "@/lib/config/toast-config";

// export const metadata = {
//   title: 'Prijava - SOĆA',
//   description: 'Prijavi se na svoj nalog',
// };

// export async function handleLogin(formData) {
//   'use server';

//   const email = formData.get('email');
//   const password = formData.get('password');
//   const rememberMe = formData.get('rememberMe') === 'on';

//   try {
//     const response = await loginUser(email, password);

//     if (response.token) {
//       cookies().set('session', response.token, {
//         secure: true,
//         path: '/',
//         maxAge: 7200,
//       });
//       cookies().set('username', response.name, {
//         secure: true,
//         path: '/',
//         maxAge: 7200,
//       });

//       if (rememberMe) {
//         Cookies.set('email', email, { expires: 30 });
//         Cookies.set('password', password, { expires: 30 });
//       } else {
//         Cookies.remove('email');
//         Cookies.remove('password');
//       }

//       redirect('/');
//     }
//   } catch (error) {
//     cookies().set('loginError', true, {
//       path: '/',
//       maxAge: 1,
//     });
//     return { error: 'Pogrešan email ili lozinka.' };
//   }
// }

// export default async function Page() {
//   const session = cookies().get('session');

//   if (session) {
//     redirect('/');
//   }

//   const savedEmail = Cookies.get('email') || '';
//   const savedPassword = Cookies.get('password') || '';

//   return (
//     <section className="w-full h-full my-auto flex items-center justify-center py-[4rem]">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg animate-fade-in">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           Prijava na sistem
//         </h2>
//         <form action={handleLogin} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               defaultValue={savedEmail}
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-offRed focus:border-offRed text-lg"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-lg font-medium text-gray-700"
//             >
//               Lozinka
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               defaultValue={savedPassword}
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-offRed focus:border-offRed text-lg"
//               required
//             />
//           </div>
//           <div className="flex items-center gap-[5px] w-fit ml-auto">
//             <input
//               type="checkbox"
//               id="rememberMe"
//               name="rememberMe"
//               className="h-5 w-5 text-offRed focus:ring-offRed border-gray-300 rounded"
//             />
//             <label
//               htmlFor="rememberMe"
//               className="ml-2 block text-sm text-darkGray"
//             >
//               Zapamti me
//             </label>
//           </div>
//           {cookies().get('loginError') ? (
//             <div className="text-offRed text-[15px] text-center mb-4">
//               {
//                 'Prijava nije uspela. Proverite korisničko ime i lozinku i pokušajte ponovo.'
//               }
//             </div>
//           ) : null}
//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-offRed text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg"
//           >
//             Prijava
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
