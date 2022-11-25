import React from "react";
import styles from "../../styles/components/Home.module.scss";
import { Homedata } from "../Data/homepage";
const Bannersection = () => {
  return (
    <section className={`container ${styles.bannersec}`}>
      {Homedata.map((data, index) => {
        return (
          <div key={data.id}>
            <h1>
              {data.title} <span>{data.title2}</span>{" "}
            </h1>
            <p className="p-secondary">{data.content}</p>
            <div
              className={`${styles.buttonsection} d-flex justify-content-between`}
            >
              <div className={styles.button_val}>
                <a href="#" className=" btn btn-violet">
                  {data.buttonname}
                </a>
                <p className="p-primary">{data.buttonname_content}</p>
              </div>
              <div className={styles.button_val}>
                <a href="#" className="btn btn-border">
                  {data.buttonname1}
                </a>
                <p className="p-primary">{data.buttonname1_content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Bannersection;
