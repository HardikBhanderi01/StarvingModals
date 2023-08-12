import React from "react";

const Art = () => {
  return (
    <div className="container my-10" id="art">
      <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider text-center mb-10">
        ART
      </div>
      <div className=" grid grid-cols-2 gap-10 box-gradient">
        <div
          className="col-span-2 sm:col-span-1"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src={require(`../assets/art1.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div
          className="col-span-1 hidden sm:block"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <img
            src={require(`../assets/art2.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Art;
