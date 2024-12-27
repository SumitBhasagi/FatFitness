import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Join from "./pages/Join/Join";
import Services from "./pages/Services/Services";
import About from "./components/About/About";
import About2 from "./components/About/About2";
import Detail from "./pages/Detail/Detail";
import WorkoutPlan from "./pages/WorkoutPlan/WorkoutPlan";
// import RoleSelection from "./pages/Join/RoleSelection";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
// ]);
const App = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black dark:text-white text-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/workout-plan" element={<WorkoutPlan />} />
          {/* <Route path="/about" element={[<About />, <About2 />, <About />]} /> */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <About2 />
                <About />
              </>
            }
          />
        </Routes>
      </Router>
      {/* <Detail></Detail> */}
    </div>
  );
};

export default App;
// import React, { useState, useEffect } from "react";
// import {
//   getCustomers,
//   addCustomer,
//   deleteCustomer,
//   updateCustomer,
// } from "./api"; // Import API functions

// // Component to display and manage customers
// const App = () => {
//   const [customers, setCustomers] = useState([]);
//   const [newCustomer, setNewCustomer] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     fitness_level: "",
//     goal: "",
//     mobile: "",
//     address: "",
//   });

//   const [editCustomer, setEditCustomer] = useState(null);

//   // Fetch customers when the component mounts
//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const data = await getCustomers();
//         setCustomers(data); // Set customers in state
//       } catch (error) {
//         console.error("Error fetching customers", error);
//       }
//     };

//     fetchCustomers();
//   }, []); // Empty dependency array means this runs once when the component mounts

//   // Handle adding a new customer
//   const handleAddCustomer = async (e) => {
//     e.preventDefault(); // Prevent page reload on form submit

//     try {
//       const data = await addCustomer(newCustomer); // Call the API to add a new customer
//       setCustomers([...customers, data]); // Add the new customer to the list
//       setNewCustomer({
//         name: "",
//         email: "",
//         password: "",
//         age: "",
//         fitness_level: "",
//         goal: "",
//         mobile: "",
//         address: "",
//       }); // Clear form
//     } catch (error) {
//       console.error("Error adding customer", error);
//     }
//   };

//   // Handle delete customer
//   const handleDeleteCustomer = async (id) => {
//     try {
//       await deleteCustomer(id); // Call the API to delete the customer
//       setCustomers(customers.filter((customer) => customer.id !== id)); // Remove the customer from the list
//     } catch (error) {
//       console.error("Error deleting customer", error);
//     }
//   };

//   // Handle updating customer
//   const handleUpdateCustomer = async (e) => {
//     e.preventDefault();

//     try {
//       const data = await updateCustomer(editCustomer.id, editCustomer); // Call API to update the customer
//       setCustomers(
//         customers.map((customer) => (customer.id === data.id ? data : customer))
//       ); // Update the customer in the list
//       setEditCustomer(null); // Reset edit form
//     } catch (error) {
//       console.error("Error updating customer", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Customer Management</h1>

//       {/* Add Customer Form */}
//       <h2>Add New Customer</h2>
//       <form onSubmit={handleAddCustomer}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newCustomer.name}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, name: e.target.value })
//           }
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newCustomer.email}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, email: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Password"
//           value={newCustomer.password}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, password: e.target.value })
//           }
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={newCustomer.age}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, age: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Fitness Level"
//           value={newCustomer.fitness_level}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, fitness_level: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Goal"
//           value={newCustomer.goal}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, goal: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Mobile"
//           value={newCustomer.mobile}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, mobile: e.target.value })
//           }
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={newCustomer.address}
//           onChange={(e) =>
//             setNewCustomer({ ...newCustomer, address: e.target.value })
//           }
//         />
//         <button type="submit">Add Customer</button>
//       </form>

//       {/* Edit Customer Form */}
//       {editCustomer && (
//         <div>
//           <h2>Edit Customer</h2>
//           <form onSubmit={handleUpdateCustomer}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={editCustomer.name}
//               onChange={(e) =>
//                 setEditCustomer({ ...editCustomer, name: e.target.value })
//               }
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={editCustomer.email}
//               onChange={(e) =>
//                 setEditCustomer({ ...editCustomer, email: e.target.value })
//               }
//             />
//             {/* Repeat for other fields */}
//             <button type="submit">Update Customer</button>
//           </form>
//         </div>
//       )}

//       {/* Customer List */}
//       <h2>Customer List</h2>
//       <ul>
//         {customers.map((customer) => (
//           <li key={customer.id}>
//             {customer.name} - {customer.email}
//             <button onClick={() => handleDeleteCustomer(customer.id)}>
//               Delete
//             </button>
//             <button onClick={() => setEditCustomer(customer)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
