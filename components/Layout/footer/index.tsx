import React from "react";
import Borderimg from "../../../public/images/footerborder.svg";
import Image from "next/image";
import { Footerdata } from "../../Data/footer";
import styles from "../../../styles/components/Footer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Footer = () => {
  return (
    <section className={`${styles.footer_scetion} container`}>
      <div>
        {Footerdata.map((main, index) => {
          return (
            <>
              <div>
                <Image className={styles.imageborder} src={Borderimg} alt="" />
                <h3>{main.title}</h3>
                <ul className={styles.sublinks}>
                  {main.subtitle.map((sub) => {
                    return (
                      <li>
                        <a href="#">
                          <h2>{sub.name}</h2>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Row>
                <Col>
                  <p>{main.content}</p>
                  <div className={styles.mailsection}>
                    <div>
                      <Image src={main.Image} width={24} height={24} alt="" />
                    </div>
                    <div>
                      <p>{main.mail}</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Row>
                      <Col>
                        {main.links.map((dataname, index) => {
                          return (
                            <div>
                              <p>{dataname.title}</p>
                              <ul>
                                {dataname.sublinks?.map((links, index) => {
                                  return (
                                    <li>
                                      <a href="#">{links.name}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </Col>
                      <Col>
                        {main.links.map((dataname, index) => {
                          return (
                            <div>
                              {dataname.linkssecond?.map((links, index) => {
                                return (
                                  <>
                                    <p>{links.title}</p>
                                    <ul>
                                      <li>
                                        <a href="#">
                                          {links.sublinks.map((links) => {
                                            return <>{links.name}</>;
                                          })}
                                        </a>
                                      </li>
                                    </ul>
                                  </>
                                );
                              })}
                            </div>
                          );
                        })}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </>
          );
        })}
      </div>
    </section>
  );
};
