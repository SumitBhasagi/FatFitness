import React from "react";

const LayOut = (props) => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
        <About />
        <About2 />
        <About />
        <Contact />
        <Pricing />
        <AppBanner />
        <Testimonial />
        <Footer />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  );
};

export default LayOut;
