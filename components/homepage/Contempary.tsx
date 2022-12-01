import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../../styles/components/Home.module.scss";
import Contem1 from "../../public/images/contem_img1.png";
import Contem2 from "../../public/images/contem_img2.png";
import Contem3 from "../../public/images/contem_img3.png";
import { ContemSignData } from "../Data/homepage";
import { ContemBoosterData } from "../Data/homepage";

const Contempary = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={`${styles.contempary_sec} contem_slider`}>
      <div className={`container`}>
        <Tab.Container defaultActiveKey="accreda_sign">
          <div className="mb-3">
            <Row>
              <Col md={7} className={styles.col_12}>
                <h2>
                  Select from our contemporary and <span>cutting edge</span>{" "}
                  programs
                </h2>
                <div className={`${styles.contempary_tabs} contem_tabs`}>
                  <Nav>
                    <Nav.Item className={styles.nav_item}>
                      <Nav.Link eventKey="accreda_sign">
                        Accreda Signature Program
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.nav_item}>
                      <Nav.Link eventKey="accreda_booster">
                        Accreda Booster Program
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col md={{ span: 4, offset: 1 }} className={styles.col_12}>
                <div className={styles.contempary_tab_content}>
                  <Tab.Content>
                    <Tab.Pane eventKey="accreda_sign">
                      <h6>
                        <span>Accreda</span> Signature program
                      </h6>
                      <p>
                        The Signature Accreda programs help aspiring
                        professionals develop expertise in the professional area
                        or discipline of their choice by providing a holistic
                        learning experience to the learner{" "}
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="accreda_booster">
                      <h6>
                        <span>Accreda</span> Booster program
                      </h6>
                      <p>
                        The Signature Accreda programs help aspiring
                        professionals develop expertise in the professional area
                        or discipline of their choice by providing a holistic
                        learning experience to the learner{" "}
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="accreda_sign">
                <Col md={12}>
                  <Slider {...settings}>
                    {ContemSignData.map((item) => {
                      return (
                        <div key={item.id}>
                          <Card className={styles.contem_cards}>
                            <Card.Body className={styles.card_body}>
                              <Card.Title>
                                <h2>{item.title}</h2>
                              </Card.Title>
                              <Card.Text>{item.para}</Card.Text>
                              <div className={styles.muted_text}>
                                <ul className="list-unstyled">
                                  <li>{item.foot1}</li>
                                  <li>{item.foot2}</li>
                                </ul>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                  </Slider>
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="accreda_booster">
                <Col md={12}>
                  <Slider {...settings}>
                    {ContemBoosterData.map((item) => {
                      return (
                        <div key={item.id}>
                          <Card className={styles.contem_cards}>
                            <Card.Body className={styles.card_body}>
                              <Card.Title>
                                <h2>{item.title}</h2>
                              </Card.Title>
                              <Card.Text>{item.para}</Card.Text>
                              <div className={styles.muted_text}>
                                <ul className="list-unstyled">
                                  <li>{item.foot1}</li>
                                  <li>{item.foot2}</li>
                                </ul>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                  </Slider>
                </Col>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
      <div className={styles.contem_imglft}>
        <Image src={Contem1} alt="contem-img" />
      </div>
      <div className={styles.contem_imgryt}>
        <Image src={Contem2} alt="contem-img" />
      </div>
      <div className={styles.contem_imgcnt}>
        <Image src={Contem3} alt="contem-img" />
      </div>
    </section>
  );
};

export default Contempary;
