import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../src/redux/actions";
import { stat } from "fs";

const AddUser: React.FC = () => {
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [panel, setPanel] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [observedBy, setObservedBy] = useState("");
  const [status, setStatus] = useState("");
  // const [name, setName] = useState("");

  const handleAddUser = () => {
    const user = {
      id: Date.now(),
      firstName,
      lastName,
      panel,
      source,
      date,
      amount,
      observedBy,
      status,
    };
    dispatch(addUser(user));
    setfirstName("");
    setlastName("");
    setPanel("");
    setSource("");
    setDate("");
    setAmount("");
    setObservedBy("");
    setStatus("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter user first name"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter user last name"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
