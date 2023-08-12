import React from "react";

const Art = () => {
  return (
    <div className="container my-10" id="art">
      <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider text-center mb-10">
        ART
      </div>
      <div className="box-gradient">
        <div className="s_1 marquee">
          <img
            src={require(`../assets/s1.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s1.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div className="s_2 marquee marquee-down">
          <img
            src={require(`../assets/s2.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s2.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div className="s_3 marquee">
          <img
            src={require(`../assets/s3.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s3.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div className="s_4 hidden md:block marquee marquee-down">
          <img
            src={require(`../assets/s4.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s4.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div className="s_5 hidden md:block marquee">
          <img
            src={require(`../assets/s5.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s5.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
        <div className="s_6 hidden md:block marquee marquee-down">
          <img
            src={require(`../assets/s6.png`)}
            alt="art"
            className="w-full h-auto"
          />
          <img
            src={require(`../assets/s6.png`)}
            alt="art"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Art;
