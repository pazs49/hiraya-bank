// let name = "ivan"
// const Registration = () => {
//   return <div>{name}</div>;

import { useOutletContext } from "react-router-dom";

const Registration = () => {
  const { users: context } = useOutletContext();
  const { users } = context;
  const { addUser } = context;

  return <div>Registration</div>;
};
export default Registration;
