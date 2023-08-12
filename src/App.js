import React, { useEffect } from "react";
import Header from "components/Header";
import Collection from "components/Collection";
import FAQ from "components/FAQ";
import TEAM from "components/Team";
import Footer from "components/Footer";
import MoodBoard from "components/MoodBoard";
import Art from "components/Art";
import NewArt from "components/NewArt";
import Hero from "components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* Header */}
      <Header />
      {/* HERO */}
      <Hero />

      {/* COLLECTION */}
      <Collection />

      {/* ART */}
      <NewArt />

      {/* Collection_two */}
      {/* <Collection_two /> */}

      {/* MoodBoard */}
      <MoodBoard />

      {/* FAQ */}
      <FAQ />

      {/* TEAM */}
      <TEAM />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
