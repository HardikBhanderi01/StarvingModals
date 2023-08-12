import React from "react";
import Faq from "react-faq-component";
const FAQComp = () => {
  const data = {
    rows: [
      {
        title: "WHEN IS THE MINT DATE?",
        content: "TBD",
      },
      {
        title: "WHICH BLOCKCHAIN ARE THE MODELS ON?",
        content: "Ethereum",
      },
      {
        title: "WHAT IS THE MINT PRICE?",
        content: "TBD",
      },
      {
        title: "WHAT IS THE TOTAL SUPPLY?",
        content: "7887",
      },
      {
        title: "HOW MANY CAN I MINT?",
        content: "5",
      },
      {
        title: "WILL THERE BE A PRESALE?",
        content: "Yes. Check Twitter for announcements.",
      },
      {
        title: "UPCOMING PROJECTS?",
        content: "Yes! Stay tuned for updates",
      },
      {
        title: "COMMERCIAL RIGHTS?",
        content:
          "You will have full IP and usage rights for the underlying artwork in your Starving Models NFT.",
      },
    ],
  };

  const styles = {
    bgColor: "transparent",
    titleTextColor: "#B49176",
    rowTitleColor: "#B49176",
    rowContentColor: "#B49176",
    arrowColor: "#B49176",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true,
  };
  return (
    <div id="faq" className="container mt-10">
      <div className="uppercase font-bold text-white text-xl sm:text-2xl lg:text-3xl font-primary tracking-wider text-center ">
        FAQ
      </div>
      <div
        className="my-5 sm:my-10"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQComp;
