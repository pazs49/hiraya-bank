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

            <div className="max-w-lg mx-auto bg-base-200 p-6 rounded-lg shadow-md">
                <form >
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Hiraya ID</span>
                        </label>
                        <input
                            type="text"
                            name="id"
                            placeholder="Enter Hiraya ID number"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Initial Deposit</span>
                        </label>
                        <input
                            type="number"
                            name="balance"
                            placeholder="enter Initial deposit amount"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Create User
                    </button>
                </form>
            </div>
        </div>
    );

};

export default Registration;
