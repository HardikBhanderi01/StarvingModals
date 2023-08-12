import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container flex sm:flex-row flex-col items-center  mb-5 sm:mb-10 w-full justify-between">
      <div>
        <a href="#">
          <img src={require("../assets/Icon.svg").default} alt="Logo" />
        </a>
      </div>
      <div className="flex sm:flex-row flex-col items-start mt-5 sm:mt-0">
        <p className="px-3 py-2 flex items-center text-xs uppercase font-secondary text-white lg:text-md tracking-wider">
          <span className="ml-2">
            © 2022 StarvingModels.io. All Rights Reserved. Created by
            tonicLABS.io.
          </span>
        </p>
        <Link
          className="px-3 py-2 flex items-center text-xs uppercase font-secondary text-white hover:opacity-75 lg:text-md tracking-wider"
          to="/term"
        >
          <span className="ml-2">TERMS AND CONDITIONS</span>
        </Link>
        {/*<Link*/}
        {/*  className="px-3 py-2 flex items-center text-xs  font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider"*/}
        {/*  to="/"*/}
        {/*>*/}
        {/*  <span className="ml-2">CREATED BY tonicLABS.io</span>*/}
        {/*</Link>*/}

        {/* <a className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75 lg:text-md font-primary tracking-wider">
          <span className="ml-2">Created by tonicLABS.io</span>
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
