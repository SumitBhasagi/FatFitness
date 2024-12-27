import React from "react";

const Contact = () => {
  return (
    <div className="my-14">
      <div className="container dark:bg-dark bg-gray-100 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
              <span className="text-primary">Sweat Now, Shine later.</span>
              Your Body Is a Reflection of Your Lifestyle Choices
            </h1>
          </div>
          <div className="text-center grid place-items-center">
            <button className="primary-btn">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
