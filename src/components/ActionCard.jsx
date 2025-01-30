import { useNavigate } from "react-router-dom";

const ActionCard = ({ title, description, url }) => {
  const navigate = useNavigate();

  const handleNavigate = (_url) => {
    navigate(_url);
  };

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title mx-auto">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleNavigate(url);
            }}
            className="btn"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};
export default ActionCard;
