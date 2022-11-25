import React from "react";
import Borderimg from "../../../public/images/footerborder.svg";
import Image from "next/image";
import { Footerdata } from "../../Data/footer";
import styles from "../../../styles/components/Footer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <section>
      <div className="container">
        {Footerdata.map((main, index) => {
          return (
            <>
              <div className={`${styles.footer_scetion}`}>
                <div>
                  <Image
                    className={styles.imageborder}
                    src={Borderimg}
                    alt=""
                  />
                  <h3>{main.title}</h3>
                  <ul className={styles.sublinks}>
                    {main.subtitle.map((sub) => {
                      return (
                        <li key={sub.id}>
                          <a href="#">
                            <h2>{sub.name}</h2>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Row className={styles.footer_links}>
                  <Col
                    key={main.id}
                    className={styles.rlativesection}
                    xs={24}
                    xl={6}
                    md={6}
                  >
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
                  <Col key={main.id} xs={24} xl={6} md={6}>
                    <div>
                      <Row>
                        <Col key={main.id}>
                          {main.links.map((dataname, index) => {
                            return (
                              <div key={dataname.id}>
                                <p className="p-secondary">{dataname.title}</p>
                                <ul>
                                  {dataname.sublinks?.map((links, index) => {
                                    return (
                                      <li key={links.id}>
                                        <a href="#">{links.name}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </Col>
                        <Col key={main.id}>
                          {main.links.map((dataname, index) => {
                            return (
                              <div key={dataname.id}>
                                {dataname.linkssecond?.map((links, index) => {
                                  return (
                                    <>
                                      <p className="p-secondary">
                                        {links.title}
                                      </p>
                                      <ul>
                                        {links.sublinks.map((links) => {
                                          return (
                                            <li key={links.id}>
                                              <a href="#">{links.name}</a>
                                            </li>
                                          );
                                        })}
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
              </div>
              <div className={styles.info}>
                <Row className={styles.list}>
                  {main.conntacts.map((conntacts, index) => {
                    return (
                      <Col className={styles.footer_Part} key={conntacts.id}>
                        <div key={conntacts.id}>
                          <div className="d-flex align-items-center">
                            <div style={{ marginRight: "5px" }}>
                              {conntacts.Image1 === "" ? (
                                ""
                              ) : (
                                <Image
                                  src={conntacts.Image1}
                                  alt=""
                                  width={16}
                                  height={16}
                                />
                              )}
                            </div>
                            <div>
                              <p>{conntacts.name}</p>
                            </div>
                          </div>
                          <div className={styles.imge_section}>
                            {conntacts.Image === "" ? (
                              ""
                            ) : (
                              <Image
                                src={conntacts.Image}
                                width={60}
                                height={60}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
