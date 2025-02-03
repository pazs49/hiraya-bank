import FundOperations from "./FundOperations";

import { useNavigate, useParams } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const { userId } = useParams();

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <button
          onClick={() => {
            navigate(`transactions-history`);
          }}
          className="btn"
        >
          Transactions History
        </button>
      </div>
      <FundOperations />
    </div>
  );
};
export default UserDashboard;
