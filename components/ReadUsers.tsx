import React from "react";
import { useSelector } from "react-redux";

const ReadUsers: React.FC = () => {
  const users = useSelector((state: any) => state.users);
  
  return (
    <div>
      <h2 className="text-center">User List:</h2>
      <p className="text-orange-500">Tailwind Testing</p>
      <ul>
        {users.map((user: any) => (
          <>
            <ul>
              <li key={user.id}>
                {user.firstName} {user?.lastName}
              </li>
              <li key={user.id}>{user.id}</li>
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ReadUsers;
