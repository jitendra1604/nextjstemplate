import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logo from "../../../public/images/accreda-logo.png";
import flyimg from "../../../public/images/fly_img.png";
import flyicon from "../../../public/images/fly_icon.png";
import benefiticon from "../../../public/images/benefit_icon.png";
import announcement from "../../../public/images/announcement.png";
import rightarrow from "../../../public/images/right-arrw.png";
import downarrow from "../../../public/images/down-arrow.png";
import flyiconvio from "../../../public/images/fly_vio.png";
import styles from "./header.module.scss";
import { Button, Card, Col, Row, Tab } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className={`${styles.header} header_resp`} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.sectionlist} mx-auto`}>
            <div className={` ${styles.fly_cont} mx-md-3`}>
              <Nav.Link href="#home">
                FLY
                <span className="ms-2">
                  <Image src={downarrow} alt="down-arrow" />
                </span>
              </Nav.Link>
              <div
                className={`${styles.fly_content} ${styles.mega_menu_layout}`}
              >
                <Row>
                  <Col md="6" className="px-0">
                    <Row>
                      <Col md="5">
                        <h3>Forever Learning and You</h3>
                        <p>Accreda’s proprietary career building platform.</p>
                      </Col>
                      <Col md="7">
                        <figure>
                          <Image src={flyimg} alt="fly-img" />
                        </figure>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6" className="px-0">
                    <div className={styles.nav_links}>
                      <a href="#">
                        <Image src={flyicon} alt="fly-icon" />
                        <span>What is FLY?</span>
                      </a>
                      <a href="#">
                        <Image src={benefiticon} alt="benefit-icon" />
                        <span>What is FLY?</span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={`${styles.discover_cont} mx-md-3`}>
              <Nav.Link href="#link">
                Discover Programs
                <span className="ms-2">
                  <Image src={downarrow} alt="down-arrow" />
                </span>
              </Nav.Link>
              <div
                className={` ${styles.discover_content} ${styles.mega_menu_layout}`}
              >
                <Container className={styles.mega_container}>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Row className="justify-content-center">
                      <Col
                        sm={2}
                        className={` ${styles.ryt_brdr} ${styles.content_tabs_pddg}`}
                      >
                        <Nav className={` ${styles.discover_tabs} flex-column`}>
                          <h5>By Program</h5>
                          <Nav.Item>
                            <Nav.Link
                              className={styles.discover_links}
                              eventKey="first"
                            >
                              Accreda Signature Program
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              Accreda Booster Program
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Nav className={` ${styles.discover_tabs} flex-column`}>
                          <h5>By Type</h5>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              Post Graduate Program
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fourth">
                              Certificate Program
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9} className={styles.content_tabs_pddg}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className={styles.discover_tabs_content}>
                              <div
                                className={`${styles.tostmessage} ${styles.violet_bg}`}
                              >
                                <p>
                                  The Accreda Booster Program are byte sized /
                                  micro-skills acquisition programs that lead to
                                  proficiency in one defined area. These are
                                  short term programs and typically take between
                                  2 and 4 weeks for completion.
                                </p>
                              </div>
                              <div className="d-flex flex-wrap">
                                <figure>
                                  <Image src={flyiconvio} alt="fly-icon" />
                                </figure>
                                <div>
                                  <h5>Our Programs</h5>
                                  <span>Powered by FLY</span>
                                </div>
                              </div>
                              <ul
                                className={`${styles.mega_lists} list-unstyled row`}
                              >
                                <li className="col-md-4">
                                  <a href="#">Digital Marketing</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Business Acumen</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Leadership</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Project Management</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Professional Skills</a>
                                </li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className={styles.discover_tabs_content}>
                              <div className={styles.tostmessage}>
                                <p>
                                  The Accreda Booster Program are byte sized /
                                  micro-skills acquisition programs that lead to
                                  proficiency in one defined area. These are
                                  short term programs and typically take between
                                  2 and 4 weeks for completion.
                                </p>
                              </div>
                              <div className="d-flex flex-wrap">
                                <figure>
                                  <Image src={flyiconvio} alt="fly-icon" />
                                </figure>
                                <div>
                                  <h5>Our Programs</h5>
                                  <span>Powered by FLY</span>
                                </div>
                              </div>
                              <ul
                                className={`${styles.mega_lists} list-unstyled row`}
                              >
                                <li className="col-md-4">
                                  <a href="#">Modern Management</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Business Acumen 01</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Business Acumen 02</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Business Acumen 03</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Business Acumen 04</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Professional Skills 01</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Professional Skills 02</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Professional Skills 03</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Professional Skills 04</a>
                                </li>
                              </ul>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="third">
                            <div className={styles.discover_tabs_content}>
                              <div
                                className={`${styles.tostmessage} ${styles.violet_bg}`}
                              >
                                <p>
                                  The Accreda Booster Program are byte sized /
                                  micro-skills acquisition programs that lead to
                                  proficiency in one defined area. These are
                                  short term programs and typically take between
                                  2 and 4 weeks for completion.
                                </p>
                              </div>
                              <div className="d-flex flex-wrap">
                                <figure>
                                  <Image src={flyiconvio} alt="fly-icon" />
                                </figure>
                                <div>
                                  <h5>Our Programs</h5>
                                  <span>Powered by FLY</span>
                                </div>
                              </div>
                              <ul
                                className={`${styles.mega_lists} list-unstyled row`}
                              >
                                <li className="col-md-4">
                                  <a href="#">Digital Marketing</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Leadership</a>
                                </li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth">
                            <div className={styles.discover_tabs_content}>
                              <div className={styles.tostmessage}>
                                <p>
                                  The Accreda Booster Program are byte sized /
                                  micro-skills acquisition programs that lead to
                                  proficiency in one defined area. These are
                                  short term programs and typically take between
                                  2 and 4 weeks for completion.
                                </p>
                              </div>
                              <div className="d-flex flex-wrap">
                                <figure>
                                  <Image src={flyiconvio} alt="fly-icon" />
                                </figure>
                                <div>
                                  <h5>Our Programs</h5>
                                  <span>Powered by FLY</span>
                                </div>
                              </div>
                              <ul
                                className={`${styles.mega_lists} list-unstyled row`}
                              >
                                <li className="col-md-4">
                                  <a href="#">Analytical Thinking</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Intellectual Property</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Engineering Management</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Data Science</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Purpose Driven Leadership</a>
                                </li>
                                <li className="col-md-4">
                                  <a href="#">Engineering Management</a>
                                </li>
                              </ul>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Container>
              </div>
            </div>

            <div className={`mx-md-3`}>
              <Nav.Link href="#link">Enterprise Solutions</Nav.Link>
            </div>
            <div className={` ${styles.about_cont} mx-md-3`}>
              <Nav.Link href="#link">
                About
                <span className="ms-2">
                  <Image src={downarrow} alt="down-arrow" />
                </span>
              </Nav.Link>
              <div
                className={`${styles.mega_menu_layout} ${styles.about_content}`}
              >
                <div className={styles.faded_imgs}>
                  <Container className={styles.mega_container}>
                    <Row>
                      <Col md="6">
                        <Row>
                          <Col md="6">
                            <div className={styles.about_cards}>
                              <h5>About Us</h5>
                              <p className={styles.p_primary}>
                                Whats the Story behind Accreda
                              </p>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className={styles.about_cards}>
                              <h5>FAQ</h5>
                              <p className={styles.p_primary}>
                                Got more questions? We’ve got you covered
                              </p>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className={styles.about_cards}>
                              <h5>Resources</h5>
                              <p className={styles.p_primary}>
                                Go through our Blogs, Research Papers,written by
                                experts.
                              </p>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className={styles.about_cards}>
                              <h5>Contact Us</h5>
                              <p className={styles.p_primary}>
                                Get in touch with our Team.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="6" className={styles.ryt_brdr}>
                        <Row>
                          <Col md="6">
                            <Card className={styles.announcement_card}>
                              <Card.Title className={styles.title_txt}>
                                Announcement
                              </Card.Title>
                              <figure>
                                <Image
                                  src={announcement}
                                  alt="announcement-img"
                                  className="img-fluid w-100"
                                />
                              </figure>
                              <Card.Body className={styles.announce_body}>
                                <Card.Text>
                                  Accreda announces its affiliation with
                                  Standford University
                                </Card.Text>
                                <Card.Link href="#">
                                  Read more
                                  <span>
                                    <Image src={rightarrow} alt="right-arrw" />
                                  </span>
                                </Card.Link>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md="6">
                            <Card className={styles.announcement_card}>
                              <Card.Title className={styles.title_txt}>
                                Research Paper
                              </Card.Title>
                              <figure>
                                <Image
                                  src={announcement}
                                  alt="announcement-img"
                                  className="img-fluid w-100"
                                />
                              </figure>
                              <Card.Body className={styles.announce_body}>
                                <Card.Text>
                                  Accreda announces its affiliation with
                                  Standford University
                                </Card.Text>
                                <Card.Link href="#">
                                  Read more
                                  <span>
                                    <Image src={rightarrow} alt="right-arrw" />
                                  </span>
                                </Card.Link>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Nav>
          <Button className={styles.outline_btn}>Log in</Button>

          {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
