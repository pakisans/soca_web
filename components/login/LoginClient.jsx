'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginClient({ savedEmail }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Koristimo router za preusmeravanje
  async function loginUser(email, password) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  const handleLogin = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe') === 'on';

    try {
      const response = await loginUser(email, password);
      console.log('aa');
      if (response.token) {
        // Postavljamo kolačiće za sesiju i korisničko ime
        Cookies.set('session', response.token, { secure: true, path: '/' });
        Cookies.set('username', response.name, { secure: true, path: '/' });

        // Ako je korisnik odabrao "Zapamti me", postavljamo kolačiće za email i lozinku
        if (rememberMe) {
          Cookies.set('email', email, { expires: 30 });
          Cookies.set('password', password, { expires: 30 });
        } else {
          Cookies.remove('email');
          Cookies.remove('password');
        }

        // Preusmeravamo korisnika na početnu stranicu nakon uspešne prijave
        router.push('/');
      }
    } catch (error) {
      setError('Pogrešan email ili lozinka.');
    } finally {
      console.log('aa');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Resetovanje greške na početku
    setLoading(true); // Postavljamo stanje učitavanja

    const formData = new FormData(event.target);
    await handleLogin(formData);

    setLoading(false); // Završavamo učitavanje nakon prijave
  };

  const savedPassword = Cookies.get('password') || ''; // Dobijamo sačuvanu lozinku ako postoji

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          defaultValue={savedEmail}
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
          defaultValue={savedPassword}
          className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-offRed focus:border-offRed text-lg"
          required
        />
      </div>
      <div className="flex items-center gap-[5px] w-fit ml-auto">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          className="h-5 w-5 text-offRed focus:ring-offRed border-gray-300 rounded"
        />
        <label
          htmlFor="rememberMe"
          className="ml-2 block text-[15px] text-darkGray"
        >
          Zapamti me
        </label>
      </div>
      {error ? (
        <div className="text-offRed text-[15px] text-center mb-4">{error}</div>
      ) : null}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-offRed text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg"
        disabled={loading}
      >
        {loading ? 'Prijava...' : 'Prijava'}
      </button>
    </form>
  );
}
