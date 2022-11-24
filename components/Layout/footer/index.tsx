import React from "react";
import Borderimg from "../../../public/images/footerborder.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <section>
      <div>
        <Image src={Borderimg} alt="" />
        <p>dkkddjkj</p>
        <a href="#" className="btn btn-violet">
          Green Button
        </a>
        <a href="#" className="btn-border btn-white">
          Green Button
        </a>
      </div>
    </section>
  );
};
