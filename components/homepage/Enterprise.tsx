import React from "react";
import styles from "../../styles/components/Home.module.scss";
import { Enterpricontent } from "../Data/homepage";
import Borderimg from "../../public/images/footerborder.svg";
import Image from "next/image";

const Enterprise = () => {
  return (
    <section className={`${styles.Enterprise_section} `}>
      <div>
        <Image
          className={styles.border_line}
          alt=""
          src={Borderimg}
          width={188}
          height={20.49}
        />
        {Enterpricontent.map((data, index) => {
          return (
            <div key={data.id} className={styles.Enterprise_content}>
              <h4>{data.title}</h4>
              <h2>{data.mian}</h2>
              <p>{data.content}</p>
              <div className={styles.image_container}>
                <Image
                  alt=""
                  src={data.Image}
                  width={904}
                  height={519}
                  className={styles.image}
                />
              </div>
              <a href="#" className="btn btn-border">
                {data.buttonname}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Enterprise;
