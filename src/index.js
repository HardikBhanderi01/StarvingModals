import ScrollToTop from "components/Scroll-to-top";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Mint from './Mint'
import Term from "./Term";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AnimatedCursor
      innerSize={8}
      outerSize={32}
      color="226, 218, 214"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={5}
    />
    <ScrollToTop />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/term" element={<Term />} />
      </Routes>
    </Router>
  </>
);
