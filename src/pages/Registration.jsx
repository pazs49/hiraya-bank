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
    balance: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  // const [showModal, setShowModal] = useState(false);

  // Validate form inputs
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = "First Name is required.";
    if (!formData.lastName)
      validationErrors.lastName = "Last Name is required.";
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowModal = () => {
    document.getElementById("my_modal_3").showModal();
  };
  const handleHideModal = () => {
    document.getElementById("my_modal_3").close();
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    console.log(
      "User details:",
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.balance
    );
    console.log(typeof formData.balance);

    addUser({
      id: new Date().getTime(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      balance: formData.balance,
    });

    // if (Object.keys(validationErrors).length > 0) {
    //   console.log("Added");
    //   setErrors(validationErrors);
    // } else {
    //   console.log("Not Added");

    //   setErrors({});
    //   setShowModal(true);
    // }
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Hiraya Bank Account
        </h2>
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

            {/* Show Modal Button */}
            <button
              type="button"
              onClick={handleShowModal}
              className="btn btn-primary w-full"
            >
              Create Account
            </button>

            {/* Modal */}
            <div>
              <dialog id="my_modal_3" className="modal w-fit mx-auto">
                <div className="modal-box flex flex-col items-center">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={handleHideModal}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                  <h3 className="font-bold text-lg text-center">
                    Are the details correct?
                  </h3>
                  <p className="py-4 text-center">Press OK to create account</p>
                  <div className="space-x-5">
                    {/* Submit Button */}
                    <button onClick={handleSubmit} className="btn btn-success">
                      OK
                    </button>
                    <button onClick={handleHideModal} className="btn btn-error">
                      Cancel
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
            {/* Modal End */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
