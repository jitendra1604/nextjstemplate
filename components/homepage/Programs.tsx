import React from "react";
import styles from "../../styles/components/Home.module.scss";
import { Programslist } from "../Data/homepage";

import dynamic from "next/dynamic";
import Image from "next/image";
const Programs = () => {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });
  return (
    <section className={`${styles.partnerlist} ${styles.Program_section}`}>
      <div className="react_player">
        {Programslist.map((data, index) => {
          return (
            <>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=zohpogt56Bg"
                width="100%"
                height="100%"
                playIcon={
                  <div>
                    <Image src={data.icon} alt="" width={12} height={12} />
                  </div>
                }
                light={data.Image}
                controls
              />
              <div className={styles.iframe_card}>
                <div className={styles.iframe_card_content}>
                  <h3>
                    {data.title}
                    <span>{data.title1} </span>
                    {data.title2}
                  </h3>
                  <button className="btn btn-gold btn-border2">
                    {data.buttonname}
                    <Image src={data.icon} width={12} height={12} alt="" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
