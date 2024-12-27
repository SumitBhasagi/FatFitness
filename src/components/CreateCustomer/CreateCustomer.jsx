import React, { useState } from "react";
import { createCustomer } from "./api";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      name,
      email,
      password,
      age,
      fitness_level: fitnessLevel,
      goal,
      mobile,
      address,
    };

    try {
      const result = await createCustomer(customerData);
      console.log("Customer created: ", result);
      alert("Customer created successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Error creating customer!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
      />
      <input
        type="text"
        value={fitnessLevel}
        onChange={(e) => setFitnessLevel(e.target.value)}
        placeholder="Fitness Level"
        required
      />
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal"
        required
      />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomer;
