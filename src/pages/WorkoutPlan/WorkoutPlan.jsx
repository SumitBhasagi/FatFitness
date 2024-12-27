// import React from "react";
// import { useLocation } from "react-router-dom";

// const WorkoutPlan = () => {
//   const location = useLocation();
//   const { fitnessGoals } = location.state || {}; // Fetch fitness goals from state

//   // Workout plans for different fitness goals
//   const workoutPlans = {
//     "Weight Loss": {
//       title: "Weight Loss Workout Plan",
//       description:
//         "This workout plan is designed to help you achieve your weight loss goals. Follow these exercises along with a healthy diet for the best results!",
//       routine: [
//         "30 minutes of Cardio (Running, Cycling, or Jump Rope)",
//         "3 sets of 15 Squats",
//         "3 sets of 15 Push-ups",
//         "3 sets of 20 Mountain Climbers",
//         "3 sets of 15 Burpees",
//         "30 minutes of HIIT (High Intensity Interval Training)",
//         "10 minutes of Stretching and Flexibility exercises",
//       ],
//       videoLink:
//         // "https://www.youtube.com/embed/fISuclX9Dbk?si=F8mzgjKDOkYs6Yk3",
//         "https://youtube.com/embed/ygAC0yJp1KU?si=9PgUbhvA_xPVGj_8", // Using embed URL
//     },
//     "Muscle Gain": {
//       title: "Muscle Gain Workout Plan",
//       description:
//         "This workout plan is designed to help you gain muscle mass. Perform these exercises and follow a high-protein diet for best results.",
//       routine: [
//         "4 sets of 10 Squats",
//         "4 sets of 10 Bench Presses",
//         "4 sets of 10 Deadlifts",
//         "4 sets of 12 Push-ups",
//         "4 sets of 12 Bicep Curls",
//         "3 sets of 10 Pull-ups",
//         "Stretch and warm-up before the workout",
//       ],
//       videoLink: "https://www.youtube.com/embed/R9g1w9grD_U", // Example video link for Muscle Gain
//     },
//     "Maintain Health": {
//       title: "Maintain Health Workout Plan",
//       description:
//         "This workout plan is perfect for those looking to maintain overall health and fitness. It's a balanced routine for full-body strength and endurance.",
//       routine: [
//         "20 minutes of Cardio (Running, Cycling, or Walking)",
//         "3 sets of 12 Push-ups",
//         "3 sets of 15 Squats",
//         "3 sets of 10 Plank Hold (30 seconds each)",
//         "3 sets of 12 Lunges",
//         "Stretching and Mobility exercises",
//       ],
//       videoLink: "https://www.youtube.com/embed/JxRYh9IXK28", // Example video link for Health Maintenance
//     },
//   };

//   // Get the corresponding workout plan for the selected fitness goal
//   const selectedWorkoutPlan = workoutPlans[fitnessGoals];

//   if (!selectedWorkoutPlan) {
//     return <p>Sorry, no workout plan available for this fitness goal.</p>;
//   }

//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
//       <h2 className="text-2xl font-bold mb-4">{selectedWorkoutPlan.title}</h2>
//       <p className="text-lg mb-4">{selectedWorkoutPlan.description}</p>

//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Workout Routine</h3>
//         <ul className="list-disc pl-6">
//           {selectedWorkoutPlan.routine.map((exercise, index) => (
//             <li key={index}>{exercise}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2">Workout Video</h3>
//         <iframe
//           width="100%"
//           height="400"
//           src={selectedWorkoutPlan.videoLink}
//           title="Workout Video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default WorkoutPlan;

import React from "react";
import { useLocation } from "react-router-dom";

const WorkoutPlan = () => {
  const location = useLocation();
  const { fitnessGoals } = location.state || {}; // Fetch fitness goals from state

  // Workout plans for different fitness goals
  const workoutPlans = {
    "Weight Loss": {
      title: "Weight Loss Workout Plan",
      description:
        "This workout plan is designed to help you achieve your weight loss goals. Follow these exercises along with a healthy diet for the best results!",
      routine: [
        "30 minutes of Cardio (Running, Cycling, or Jump Rope)",
        "3 sets of 15 Squats",
        "3 sets of 15 Push-ups",
        "3 sets of 20 Mountain Climbers",
        "3 sets of 15 Burpees",
        "30 minutes of HIIT (High Intensity Interval Training)",
        "10 minutes of Stretching and Flexibility exercises",
      ],
      videoLink:
        "https://www.youtube.com/embed/fISuclX9Dbk?si=F8mzgjKDOkYs6Yk3", // Using embed URL
    },
    "Muscle Gain": {
      title: "Muscle Gain Workout Plan",
      description:
        "This workout plan is designed to help you gain muscle mass. Perform these exercises and follow a high-protein diet for best results.",
      routine: [
        "4 sets of 10 Squats",
        "4 sets of 10 Bench Presses",
        "4 sets of 10 Deadlifts",
        "4 sets of 12 Push-ups",
        "4 sets of 12 Bicep Curls",
        "3 sets of 10 Pull-ups",
        "Stretch and warm-up before the workout",
      ],
      videoLink: "https://www.youtube.com/embed/R9g1w9grD_U", // Example video link for Muscle Gain
    },
    "Maintain Health": {
      title: "Maintain Health Workout Plan",
      description:
        "This workout plan is perfect for those looking to maintain overall health and fitness. It's a balanced routine for full-body strength and endurance.",
      routine: [
        "20 minutes of Cardio (Running, Cycling, or Walking)",
        "3 sets of 12 Push-ups",
        "3 sets of 15 Squats",
        "3 sets of 10 Plank Hold (30 seconds each)",
        "3 sets of 12 Lunges",
        "Stretching and Mobility exercises",
      ],
      videoLink: "https://www.youtube.com/embed/JxRYh9IXK28", // Example video link for Health Maintenance
    },
  };

  // Get the corresponding workout plan for the selected fitness goal
  const selectedWorkoutPlan = workoutPlans[fitnessGoals];

  if (!selectedWorkoutPlan) {
    return (
      <p className="text-center text-red-500">
        Sorry, no workout plan available for this fitness goal.
      </p>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-orange-500 to-black-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black-400">
              {selectedWorkoutPlan.title}
            </h2>
            <p className="text-lg text-gray-200">
              {selectedWorkoutPlan.description}
            </p>

            <div className="bg-gray-900 rounded-lg p-6 shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-yellow-400">
                Workout Routine
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {selectedWorkoutPlan.routine.map((exercise, index) => (
                  <li key={index} className="text-md">
                    {exercise}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400">
              Workout Video
            </h3>
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="400"
                src={selectedWorkoutPlan.videoLink}
                title="Workout Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <button className="bg-yellow-400 text-gray-800 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300">
            Get Started with This Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
