import React from "react";
// import Hero from "../Hero/Hero";
import Hero1 from "../Hero/Hero1";
import About from "../About/About";
import About2 from "../About/About2";
import About3 from "../About/About3";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import AppBanner from "../AppBanner/AppBanner";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Hero1 />
      {/* <Hero /> */}
      <About />
      <About2 />
      <About3 />
      <Contact />
      <Pricing />
      <AppBanner />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
