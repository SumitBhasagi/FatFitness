import React from "react";
import BannerImg from "../../assets/banner2.png";
const About2 = () => {
  return (
    <div
      className="py-16 dark:bg-dark
    bg-slate-100 dark:text-white duration-200 "
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 plcae-items-center ">
          <div className=" space-y-4">
            {/* Heading section   */}
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl">
                <h1 className="font-bold">02</h1>
              </div>
              <div>
                <p className="text-primary">VirtuFit E-GYM</p>
                <h1 className="text-2xl sm:text-4xl font-bold">Our Mission</h1>
              </div>
            </div>
            {/* text section   */}
            <div>
              <p>
                Our mission is simple: to bring fitness into the digital age and
                provide a platform where everyone can achieve their goals with
                the right guidance and tools. We are dedicated to making health
                and wellness more accessible through innovative, on-demand
                training solutions and personalized workout plans, all available
                from the comfort of your home or gym.
                <br />
              </p>
            </div>
            {/* bottom section   */}
            <button className="outline-btn">Get Started</button>
          </div>
          {/* image section  */}
          <div>
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 max-h-[300px] drop-shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
