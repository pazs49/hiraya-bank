import { useOutletContext, useParams } from "react-router-dom";

const FundOperations = () => {
  const { id } = useParams();
  const { users: context } = useOutletContext();
  const { users } = context;

  const getCurrentUser = () => {
    const user = users.find((user) => {
      return user.id === Number(id);
    });
    return user;
  };

  return (
    <div>
      <p>{`${getCurrentUser().firstName} ${getCurrentUser().lastName}`}</p>
      <p>{`${getCurrentUser().balance}`}</p>

    </div>
  );
};
export default FundOperations;

