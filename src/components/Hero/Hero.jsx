import React from "react";
import BannerImg from "../../assets/hero.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundpPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="bg-white dark:text-white dark:bg-black duration-200"
    >
      <div className="bg-white/70 dark:bg-black/70 duration-200">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p className="text-primary text-3xl">
              Start Your Fitness Journey With
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">VirtuFit E-GYM</h1>
            <p className="md:text-3xl font-bold">
              "Your Personlized Fitness Solution"
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
