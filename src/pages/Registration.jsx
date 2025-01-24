import { useOutletContext } from "react-router-dom";

const Registration = () => {
  const { users: context } = useOutletContext();
  const { users } = context;
  const { addUser } = context;

  return <div>Registration</div>;
};
export default Registration;
