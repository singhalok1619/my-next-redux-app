import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../src/redux/actions";

const UpdateUser: React.FC = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [newName, setNewName] = useState("");

  const handleUpdateUser = () => {
    const user = { id: parseInt(userId, 10), name: newName };
    dispatch(updateUser(user));
    setUserId("");
    setNewName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user ID to update"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter new user name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UpdateUser;
