import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Registration = () => {
  const { users: context } = useOutletContext();
  const { users } = context;
  const { addUser } = context;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    balance: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "balance" ? value.replace(/[^0-9]/g, "") : value, // Allow only numbers for balance
    }));
  };

  // Validate Form
  const validateForm = () => {
    let errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (formData.balance === "") {
      errors.balance = "Balance is required";
    } else {
      const balanceNumber = Number(formData.balance);
      if (isNaN(balanceNumber) || balanceNumber < 0) {
        errors.balance = "Balance must be zero or a positive number";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  // Confirm Account Creation
  const confirmAccountCreation = () => {
    setIsModalOpen(false);
    setSuccessMessage("Hiraya Account has been successfully created!");

    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds

    addUser({
      id: new Date().getTime(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      balance: Number(formData.balance),
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      balance: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {successMessage && (
        <div className="fixed top-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}

      <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          Create Hiraya Bank Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={`input input-bordered w-full ${errors.firstName && "border-red-500"}`}
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={`input input-bordered w-full ${errors.lastName && "border-red-500"}`}
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`input input-bordered w-full ${errors.email && "border-red-500"}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Balance */}
          <input
            type="text"
            name="balance"
            placeholder="Initial Deposit"
            className={`input input-bordered w-full ${errors.balance && "border-red-500"}`}
            value={formData.balance}
            onChange={handleChange}
          />
          {errors.balance && (
            <p className="text-red-500 text-sm">{errors.balance}</p>
          )}

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-slate-50">
            <h3 className="text-lg font-bold mb-4">Confirm Account Details</h3>
            <p>
              <strong>First Name:</strong> {formData.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Balance:</strong> ${Number(formData.balance)}
            </p>{" "}
            {/* Ensure balance is displayed as number */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="btn btn-error"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={confirmAccountCreation}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
