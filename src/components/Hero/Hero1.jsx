import React from "react";
import Slider from "react-slick"; // Import the Slider component
// import { useNavigate } from "react-router-dom";
import BannerImg1 from "../../assets/BannerImg1.jpg";
import BannerImg2 from "../../assets/BannerImg2.jpg";
import BannerImg3 from "../../assets/BannerImg3.jpg";
import BannerImg from "../../assets/hero.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite looping
    speed: 2000, // Slide transition speed (1 second)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Delay between slides (1 second)
    fade: true, // Fade effect between slides (optional)
    arrows: true, // Show next/prev arrows
  };

  // Define a common style for the background image with overlay
  const bgStyleWithOverlay = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  });

  return (
    <div className="bg-white dark:text-white dark:bg-black duration-200">
      <div className="bg-white/70 dark:bg-black/70 duration-200">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div style={bgStyleWithOverlay(BannerImg1)}>
              <div className="bg-white/65 dark:bg-black/65 duration-2000 min-h-[735px] flex items-center">
                <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
                  <p className="text-primary text-3xl">
                    Start Your Fitness Journey With
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold">
                    VirtuFit E-GYM
                  </h1>
                  <p className="md:text-3xl font-bold">
                    "Your Personalized Fitness Solution"
                  </p>
                  <button className="primary-btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div style={bgStyleWithOverlay(BannerImg2)}>
              <div className="bg-white/65 dark:bg-black/65 duration-2000 min-h-[735px] flex items-center">
                <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
                  <p className="text-primary text-3xl">
                    Achieve Your Best Shape
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold">
                    With Our Experts
                  </h1>
                  <p className="md:text-3xl font-bold">
                    "Tailored Workout Plans"
                  </p>
                  <button className="primary-btn">Join Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div style={bgStyleWithOverlay(BannerImg3)}>
              <div className="bg-white/65 dark:bg-black/65 duration-2000 min-h-[735px] flex items-center">
                <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
                  <p className="text-primary text-3xl">
                    Unlimited Classes Anytime
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold">
                    Train Wherever You Are
                  </h1>
                  <p className="md:text-3xl font-bold">
                    "Live and On-Demand Sessions"
                  </p>
                  <button className="primary-btn">Sign Up Today</button>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div>
            <div style={bgStyleWithOverlay(BannerImg)}>
              <div className="bg-white/65 dark:bg-black/65 duration-2000 min-h-[735px] flex items-center">
                <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
                  <p className="text-primary text-3xl">
                    Start Your Fitness Journey With
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold">
                    VirtuFit E-GYM
                  </h1>
                  <p className="md:text-3xl font-bold">
                    "Your Personalized Fitness Solution"
                  </p>
                  <button className="primary-btn">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
