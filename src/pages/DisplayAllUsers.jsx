import { useOutletContext } from "react-router-dom";

const DisplayAllUsers = () => {
  const { users: context } = useOutletContext();
  const { users } = context;
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li className="flex" key={user.id}>
            {/* Render the users here */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DisplayAllUsers;
