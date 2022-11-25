import React from "react";
import Bannersection from "../components/homepage/Bannersection";
import Career from "../components/homepage/Career";
import Partnerslist from "../components/homepage/Partnerslist";
import Programs from "../components/homepage/Programs";

const Homepage = () => {
  return (
    <div>
      <Bannersection />
      <Partnerslist />
      <Programs />
      <Career />
    </div>
  );
};

export default Homepage;
