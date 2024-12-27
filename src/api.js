// // api.js
// import axios from "axios";

// const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

// // Function to create a customer
// export const createCustomer = async (customerData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/customers`, customerData);
//     return response.data; // Return data from response
//   } catch (error) {
//     console.error("Error creating customer", error);
//     throw error; // Propagate error to be handled in component
//   }
// };

// // Function to get all customers
// export const getCustomers = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/customers`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching customers", error);
//     throw error;
//   }
// };

// // Function to update a customer
// export const updateCustomer = async (customerId, customerData) => {
//   try {
//     const response = await axios.put(
//       `${BASE_URL}/customers/${customerId}`,
//       customerData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error updating customer", error);
//     throw error;
//   }
// };

// // Function to delete a customer
// export const deleteCustomer = async (customerId) => {
//   try {
//     const response = await axios.delete(`${BASE_URL}/customers/${customerId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting customer", error);
//     throw error;
//   }
// };
//////////////////////////////////////////////////////
import axios from "axios";

// Base URL for your API (update the URL if it's hosted remotely)
const API_URL = "http://localhost:5000"; // Change if the server is running on a different port

// Function to fetch all customers
export const getCustomers = async () => {
  const response = await axios.get(`${API_URL}/customers`);
  return response.data; // Return customer data
};

// Function to add a new customer
export const addCustomer = async (customer) => {
  const response = await axios.post(`${API_URL}/customers`, customer);
  return response.data; // Return the created customer data
};

// Function to delete a customer
export const deleteCustomer = async (customerId) => {
  const response = await axios.delete(`${API_URL}/customers/${customerId}`);
  return response.data; // Return a success message
};

// Function to update a customer
export const updateCustomer = async (customerId, updatedData) => {
  const response = await axios.put(
    `${API_URL}/customers/${customerId}`,
    updatedData
  );
  return response.data; // Return the updated customer data
};
