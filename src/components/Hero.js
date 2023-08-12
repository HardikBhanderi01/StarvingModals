import React, { useState } from "react";
import { Shake } from 'reshake'

const Hero = () => {
  const [shakeValue, setShakeValue] = useState(1)
  return (
    <div className="container">
      <div className="relative hero-prnt"
      >
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            width: '14%',
            height:'50%',
            maxWidth: '40%',
            left: '46%',
            zIndex: 111,
          }}
          onMouseEnter={() => setShakeValue(100)}
          onMouseLeave={() => setShakeValue(1)}
        />
        <img src={require("../assets/back.png")} className="hero" />
        <Shake
          className="hero_sub"
          h={5}
          v={5}
          r={3}
          dur={500}
          int={10}
          max={shakeValue}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <img src={require("../assets/back_2.png")} />
        </Shake>
      </div>

      <div className="uppercase font-bold text-white text-base sm:text-md lg:text-xl font-primary tracking-wider text-center mb-10">
        let's go on a journey...
      </div>
    </div>
  );
};

export default Hero;
