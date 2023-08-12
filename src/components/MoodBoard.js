import { data } from "autoprefixer";
import React from "react";

const MoodBoard = () => {
  const Data = [
    {
      title: (
        <>
          <span>TBD LAUNCH </span>
          <br />
          <span>TBD PRESALE</span>
          <br />
          <span>TBD PUBLIC SALE</span>
        </>
      ),
    },
    {
      title: "",
    },
    {
      title: "IRL STARVING SOCIETY EVENT",
    },
    {
      title: "PODCAST+TWITTER SPACE SUPPORT SYSTEM",
    },
    {
      title: "EXCLUSIVE MERCH",
    },
    {
      title: "",
    },
    {
      title: "STARVING SOCIETY SERIES 2 FREE MINT FOR HOLDERS",
    },
    {
      title: "",
    },
    {
      title: "COLLABS WITH AUTHENTIC FIGURES OF INFLUENCE",
    },
  ];
  return (
    <div className="container" id="moodboard">
      <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider text-center mb-10">
        moodboard
      </div>
      <div className="my-10 items-center moodBox-container" id="test">
        {Data.map((value, index) => {
          return (
            <div className="mood" key={index}>
              <div className={`moodBox p-4 md:p-10 moodbox-${index + 1}`}></div>
              <div className="text-base text-smd md:text-md uppercase font-bold text-white font-primary tracking-wider mood_text">
                {value.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodBoard;
