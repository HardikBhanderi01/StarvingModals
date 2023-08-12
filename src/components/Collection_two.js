import React from "react";

const Collection_two = () => {
  var data = [
    {
      title: "STARVED SOCIETY",
      description:
        "We're starved for action! We will be collaborating with established social media personalities that provide helpful insights, empowerment vibes or daily laughs. IRL Inclusive Fashion+ Art events for SM holders at various locations including LA, Miami, NYC featuring talented independent artists in addition to sponsoring events with partners around the world.",
      img: 3,
    },
    {
      title: "CHASING A TOXIC FANTASY (REALITY VS. SOCIAL MEDIA)",
      description:
        "Have you ever noticed how you feel after a long stroll on social media? If you’re left feeling lonely, self-conscious or simply not enough, you, just like everyone else at some point in their journey, have come to experience the compare-and-despair effect of social media and its negative impacts on mental health. We will be utilizing various channels such as Twitter spaces and Discord, to create support systems for the community to share, connect and help one another with occasional speakers on a specific community selected topic.",
      img: 4,
    },
    {
      title: "CLEANSING MODEL (FILTRATION AND EMPOWERMENT)",
      description:
        "How your feed makes you feel is a great indicator of how well you have cleansed it from toxicity. Social media is a powerful tool connecting us all around the globe which can still be used for its true purpose of enabling connections, expressing creativity and being inspired. Happiness is created by you and your mind. Reconnect with your body and recognize it for the journey it's been through. It starts with self-assurance and maybe even cleansing your social feeds once in a while. There are still many great influencers who truly work hard to brighten your mood.",
      img: 5,
    },
  ];
  return (
    <div className="container">
      {data.map((value, index) => {
        return (
          <div className="grid grid-cols-4 gap-20 my-10 items-center justify-items-center sm:justify-items-start" key={index} data-aos="zoom-in" data-aos-duration='1000'>
            <div className="col-span-4 sm:col-span-1 collection-round w-72 h-72 md:w-80 md:h-80" >
              <img
                src={require(`../assets/model-${value.img}.jpg`)}
                alt="model"
                className="w-60 h-60 md:w-72 md:h-72"
              />
            </div>
            <div className="col-span-4 sm:col-span-3 sm:text-left text-center">
              <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider">
                {value.title}
              </div>
              <div className="font-secondary text-white text-base mg:text-md mt-5">
                {value.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collection_two;
