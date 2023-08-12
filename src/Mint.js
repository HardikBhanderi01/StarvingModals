import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "components/Footer";
import Header from "./components/Header";

const Mint = () => {
  let navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="mint mb-10 md:p-10 p-6">
        <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-BebasNeue tracking-wider text-center ">
          Join the Realm of the Starved
        </div>
        <div className="bg-white w-fit md:px-20 md:py-10 py-5 px-10 rounded-2xl m-auto md:mt-10 mt-5">
          <div className="px-3 py-2 bg-mintWhite rounded-md text-black text-md font-BebasNeue flex justify-between">
            <div>0</div>{" "}
            <div className="h-full bg-black text-white px-8 rounded-md">
              Mint
            </div>
          </div>
          <div className="flex justify-between my-3 ">
            <div className="text-black text-md font-BebasNeue">
              Mint price: 0.8{" "}
            </div>
            <div className="text-black text-md font-BebasNeue">
              max per wallet: 5{" "}
            </div>
          </div>
          <div className="text-black text-md font-BebasNeue">
            Contact Adress:{" "}
            <span className="text-mintWhite break">
              0xa584E25aC604E1E365802ff225f7D02eDabAA4FC
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Mint;
