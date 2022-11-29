import React from "react";
import styles from "../../styles/components/Home.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { Faqdata } from "../Data/homepage";
import Bullets from "../../public/images/bullets.svg";
import Image from "next/image";
import Borderimg from "../../public/images/footerborder.svg";

const Faqsection = () => {
  return (
    <section className={`${styles.Faqcontent} container Faqsec`}>
      <Accordion defaultActiveKey="1">
        {Faqdata.map((data, index) => {
          return (
            <>
              <Image
                className={styles.border_line}
                alt=""
                src={Borderimg}
                width={188}
                height={20.49}
              />
              <h2 className={styles.header_title}>{data.title}</h2>
              {data.list_items.map((subdata, index) => {
                return (
                  <Accordion.Item eventKey={`${subdata.id}`} key={subdata.id}>
                    <Accordion.Header>
                      <div className={styles.flex_section}>
                        <div>
                          <Image src={Bullets} width={9} height={12} alt="" />
                        </div>
                        <div>
                          <h4>{subdata.title}</h4>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>{subdata.content}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </>
          );
        })}
      </Accordion>
    </section>
  );
};

export default Faqsection;
