import React from "react";

const PricingData = [
  {
    name: "Silver Card",
    price: 499,
    link: "3",
    discription: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand .",
      "Live classes on demand.",
    ],
    duration: "12 Month",
    aosDelay: "0",
  },
  {
    name: "Silver Card",
    price: 499,
    link: "3",
    discription: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand .",
      "Live classes on demand.",
    ],
    duration: "12 Month",
    aosDelay: "500",
  },
  {
    name: "Elite Card",
    price: 499,
    link: "3",
    discription: [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand .",
      "Live classes on demand.",
    ],
    duration: "12 Month",
    aosDelay: "1000",
  },
];

const Pricing = () => {
  return (
    <div className="my-14 py-12">
      <div className="container">
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
          Why Choose Us
        </h1>

        {/* card section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 ">
          {PricingData.map((data, index) => (
            <div
              key={index}
              className="space-y-4 text-center bg-gray-200 dark:bg-dark text-black dark:text-white p-4 sm:py-16 rounded-lg group shadow-2xl hover:bg-primary/20
              dark:hover:bg-primary/50 duration-200"
            >
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h1 className="text-4xl font-semibold text-primary">
                {data.price}
              </h1>
              {data.discription.map((discription) => (
                <p>{discription}</p>
              ))}
              <p className="font-semibold text-xl py-3">
                Duration: {data.duration}
              </p>
              <button className="primary-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
