import { useOutletContext } from "react-router-dom";
import React, { useState } from "react";


const Registration = () => {
    // const { users: context } = useOutletContext();
    // const { users } = context;
    // const { addUser } = context;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        balance: "",
    });
    const [errors, setErrors] = useState({});

    // Validate form inputs
    const validateForm = () => {
        const validationErrors = {};
        if (!formData.firstName) validationErrors.firstName = "First Name is required.";
        if (!formData.lastName) validationErrors.lastName = "Last Name is required.";
        if (!formData.email) {
            validationErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Invalid email format.";
        }
        if (!formData.balance || isNaN(formData.balance)) {
            validationErrors.balance = "Balance must be a valid number.";
        }
        return validationErrors;
    };

    // Handle input changes
    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
        }
    };


    return (
        <div className="container mx-auto p-6">

            <h2 className="text-2xl font-bold text-center mb-6">Create Hiraya Bank Account</h2>

            <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter First Name"
                            className="input input-bordered w-full"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter Last Name"
                            className="input input-bordered w-full"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>

                    {/* Balance */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Balance</span>
                        </label>
                        <input
                            type="number"
                            name="balance"
                            value={formData.balance}
                            onChange={handleChange}
                            placeholder="Enter Balance"
                            className="input input-bordered w-full"
                        />
                        {errors.balance && (
                            <p className="text-red-500 text-sm">{errors.balance}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );


};

export default Registration;