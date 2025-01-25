import { useOutletContext } from "react-router-dom";

const Registration = () => {
    const { users: context } = useOutletContext();
    const { users } = context;
    const { addUser } = context;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Hiraya Account Creation</h2>

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