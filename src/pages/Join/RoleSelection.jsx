import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  // Navigate to the login page with the selected role
  const handleRoleSelection = (role) => {
    if (role === "trainer") {
      navigate("/join/trainer");
    } else if (role === "customer") {
      navigate("/join/customer");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg px-10 pt-8 pb-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Join As</h1>
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelection("trainer")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Gym Trainer
          </button>
          <button
            onClick={() => handleRoleSelection("customer")}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Gym Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
