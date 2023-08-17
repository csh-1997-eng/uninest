'use client'

import React, { useState, FormEvent } from 'react';
import Link from 'next/link'

const LandlordForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [flashMessage, setFlashMessage] = useState<string>('');



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
        firstName,
        lastName,
        email,
        businessAddress,
        phoneNumber,
        dateOfBirth,
      };
    // Process the form data, such as making an API request
    console.log('Landlord form submitted:', {
      firstName,
      lastName,
      email,
      businessAddress,
      phoneNumber,
      dateOfBirth,
    });

    fetch('http://localhost:8080/resident/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        setFlashMessage('Submission Success!');
        setTimeout(() => {
          setFlashMessage('');
          window.location.href = '/'; // Redirect to "/"
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    
    <div className="landlord-form flex flex-col items-center justify-center h-screen">
    <h2 className="text-4xl font-bold mb-8 text-white">
        <Link href="/">UniNest</Link> {/* Added a Link component to create a link */}
      </h2>
      <h2 className="text-2xl font-bold mb-5">Landlord Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md px-4">
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="firstName" className="text-lg mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="lastName" className="text-lg mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="email" className="text-lg mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="businessAddress" className="text-lg mb-2">Business Address:</label>
          <input
            type="text"
            id="businessAddress"
            name="businessAddress"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <div className="form-group flex flex-col mb-5 w-64">
          <label htmlFor="dateOfBirth" className="text-lg mb-2"> Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="px-4 py-2 text-lg border border-gray-300 rounded transition ease-in-out duration-300 focus:outline-none focus:border-indigo-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-lg font-bold bg-indigo-600 text-white rounded cursor-pointer transition ease-in-out duration-300 hover:bg-indigo-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LandlordForm;