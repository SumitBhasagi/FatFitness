import React from "react";
import { deleteCustomer } from "./api"; // Import the delete function from your api.js file

const DeleteCustomer = ({ customerId, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Call the deleteCustomer API
      await deleteCustomer(customerId);

      // Call onDelete function passed as prop to update the parent component
      onDelete(customerId);

      alert("Customer deleted successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Error deleting customer!");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteCustomer;
