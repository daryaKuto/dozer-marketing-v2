"use client";

import type { NextPage } from "next";
import React, { Fragment, SyntheticEvent, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIconOutline } from "../components/icons/Icons";

const DemoForm: NextPage = () => {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setErrorMessage(undefined);
    setFieldErrors({});

    const target = event.target as typeof event.target & {
      email: { value: string };
      fullName: { value: string };
      companyName: { value: string };
      ownerOrManager: { value: string };
      title: { value: string };
      fleetSize: { value: string };
      locations: { value: string };
      demoSchedule: { value: string };
    };

    const body = {
      email: target.email.value.trim(),
      fullName: target.fullName.value.trim(),
      companyName: target.companyName.value.trim(),
      ownerOrManager: target.ownerOrManager.value.trim(),
      title: target.title.value.trim(),
      fleetSize: parseInt(target.fleetSize.value.trim(), 10),
      locations: target.locations.value.split(",").map((loc) => loc.trim()),
      demoSchedule: target.demoSchedule.value.trim(),
    };

    try {
      setSubmitting(true);
      const response = await fetch("/api/submit-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSuccessModalOpen(true);
      } else {
        const errorData = await response.json();
        if (errorData.fieldErrors) {
          setFieldErrors(errorData.fieldErrors);
        } else {
          setErrorMessage(errorData.message || "Submission failed");
        }
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-container padding-container py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800">
          Let&apos;s Get Started
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to learn about your operation and equipment monitoring
          needs. A member of our team will be in touch to show how our
          technology can help you!
        </p>
      </div>

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-dark-grey">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={`p-3 border ${
                fieldErrors.email ? "border-red-500" : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-dark-grey">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className={`p-3 border ${
                fieldErrors.fullName ? "border-red-500" : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.fullName && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.fullName}</p>
            )}
          </div>

          {/* Company Name Field */}
          <div>
            <label htmlFor="companyName" className="block text-dark-grey">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className={`p-3 border ${
                fieldErrors.companyName
                  ? "border-red-500"
                  : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.companyName}
              </p>
            )}
          </div>

          {/* Owner or Manager Field */}
          <div>
            <label htmlFor="ownerOrManager" className="block text-dark-grey">
              Are you the owner or manager?
            </label>
            <select
              id="ownerOrManager"
              name="ownerOrManager"
              required
              className={`p-3 border ${
                fieldErrors.ownerOrManager
                  ? "border-red-500"
                  : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Other">Other</option>
            </select>
            {fieldErrors.ownerOrManager && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.ownerOrManager}
              </p>
            )}
          </div>

          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-dark-grey">
              Your Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className={`p-3 border ${
                fieldErrors.title ? "border-red-500" : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.title && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.title}</p>
            )}
          </div>

          {/* Fleet Size Field */}
          <div>
            <label htmlFor="fleetSize" className="block text-dark-grey">
              Fleet Size
            </label>
            <input
              id="fleetSize"
              name="fleetSize"
              type="number"
              min="1"
              required
              className={`p-3 border ${
                fieldErrors.fleetSize ? "border-red-500" : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.fleetSize && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.fleetSize}
              </p>
            )}
          </div>

          {/* Locations Field */}
          <div className="md:col-span-2">
            <label htmlFor="locations" className="block text-dark-grey">
              Locations (comma-separated)
            </label>
            <input
              id="locations"
              name="locations"
              type="text"
              required
              placeholder="Location 1, Location 2"
              className={`p-3 border ${
                fieldErrors.locations ? "border-red-500" : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            />
            {fieldErrors.locations && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.locations}
              </p>
            )}
          </div>

          {/* Demo Schedule Field */}
          <div>
            <label htmlFor="demoSchedule" className="block text-dark-grey">
              Demo Schedule
            </label>
            <select
              id="demoSchedule"
              name="demoSchedule"
              required
              className={`p-3 border ${
                fieldErrors.demoSchedule
                  ? "border-red-500"
                  : "border-medium-grey"
              } rounded mt-1 focus:border-dozer-yellow focus:outline-none w-full`}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2+ months">2+ months</option>
            </select>
            {fieldErrors.demoSchedule && (
              <p className="text-red-500 text-sm mt-1">
                {fieldErrors.demoSchedule}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={submitting}
            className="uppercase py-2 px-10 bg-dozer-yellow text-white hover:bg-opacity-90 transition-colors duration-200"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {errorMessage && (
          <p className="mt-2 text-sm text-red-600 text-center">
            {errorMessage}
          </p>
        )}
      </form>

      <Transition appear show={successModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setSuccessModalOpen(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckCircleIconOutline className="h-6 w-6 text-green-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Submission Successful
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-gray-500">
                    Thank you for your submission. We’ll contact you soon.
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-dozer-yellow text-base font-medium text-white hover:bg-opacity-90 sm:text-sm"
                  onClick={() => setSuccessModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DemoForm;