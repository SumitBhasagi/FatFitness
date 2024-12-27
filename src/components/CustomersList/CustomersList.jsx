// import React, { useEffect, useState } from "react";
// import { getCustomers } from './api';

// const CustomersList = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const data = await getCustomers();
//         setCustomers(data);  // Save the customers to state
//       } catch (error) {
//         console.error("Error fetching customers", error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   return (
//     <div>
//       <h2>Customer List</h2>
//       {customers.length > 0 ? (
//         <ul>
//           {customers.map((customer) => (
//             <li key={customer.id}>
//               {customer.name} - {customer.email} - {customer.fitness_level}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No customers found</p>
//       )}
//     </div>
//   );
// };

// export default CustomersList;
////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "./api"; // Import API functions

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers when the component mounts
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data); // Set customers in state
      } catch (error) {
        console.error("Error fetching customers", error);
      }
    };

    fetchCustomers();
  }, []);

  // Handle delete operation
  const handleDelete = async (customerId) => {
    try {
      await deleteCustomer(customerId); // Call delete API

      // Remove the deleted customer from the list without fetching again
      setCustomers(customers.filter((customer) => customer.id !== customerId));

      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error deleting customer", error);
      alert("Error deleting customer!");
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.email} - {customer.fitness_level}
              {/* Add a Delete button next to each customer */}
              <button onClick={() => handleDelete(customer.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
};

export default CustomersList;
