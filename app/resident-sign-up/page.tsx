'use client'

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import axios from 'axios';
import { universityOptions,stateOfResidencyOptions, Option } from '../formOptions/formOptions';

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  DateOfBirth: Date | null;
  Gender: string;
  Phone: string;
  ProfileImageURL: string;
  CurrentAddress: string;
  StateOfResidency: string;
  University: string;
  UserType: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    DateOfBirth: null,
    Gender: '',
    Phone: '',
    ProfileImageURL: '',
    CurrentAddress: '',
    StateOfResidency: '',
    University: '',
    UserType: ''
  });

  const [flashMessage, setFlashMessage] = useState<string>('');
  const [filteredUniOptions, setFilteredUniOptions] = useState<Option[]>(universityOptions);
  const [filteredStateOptions, setFilteredStateOptions] = useState<Option[]>(stateOfResidencyOptions);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    setFilteredUniOptions(universityOptions);
    setFilteredStateOptions(stateOfResidencyOptions);
  };


  const handleInputChangeFromListUni = (inputValue: string, options: Option[]) => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredUniOptions(filteredOptions);

    if (filteredOptions.length === 1) {
      setFormData((prevData) => ({ ...prevData, University: filteredOptions[0].value }));
    } else {
      setFormData((prevData) => ({ ...prevData, University: '' }));
    }
  };

  const handleInputChangeFromListState = (inputValue: string, options: Option[]) => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredStateOptions(filteredOptions);

    if (filteredOptions.length === 1) {
      setFormData((prevData) => ({ ...prevData, StateOfResidency: filteredOptions[0].value }));
    } else {
      setFormData((prevData) => ({ ...prevData, StateOfResidency: '' }));
    }

  };

  const formattedDate = formData.DateOfBirth instanceof Date ? formData.DateOfBirth.toISOString().split('T')[0] : '';

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      DateOfBirth: name === 'DateOfBirth' ? new Date(value) : prevData.DateOfBirth,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/resident-sign-up', formData);
      console.log('Response from server:', response.data);
      setFlashMessage('Submission Success!');
      setTimeout(() => {
        setFlashMessage('');
        window.location.href = '/'; // Redirect to "/"
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-form flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold my-4 text-white">
        <Link href="/">UniNest</Link>
      </h2>
      <form className="flex flex-col items-center space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleInputChange}
            required
            className="text-black"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
            required
            className="text-black"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="Email">Email Address:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
            required
            className="text-black"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
            required
            className="text-black"
          />
        </div>

        <div className="form-group">
          <label htmlFor="DateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="DateOfBirth"
            name="DateOfBirth"
            value={formData.DateOfBirth ? formData.DateOfBirth.toISOString().split('T')[0] : ''}
            onChange={handleDateChange}
            required
            className="text-black w-full py-2 px-3 rounded border"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="Gender">Gender :</label>
          <select
            id="Gender"
            name="Gender"
            value={formData.Gender}
            onChange={handleInputChange}
            required
            className="text-black w-full py-2 px-3 rounded border"
          >
            <option value="">Select Gender</option>
            <option value="Student">Male</option>
            <option value="Landlord">Female</option>
            <option value="Landlord">Other</option>
          </select>
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="Phone">Phone Number:</label>
          <input
            type="tel"
            id="Phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleInputChange}
            className="text-black"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="ProfileImageURL">Profile Image URL:</label>
          <input
            type="text"
            id="ProfileImageURL"
            name="ProfileImageURL"
            value={formData.ProfileImageURL}
            onChange={handleInputChange}
            className="text-black"
          />
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="CurrentAddress">Current Address:</label>
          <input
            type="text"
            id="CurrentAddress"
            name="CurrentAddress"
            value={formData.CurrentAddress}
            onChange={handleInputChange}
            required
            className="text-black"
          />
        </div>
        
        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="StateOfResidency">State of Residency:</label>
          <select
            id="StateOfResidency"
            name="StateOfResidency"
            value={formData.StateOfResidency}
            onChange={(e) => handleInputChangeFromListState(e.target.value, stateOfResidencyOptions)}
            required
            className="text-black"
          >
            <option value="">Select State of Residency</option>
            {filteredStateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="University">University:</label>
          <select
            id="University"
            name="University"
            value={formData.University}
            onChange={(e) => handleInputChangeFromListUni(e.target.value, universityOptions)}
            required
            className="text-black w-full py-2 px-3 rounded border"
          >
          <option value="">Select University</option>
            {filteredUniOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group flex flex-col mb-5 ">
          <label htmlFor="UserType">User Type:</label>
          <select
            id="UserType"
            name="UserType"
            value={formData.UserType}
            onChange={handleInputChange}
            required
            className="text-black w-full py-2 px-3 rounded border"
          >
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Landlord">Landlord</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-10 py-5 text-lg font-bold bg-white text-black shadow-md hover:shadow-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;


