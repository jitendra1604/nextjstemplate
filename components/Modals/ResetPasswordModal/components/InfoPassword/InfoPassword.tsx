import React from "react";
import styles from "./InfoPassword.module.scss";

const InfoPassword = (props: any) => {
  const { list = [], title = "", show } = props;
  return (
    <div className={styles.infoPassword + " " + (show ? styles.show : "")}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <ul>
          {list.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoPassword;
