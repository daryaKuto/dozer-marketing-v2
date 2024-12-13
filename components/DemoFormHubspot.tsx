'use client';

import React, { useState } from 'react';
import { AddIcon, RemoveIcon } from './icons/Icons';

const DemoFormHubspot: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    phoneNumber: '',
    fleetSize: 1,
    locations: ['']
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Format phone number for display
  // const formatPhoneNumber = (value: string): string => {
  //   const digits = value.replace(/\D/g, '');
  //   const match = digits.match(/^(\d)(\d{3})(\d{3})(\d{4})$/);
  //   if (match) {
  //     return `+${match[1]}(${match[2]})${match[3]}-${match[4]}`;
  //   }
  //   return digits.startsWith('+') ? digits : `+${digits}`;
  // };

  // const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;
  //   // const formattedValue = formatPhoneNumber(inputValue);
  //   setFormData({ ...formData, phoneNumber: formattedValue });
  //   setErrors(prevErrors => ({ ...prevErrors, phoneNumber: '' }));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'fleetSize' ? parseInt(value) : value
    });
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleLocationChange = (index: number, value: string) => {
    const updatedLocations = [...formData.locations];
    updatedLocations[index] = value;
    setFormData({ ...formData, locations: updatedLocations });
  };

  const addLocation = () => {
    setFormData({ ...formData, locations: [...formData.locations, ''] });
  };

  const removeLocation = (index: number) => {
    const updatedLocations = formData.locations.filter((_, i) => i !== index);
    setFormData({ ...formData, locations: updatedLocations });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (
      !formData.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = 'A valid email is required.';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required.';
    }
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required.';
    }
    if (!formData.phoneNumber || !/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        'A valid phone number (10-15 digits) is required.';
    }
    if (formData.fleetSize < 1) {
      newErrors.fleetSize = 'Fleet size must be at least 1.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const response = await fetch('/api/submit-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit the form.');
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.');
    }

    try {
      const hubspotData = {
        properties: {
          email: formData.email,
          firstname: formData.firstName,
          lastname: formData.lastName,
          company: formData.companyName,
          jobtitle: formData.jobTitle,
          phone: formData.phoneNumber.replace(/\D/g, ''),
          fleet_size: formData.fleetSize,
          site_locations: formData.locations.join(', ')
        }
      };

      console.log('hubspot data', hubspotData);

      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hubspotData)
      });

      if (response.ok) {
        setSuccessMessage('Form was submitted successfully. Thank you!');
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          jobTitle: '',
          companyName: '',
          phoneNumber: '',
          fleetSize: 1,
          locations: ['']
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit the form.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='max-w-lg mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-2xl font-bold mb-6 text-center text-darker-grey'>
        Request a Demo
      </h1>
      {successMessage && (
        <p className='text-green-600 text-center mb-4'>{successMessage}</p>
      )}
      {errorMessage && (
        <p className='text-red-600 text-center mb-4'>{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Email */}
        <div>
          <label
            htmlFor='email'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.email ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label
            htmlFor='firstName'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.firstName ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor='lastName'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.lastName ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm'>{errors.lastName}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor='companyName'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Company Name
          </label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.jobTitle ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.companyName && (
            <p className='text-red-500 text-sm'>{errors.companyName}</p>
          )}
        </div>

        {/* Job Title */}
        <div>
          <label
            htmlFor='jobTitle'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Job Title
          </label>
          <input
            type='text'
            id='jobTitle'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.jobTitle ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.jobTitle && (
            <p className='text-red-500 text-sm'>{errors.jobTitle}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor='phoneNumber'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Phone Number
          </label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.phoneNumber ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
            placeholder='+1(xxx)xxx-xxxx'
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-sm'>{errors.phoneNumber}</p>
          )}
        </div>

        {/* Fleet Size */}
        <div>
          <label
            htmlFor='fleetSize'
            className='block text-lg font-nav-bar text-dark-grey'
          >
            Number of Units/Vehicles in Fleet
          </label>
          <input
            type='number'
            id='fleetSize'
            name='fleetSize'
            min='1'
            value={formData.fleetSize}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.fleetSize ? 'border-red-500' : 'border-medium-grey'
            } rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow`}
          />
          {errors.fleetSize && (
            <p className='text-red-500 text-sm'>{errors.fleetSize}</p>
          )}
        </div>

        {/* Locations */}
        <div>
          <label className='block text-lg font-nav-bar text-dark-grey'>
            Locations
          </label>
          {formData.locations.map((location, index) => (
            <div key={index} className='flex items-center space-x-2 mb-2'>
              <input
                type='text'
                value={location}
                onChange={e => handleLocationChange(index, e.target.value)}
                className='w-full p-3 border border-medium-grey rounded-none focus:outline-none focus:ring-2 focus:ring-dozer-yellow'
                placeholder='Enter location'
              />
              <button
                type='button'
                onClick={addLocation}
                className='p-2 bg-dozer-yellow text-dozer-white hover:bg-darker-grey'
              >
                <AddIcon className='w-5 h-5' />
              </button>
              {formData.locations.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeLocation(index)}
                  className='p-2 bg-red-500 text-dozer-white hover:bg-red-700'
                >
                  <RemoveIcon className='w-5 h-5' />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <div>
          <button
            type='submit'
            disabled={submitting}
            className={`w-full text-dozer-white uppercase ${
              submitting ? 'bg-darker-grey' : 'bg-dozer-yellow'
            } py-3 px-4 hover:bg-black hover:text-white`}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoFormHubspot;
