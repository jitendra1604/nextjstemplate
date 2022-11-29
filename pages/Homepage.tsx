import React from "react";
import Bannersection from "../components/homepage/Bannersection";
import Career from "../components/homepage/Career";
import Enterprise from "../components/homepage/Enterprise";
import Faqsection from "../components/homepage/Faqsection";
import Futureplan from "../components/homepage/Futureplan";
import Partnerslist from "../components/homepage/Partnerslist";
import Programs from "../components/homepage/Programs";
import { Universities } from "../components/homepage/Universities";

const Homepage = () => {
  return (
    <div>
      <Bannersection />
      <Partnerslist />
      <Programs />
      <Career />
      <Universities />
      <Futureplan />
      <Enterprise />
      <Faqsection />
    </div>
  );
};

export default Homepage;
