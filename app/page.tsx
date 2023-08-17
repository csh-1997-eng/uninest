'use client'

import React from 'react';
import { useRouter } from 'next/navigation'; // Updated import statement
import 'tailwindcss/tailwind.css';

function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-shadow hover:shadow-lg mb-8" >
        Welcome to UniNest
      </h1>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 text-lg font-bold bg-white text-gray-800 shadow-md hover:scale-105 hover:shadow-lg"
          type="button"
          onClick={() => router.push('/resident-sign-up')}
        >
          Resident Sign Up
        </button>
        <button
          className="px-6 py-2 text-lg font-bold bg-white text-gray-800 shadow-md hover:scale-105 hover:shadow-lg"
          type="button"
          onClick={() => router.push('/landlord-sign-up')}
        >
          Landlord Sign Up
        </button>
      </div>
    </div>
  );
}


export default LandingPage;
