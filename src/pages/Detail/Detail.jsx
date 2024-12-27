// import React, { useState } from "react";

// const Details = () => {
//   const [age, setAge] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bodyFat, setBodyFat] = useState("");
//   const [gender, setGender] = useState("");
//   const [cholesterol, setCholesterol] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!age || !weight || !height || !bodyFat || !gender || !cholesterol) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     // Save details to localStorage or API call
//     const userDetails = {
//       age,
//       weight,
//       height,
//       bodyFat,
//       gender,
//       cholesterol,
//     };
//     localStorage.setItem("userDetails", JSON.stringify(userDetails));

//     console.log("Details Saved:", userDetails);
//     alert("Details saved successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="bg-gray-800 shadow-lg rounded-lg px-10 pt-8 pb-10 w-full max-w-lg">
//         <h1 className="text-3xl font-bold text-center mb-8">
//           {" "}
//           Fill Up Your Current Body Details
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="age"
//             >
//               Age
//             </label>
//             <input
//               type="number"
//               id="age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="weight"
//             >
//               Weight (kg)
//             </label>
//             <input
//               type="number"
//               id="weight"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="height"
//             >
//               Height (cm)
//             </label>
//             <input
//               type="number"
//               id="height"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="bodyFat"
//             >
//               Body Fat Percentage (%)
//             </label>
//             <input
//               type="number"
//               id="bodyFat"
//               value={bodyFat}
//               onChange={(e) => setBodyFat(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="gender"
//             >
//               Gender
//             </label>
//             <select
//               id="gender"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-300 text-sm font-bold mb-2"
//               htmlFor="cholesterol"
//             >
//               Cholesterol Level (mg/dL)
//             </label>
//             <input
//               type="number"
//               id="cholesterol"
//               value={cholesterol}
//               onChange={(e) => setCholesterol(e.target.value)}
//               className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Details;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    subscription: "",
    fitnessGoals: "",
    height: "",
    weight: "",
  });

  const [error, setError] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100;
    const bmiValue = formData.weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setBmiStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiStatus("Overweight");
    } else {
      setBmiStatus("Obesity");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.age ||
      !formData.gender ||
      !formData.subscription ||
      !formData.fitnessGoals ||
      !formData.height ||
      !formData.weight
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Redirect to the workout plan page after form submission
    navigate("/workout-plan", {
      state: { fitnessGoals: formData.fitnessGoals },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg px-10 pt-8 pb-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Gym Registration Form
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Age Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Gender Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Height Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="height"
            >
              Height (in cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Weight Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="weight"
            >
              Weight (in kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* BMI Calculation */}
          <div className="mb-6">
            <button
              type="button"
              onClick={calculateBMI}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Calculate BMI
            </button>
          </div>

          {bmi && (
            <div className="mb-6">
              <p className="text-lg">
                Your BMI: {bmi} ({bmiStatus})
              </p>
            </div>
          )}

          {/* Subscription Type Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="subscription"
            >
              Subscription Type
            </label>
            <select
              id="subscription"
              name="subscription"
              value={formData.subscription}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Subscription</option>
              <option value="Elite">Elite</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          {/* Fitness Goal Input */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="fitnessGoals"
            >
              Fitness Goals
            </label>
            <select
              id="fitnessGoals"
              name="fitnessGoals"
              value={formData.fitnessGoals}
              onChange={handleChange}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Fitness Goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Maintain Health">Maintain Health</option>
            </select>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Detail;
