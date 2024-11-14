"use client";

import { NextPage } from 'next';
import React, { useState } from 'react';

const DemoForm: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [locations, setLocations] = useState<string[]>(['']);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [ownerSelection, setOwnerSelection] = useState<string>('');
  const [otherRole, setOtherRole] = useState<string>('');

  const handleAddLocation = () => {
    setLocations([...locations, '']);
  };

  const handleLocationChange = (index: number, value: string) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = value;
    setLocations(updatedLocations);
  };

  const handleOwnerSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerSelection(event.target.value);
    if (event.target.value !== "Other") {
      setOtherRole('');
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrorMessage(undefined);
    setEmailError(undefined);
    setSubmitting(true);

    const target = event.target as typeof event.target & {
      email: { value: string };
      fullName: { value: string };
      companyName: { value: string };
      title: { value: string };
      fleetSize: { value: string };
      demoSchedule: { value: string };
    };

    const body = {
      email: target.email.value.trim(),
      fullName: target.fullName.value.trim(),
      companyName: target.companyName.value.trim(),
      ownerOrManager: ownerSelection === 'Other' ? otherRole : ownerSelection,
      title: target.title.value.trim(),
      fleetSize: parseInt(target.fleetSize.value.trim()),
      locations,
      demoSchedule: target.demoSchedule.value.trim(),
    };

    try {
      const response = await fetch('/api/submit-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setErrorMessage("Submission Successful!");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-container padding-container py-16">
      <p className="mt-8 text-lg text-light-gray md:w-2/3">
        We’d love to learn about your operation and equipment monitoring needs. A member of our team will be in touch to show how our technology can help you!
      </p>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-dark-grey">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Full Name Field */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-dark-grey">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            />
          </div>

          {/* Company Name Field */}
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-dark-grey">Company Name</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            />
          </div>

          {/* Owner or Manager Field */}
          <div className="flex flex-col">
            <label className="text-dark-grey">Are you the owner or manager of the construction site?</label>
            <div className="flex space-x-4 mt-2 items-center">
              <label>
                <input
                  type="radio"
                  name="ownerOrManager"
                  value="Owner"
                  checked={ownerSelection === "Owner"}
                  onChange={handleOwnerSelection}
                  required
                  className="mr-2"
                /> Owner
              </label>
              <label>
                <input
                  type="radio"
                  name="ownerOrManager"
                  value="Manager"
                  checked={ownerSelection === "Manager"}
                  onChange={handleOwnerSelection}
                  required
                  className="mr-2"
                /> Manager
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="ownerOrManager"
                  value="Other"
                  checked={ownerSelection === "Other"}
                  onChange={handleOwnerSelection}
                  required
                  className="mr-2"
                /> Other
                {ownerSelection === "Other" && (
                  <input
                    type="text"
                    value={otherRole}
                    onChange={(e) => setOtherRole(e.target.value)}
                    placeholder="Specify role"
                    className="p-2 border border-medium-grey rounded ml-2 focus:border-dozer-yellow focus:outline-none"
                  />
                )}
              </label>
            </div>
          </div>

          {/* Title Field */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-dark-grey">Your Title</label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            />
          </div>

          {/* Fleet Size Field */}
          <div className="flex flex-col">
            <label htmlFor="fleetSize" className="text-dark-grey">How many units do you have in your fleet?</label>
            <input
              id="fleetSize"
              name="fleetSize"
              type="number"
              min="1"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            />
          </div>

          {/* Locations Field */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-dark-grey">Locations of your sites</label>
            {locations.map((location, index) => (
              <input
                key={index}
                type="text"
                value={location}
                onChange={(e) => handleLocationChange(index, e.target.value)}
                placeholder={`Location ${index + 1}`}
                className="p-3 border border-medium-grey rounded mt-2 focus:border-dozer-yellow focus:outline-none"
              />
            ))}
            <button
              type="button"
              onClick={handleAddLocation}
              className="mt-2 text-dozer-yellow hover:underline"
            >
              + Add another location
            </button>
          </div>

          {/* Demo Schedule Field */}
          <div className="flex flex-col">
            <label htmlFor="demoSchedule" className="text-dark-grey">How soon would you like to schedule your demo?</label>
            <select
              id="demoSchedule"
              name="demoSchedule"
              required
              className="p-3 border border-medium-grey rounded mt-1 focus:border-dozer-yellow focus:outline-none"
            >
              <option value="" disabled>Select an option</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2+ months">2+ months</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={submitting}
            className="uppercase py-2 px-10 bg-dozer-yellow text-dozer-white text-sm hover:bg-opacity-90 transition-colors duration-200 mt-6"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        )}
      </form>
    </section>
  );
};

export default DemoForm;