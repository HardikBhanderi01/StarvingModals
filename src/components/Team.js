import React from "react";

const TEAM = () => {
  const Data = [
    {
      name: "SHEY",
      email: "shey@starvingmodels.io",
      twitter: "https://twitter.com/NematSheida",
    },
    {
      name: "ROB",
      email: "rob@starvingmodels.io",
      twitter: "https://twitter.com/elevenrm",
    },
    {
      name: "",
      email: "demo@gmail.com",
      twitter: "demo3863",
    },
    {
      name: "ALEX",
      email: "alex@starvingmodels.io",
      insta: "https://instagram.com/amirfazelian1986?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "MONYSE",
      email: "monyse@starvingmodels.io",
      twitter: "https://twitter.com/mnnarriman",
    },
    {
      name: "TINA",
      email: "tina@starvingmodels.io",
      twitter: "https://twitter.com/tintinjpeg",
    },
  ];
  return (
    <div id="team">
      <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider text-center">
        team
      </div>

      <div className="my-5 sm:my-10 relative overflow-hidden">
        <img
          src={require("../assets/team_background.jpg")}
          alt="team"
          className="team"
        />

        <div className="hidden sm:block my-10 absolute team-contact">
          {Data.map((value, index) => {
            if (index === 2) {
              return <div></div>;
            }
            return (
              <div className="team-contact-div " key={index}>
                <div
                  className={`bg-white col-span-1 flex items-center justify-center team-contact-card ${index === 5 && `team-card-ext`
                    }`}
                >
                  {value.twitter && (
                    <div
                      className="bg-black mr-2 rounded-md md:rounded-xl p-1 h-5 w-5 flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        window.open(value.twitter, "_blank");
                      }}
                    >
                      <img src={require("../assets/twitter.png")} alt="t" />
                    </div>
                  )}

                  {value.insta && (
                    <div
                      className="bg-black mr-2 rounded-md md:rounded-xl p-1 h-5 w-5 flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        window.open(value.insta, "_blank");
                      }}
                    >
                      <img src={require("../assets/insta.png")} alt="t" />
                    </div>
                  )}

                  {value.email && (
                    <div
                      className="bg-black mr-2 rounded-md md:rounded-xl p-1 h-5 w-5 flex items-center justify-center cursor-pointer"
                      onClick={() =>
                        (window.location = `mailto:${value.email}`)
                      }
                    >
                      <img src={require("../assets/email.png")} alt="e" />
                    </div>
                  )}

                  <div className="uppercase font-bold text-black text-md font-primary tracking-wider">
                    {value.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm:hidden container my-10">
        <div className="grid grid-cols-2 gap-5 items-center">
          {Data.map((value, index) => {
            if (index === 2) {
              return null;
            }
            return (
              <div
                className="bg-white col-span-1 sm:text-left text-center px-3 py-2 rounded-md md:rounded-xl flex items-center"
                key={index}
              >
                {value.twitter && (<div className="bg-black rounded-md md:rounded-xl p-1 md:h-7 h-5 md:w-7 w-5 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    window.open(value.twitter, "_blank");
                  }}
                >
                  <img src={require("../assets/twitter.png")} alt="t" />
                </div>)}
                {value.insta && (
                  <div
                    className="bg-black mr-2 rounded-md md:rounded-xl p-1 h-5 w-5 flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      window.open(value.insta, "_blank");
                    }}
                  >
                    <img src={require("../assets/insta.png")} alt="t" />
                  </div>
                )}
                <div
                  className="bg-black mx-2  rounded-md md:rounded-xl p-1 md:h-7 h-5 md:w-7 w-5 flex items-center justify-center cursor-pointer"
                  onClick={() =>
                    (window.location = `mailto:${value.email}`)
                  }
                >
                  <img src={require("../assets/email.png")} alt="e" />
                </div>
                <div className="uppercase font-bold text-black md:text-xl text-md font-primary tracking-wider">
                  {value.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TEAM;
