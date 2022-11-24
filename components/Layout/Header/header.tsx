import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Logo from '../../../public/images/accreda-logo.png';
import Fly_img from '../../../public/images/fly_img.png';
import Fly_icon from '../../../public/images/fly_icon.png';
import Benefit_icon from '../../../public/images/benefit_icon.png';
import styles from "./header.module.scss";
import { Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar className={styles.header} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.sectionlist} mx-auto`}>
            <div className={styles.fly_cont}>
              <Nav.Link href="#home">FLY</Nav.Link>
              <div className={styles.fly_content}>
                  <Row>
                    <Col md="6">
                        <Row>
                          <Col md="5">
                            <h3>Forever Learning and You</h3>
                            <p>Accreda’s proprietary career building platform.</p>
                          </Col>
                          <Col md="7">
                            <figure>
                                <Image src={Fly_img} alt="fly-img" />
                            </figure>
                          </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <div className={styles.nav_links}>
                          <a href="#">
                            <Image src={Fly_icon} alt="fly-icon" />
                            <span>
                              What is FLY?
                            </span>
                          </a>
                          <a href="#">
                            <Image src={Benefit_icon} alt="benefit-icon" />
                            <span>
                              What is FLY?
                            </span>
                          </a>
                        </div>
                    </Col>
                  </Row>
              </div>
            </div>
            <Nav.Link href="#link">Discover Programs</Nav.Link>
            <Nav.Link href="#link">Enterprise Solutions</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
