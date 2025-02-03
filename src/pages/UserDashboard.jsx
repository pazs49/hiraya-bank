import FundOperations from "./FundOperations";

import { FileClock } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const { userId } = useParams();

  return (
    <>
      <div className="flex flex-col">
        <FundOperations />
      </div>
      <div className="absolute top-20 left-2">
        <button
          onClick={() => {
            navigate(`transactions-history`);
          }}
          className="btn"
        >
          <FileClock />
        </button>
      </div>
    </>
  );
};
export default UserDashboard;
