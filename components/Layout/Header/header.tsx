import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import logo from '../../../public/images/accreda-logo.png';
import flyimg from '../../../public/images/fly_img.png';
import flyicon from '../../../public/images/fly_icon.png';
import benefiticon from '../../../public/images/benefit_icon.png';
import announcement from '../../../public/images/announcement.png';
import rightarrow from '../../../public/images/right-arrw.png';
import styles from "./header.module.scss";
import { Card, Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className={styles.header} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.sectionlist} mx-auto`}>
            <div className={styles.fly_cont}>
              <Nav.Link href="#home">FLY</Nav.Link>
              <div className={`${styles.fly_content} ${styles.mega_menu_layout}`}>
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
                            <span>
                              What is FLY?
                            </span>
                          </a>
                          <a href="#">
                            <Image src={benefiticon} alt="benefit-icon" />
                            <span>
                              What is FLY?
                            </span>
                          </a>
                        </div>
                    </Col>
                  </Row>
              </div>
            </div>

            <div className={styles.discover_cont}>
              <Nav.Link href="#link">Discover Programs</Nav.Link>
              <div className={`${styles.mega_menu_layout} ${styles.discover_content}`}>
                <Row>
                  <Col md="6">
                    <Row>
                      <Col md="6">
                        <div className={styles.about_cards}>
                          <h5>About Us</h5>
                          <p className={styles.p_primary}>Whats the Story behind Accreda</p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className={styles.about_cards}>
                          <h5>FAQ</h5>
                          <p className={styles.p_primary}>Got more questions? We’ve got you covered</p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className={styles.about_cards}>
                          <h5>Resources</h5>
                          <p className={styles.p_primary}>Go through our Blogs, Research Papers,written by experts.</p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className={styles.about_cards}>
                          <h5>Contact Us</h5>
                          <p className={styles.p_primary}>Get in touch with our Team.</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6" className={styles.ryt_brdr}>
                    <Row>
                      <Col md="6">
                        <Card className={styles.announcement_card}>
                          <Card.Title className={styles.title_txt}>Announcement</Card.Title>
                          <figure>
                            <Image src={announcement} alt="announcement-img" className="img-fluid w-100"/>
                          </figure>
                          <Card.Body className={styles.announce_body}>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Read more<span><Image src={rightarrow} alt="right-arrw"/></span></Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className={styles.announcement_card}>
                          <Card.Title className={styles.title_txt}>Announcement</Card.Title>
                          <figure>
                            <Image src={announcement} alt="announcement-img" className="img-fluid w-100"/>
                          </figure>
                          <Card.Body className={styles.announce_body}>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Read more<span><Image src={rightarrow} alt="right-arrw"/></span></Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
            <Nav.Link href="#link">Enterprise Solutions</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
