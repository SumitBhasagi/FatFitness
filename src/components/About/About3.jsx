import React from "react";
import BannerImg from "../../assets/banner.png";
const About = () => {
  return (
    <div className="py-16 dark:bg-black bg-slate-100 dark:text-white duration-200 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 plcae-items-center ">
          {/* image section  */}
          <div>
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 max-h-[300px] drop-shadow-md mx-auto"
            />
          </div>
          {/* text section   */}
          <div className="space-y-4">
            {/* Heading section   */}
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl">
                <h1 className="font-bold">03</h1>
              </div>
              <div>
                <p className="text-primary">VirtuFit E-GYM </p>
                <h1 className="text-2xl sm:text-4xl font-bold">
                  Why Choose VirtuFit E-GYM?
                </h1>
              </div>
            </div>
            {/* text section   */}
            <div>
              <p>
                1.Personalized Plans
                <br />
                2.On-Demand Workouts
                <br />
                3.Professional Trainers
                <br />
                4.Tracking Progress
                <br />
                5.Tracking Progress
                <br />
                6.Flexibility & Convenience
              </p>
            </div>
            {/* bottom section   */}
            <button className="outline-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
