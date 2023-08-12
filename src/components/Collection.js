import React from "react";

const Collection = () => {
  return (
    <div className="container" id="collection">
      <div
        className="grid grid-cols-3 gap-8 my-20 items-center"
        data-aos="fade-up"
      >
        <div className="hidden md:block col-span-3 md:col-span-1 m-auto">
          <div className="collection-box max-h-56 max-w-56 w-56 h-56 md:w-60 md:h-60 md:max-w-60 md:max-h-60 lg:w-72 lg:h-72 lg:max-w-72 lg:max-h-72 2xl:w-80 2xl:h-80 2xl:max-w-80 2xl:max-h-80">
            <img src={require("../assets/mod1.png")} alt="model" />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 md:text-left text-center ml-2">
          <div className="uppercase font-bold text-white text-lg md:text-xl lg:text-2xl font-primary tracking-wider ">
            the story
          </div>
          <div className="font-secondary text-white text-base md:text-md mt-5">
            Year 2025 - <br />
            <br />
            A contagion event occurred a couple of decades ago and an AI program
            went rogue, bringing chaos to the social media platforms and
            disrupting the society through targeted algorithmic anarchy. <br />
            <br />
            Are you a survivor?
            <br />
            <br />
            Discover the Realm of the Starved!
          </div>
        </div>

        <div className="md:hidden col-span-3 md:col-span-1 mt-5  m-auto">
          <div className="collection-box max-h-56 max-w-56 w-56 h-56 md:w-60 md:h-60 md:max-w-60 md:max-h-60 lg:w-72 lg:h-72 lg:max-w-72 lg:max-h-72 2xl:w-80 2xl:h-80 2xl:max-w-80 2xl:max-h-80">
            <img src={require("../assets/mod1.png")} alt="model" />
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-8 my-20 items-center"
        data-aos="fade-up"
      >
        <div className="col-span-3 md:col-span-2 md:text-left text-center">
          <div className="uppercase font-bold text-white text-lg md:text-xl lg:text-2xl font-primary tracking-wider ">
            THE IRONY
          </div>
          <div className="font-secondary text-white text-base md:text-md mt-5">
            Starving Models is about uplifting the community while exploring
            healthy and authentic representations of beauty. The art presents a
            simple irony, that although figures of influence may appear picture
            perfect on the social media, some are in fact suffering greatly to
            keep up with the toxic beauty standards and extreme dieting habits
            to achieve an unhealthy fantasy.
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 mt-5 m-auto">
          <div className="collection-box max-h-56 max-w-56 w-56 h-56 md:w-60 md:h-60 md:max-w-60 md:max-h-60 lg:w-72 lg:h-72 lg:max-w-72 lg:max-h-72 2xl:w-80 2xl:h-80 2xl:max-w-80 2xl:max-h-80">
            <img src={require("../assets/mod2.png")} alt="model" />
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-8 my-20 items-center"
        data-aos="fade-up"
      >
        <div className="hidden md:block col-span-3 md:col-span-1 m-auto">
          <div className="collection-box max-h-56 max-w-56 w-56 h-56 md:w-60 md:h-60 md:max-w-60 md:max-h-60 lg:w-72 lg:h-72 lg:max-w-72 lg:max-h-72 2xl:w-80 2xl:h-80 2xl:max-w-80 2xl:max-h-80">
            <img src={require("../assets/model-2.jpg")} alt="model" />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 md:text-left text-center ml-2">
          <div className="uppercase font-bold text-white text-lg md:text-xl lg:text-2xl font-primary tracking-wider ">
            THE COLLECTION
          </div>
          <div className="font-secondary text-white text-base md:text-md mt-5">
            A fashionably curated art collection of 7887 starving models with
            diverse backgrounds. Every model, outfit or accessory is hand-drawn
            and put together by the imagination and skills of talented artists
            and fashion designers. Each model has a different background, story
            and internal monsters. Their style says a lot about who they want
            the world to see them as, but…what happens when all the eyes go
            away?
          </div>
        </div>

        <div className="md:hidden col-span-3 md:col-span-1 mt-5 m-auto">
          <div className="collection-box max-h-56 max-w-56 w-56 h-56 md:w-60 md:h-60 md:max-w-60 md:max-h-60 lg:w-72 lg:h-72 lg:max-w-72 lg:max-h-72 2xl:w-80 2xl:h-80 2xl:max-w-80 2xl:max-h-80">
            <img src={require("../assets/model-2.jpg")} alt="model" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
