import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carrercontent } from "../Data/homepage";
import Borderimg from "../../public/images/footerborder.svg";
import Image from "next/image";
import styles from "../../styles/components/Home.module.scss";

const Career = () => {
  return (
    <section className={styles.careercontent}>
      <Row>
        <Col sm={6}>
          {Carrercontent.map((data, index) => {
            return (
              <div key={data.id}>
                <Image
                  className={styles.border_line}
                  alt=""
                  src={Borderimg}
                  width={188}
                  height={20.49}
                />
                <div>
                  <h4>{data.mian}</h4>
                  <h2>{data.title}</h2>
                  <p className="p-primary">{data.content}</p>
                  <a href="#">{data.links}</a>
                  <h3>{data.title2}</h3>
                  <p>{data.subtitle}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col sm={6}>
          {Carrercontent.map((data, index) => {
            return (
              <div className={styles.image_container} key={data.id}>
                <Image
                  src={data.Image}
                  alt=""
                  layout="fill"
                  className={styles.image}
                />
              </div>
            );
          })}
        </Col>
      </Row>
    </section>
  );
};

export default Career;
