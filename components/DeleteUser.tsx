// src/components/DeleteUser.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../src/redux/actions";

const DeleteUser: React.FC = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");

  const handleDeleteUser = () => {
    dispatch(deleteUser(parseInt(userId, 10)));
    setUserId("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user ID to delete"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
