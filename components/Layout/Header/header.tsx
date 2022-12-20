import React, { useEffect, useState } from "react";
import { useRef } from "react";
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
import rytarrow from "../../../public/images/ryt_arrw.png";
import downarrow from "../../../public/images/down-arrow.png";
import flyiconvio from "../../../public/images/fly_vio.png";
import leftarrow from "../../../public/images/left_arrw_header.png";
import flyMenuIcon from "../../../public/images/fly_m_icon.png";
import styles from "./header.module.scss";
import { Button, Card, Col, Row, Tab } from "react-bootstrap";
import Signin from "../../Modals/Signinmodal/Signin";
import Loginmodal from "../../Modals/Loginmodal/Loginmodal";
import ForgotPasswordModal from "../../Modals/ForgotPasswordModal/ForgotPasswordModal";
import SentMailSuccessModal from "../../Modals/SentMailSuccessModal/SentMailSuccessModal";
import { useRouter } from "next/router";
import ResetPasswordModal from "../../Modals/ResetPasswordModal/ResetPasswordModal";
import PasswordChangedModal from "../../Modals/PasswordChangedModal/PasswordChangedModal";

export const Header = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showSentMailSuccessModal, setShowSentMailSuccessModal] =
    useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showPasswordChangedModal, setShowPasswordChangedModal] =
    useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [headershow, setHeaderShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
    handleClose();
  };

  const handleShowForgotPassword = () => {
    setShowForgotPasswordModal(true);
    handleCloseLoginModal();
  };

  const handleShowSentMailSuccessModal = () => {
    setShowSentMailSuccessModal(true);
    handleCloseForgotPasswordModal();
  };

  const handleBackToLogin = () => {
    setShowPasswordChangedModal(false);
    handleShowLoginModal();
  };

  const handleShowPasswordChanged = () => {
    setShowPasswordChangedModal(true);
    handleCloseResetPasswordModal();
  };

  const handleClose = () => setShow(false);
  // close Login modal
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleCloseSentMailSuccessModal = () =>
    setShowSentMailSuccessModal(false);
  const handleCloseForgotPasswordModal = () =>
    setShowForgotPasswordModal(false);
  const handleCloseResetPasswordModal = () => {
    setShowResetPasswordModal(false);
    router.push("/");
  };
  const handleClosePasswordChangedModal = () => {
    setShowPasswordChangedModal(false);
  };
  const showAboutopt = useRef<any>(undefined);
  const showDisvoveropt = useRef<any>(undefined);
  const showAccredaSignopt = useRef<any>(undefined);
  const showFlyopt = useRef<any>(undefined);

  const ControlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setHeaderShow(true);
      } else {
        setHeaderShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // show if url have forgot true
    if (router.query.forgot) {
      setShowResetPasswordModal(true);
    }
  }, [router.query.forgot]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ControlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", ControlNavbar);
      };
    }
  }, [lastScrollY]);
  const showAboutMenu = () => {
    if (showAboutopt.current !== undefined) {
      showAboutopt.current.classList.add("active");
    }
  };

  const hideAboutMenufn = () => {
    if (showAboutopt.current !== undefined) {
      showAboutopt.current.classList.remove("active");
    }
  };

  const showDiscoverMenu = () => {
    if (showDisvoveropt.current !== undefined) {
      showDisvoveropt.current.classList.add("active");
    }
  };

  const hideDiscoverMenufn = () => {
    if (showDisvoveropt.current !== undefined) {
      showDisvoveropt.current.classList.remove("active");
    }
  };

  const showAccerdaSignMenu = () => {
    if (showAccredaSignopt.current !== undefined) {
      showAccredaSignopt.current.classList.add("active");
    }
  };

  const hideAccredaSignMenufn = () => {
    if (showAccredaSignopt.current !== undefined) {
      showAccredaSignopt.current.classList.remove("active");
    }
  };

  const showFlyMenu = () => {
    if (showFlyopt.current !== undefined) {
      showFlyopt.current.classList.add("active");
    }
  };

  const hideFlyMenufn = () => {
    if (showFlyopt.current !== undefined) {
      showFlyopt.current.classList.remove("active");
    }
  };

  return (
    <Navbar
      className={`${styles.header} header_resp ${headershow && "nav_blue"}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.sectionlist} mx-auto`}>
            <div className={` ${styles.fly_cont} mx-md-3`}>
              <Nav.Link href="#home" onClick={() => showFlyMenu()}>
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
              <Nav.Link href="#link" onClick={() => showDiscoverMenu()}>
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
              <Nav.Link href="#link" onClick={() => showAboutMenu()}>
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
          <Button className={styles.outline_btn} onClick={handleShow}>
            Log in
          </Button>
          <Signin
            show={show}
            onClose={handleClose}
            onShowLogin={handleShowLoginModal}
          />
          <Loginmodal
            show={showLoginModal}
            onClose={handleCloseLoginModal}
            onShowForgotPassword={handleShowForgotPassword}
          />
          <ForgotPasswordModal
            show={showForgotPasswordModal}
            onClose={handleCloseForgotPasswordModal}
            onShowSentMail={handleShowSentMailSuccessModal}
          />
          <SentMailSuccessModal
            show={showSentMailSuccessModal}
            onClose={handleCloseSentMailSuccessModal}
          />
          <ResetPasswordModal
            show={showResetPasswordModal}
            onClose={handleCloseResetPasswordModal}
            showPasswordChanged={handleShowPasswordChanged}
          />
          <PasswordChangedModal
            show={showPasswordChangedModal}
            onClose={handleClosePasswordChangedModal}
            backToLogin={handleBackToLogin}
          />
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
      <div
        className={`${styles.sliding_modal} ${styles.fly_slide} fly_menu`}
        ref={showFlyopt}
      >
        <div className={styles.modal_heading}>
          <h4>
            <span>
              <Image
                src={leftarrow}
                alt="left-arrow"
                onClick={() => hideFlyMenufn()}
              />
            </span>
            Fly
          </h4>
        </div>
        <div className={styles.fly_media}>
          <figure>
            <Image src={flyMenuIcon} alt="fly-icon" />
          </figure>
          <div className="align-self-center">
            <h5>Forever Learning and You</h5>
            <p>Accreda’s proprietary career building platform.</p>
          </div>
        </div>
        <ul className={` ${styles.fly_list} list-unstyled`}>
          <li>
            <a href="#">
              What is FLY?{" "}
              <span>
                <Image src={rytarrow} alt="right-arrow" />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              Benefits of FLY{" "}
              <span>
                <Image src={rytarrow} alt="right-arrow" />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.sliding_modal} ${styles.discover_slide} discover_menu`}
        ref={showDisvoveropt}
      >
        <div className={styles.modal_heading}>
          <h4>
            <span>
              <Image
                src={leftarrow}
                alt="left-arrow"
                onClick={() => hideDiscoverMenufn()}
              />
            </span>
            Discover Programs
          </h4>
        </div>
        <Row className={styles.about_row}>
          <Col md={6} sm={6} xs={12} className="px-4">
            <div className={styles.about_cards}>
              <h5>By Program</h5>
            </div>
            <ul className="list-unstyled">
              <li>
                <a href="#" onClick={() => showAccerdaSignMenu()}>
                  Accreda Signature Program
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Accreda Booster Program
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} sm={6} xs={12} className="px-4">
            <div className={styles.about_cards}>
              <h5>By Type</h5>
            </div>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  Post Graduate Program
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Certificate Program
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} sm={6} xs={12} className="px-4">
            <div className={styles.about_cards}>
              <h5>By Employability Skills</h5>
            </div>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  Problem Solving
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Self-Management
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Working With People
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Systems Thinking
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  Technology Use
                  <span className="ms-2">
                    <Image src={downarrow} alt="down-arrow" />
                  </span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      <div
        className={`${styles.sliding_modal} ${styles.accredaSign} accerdasign_menu`}
        ref={showAccredaSignopt}
      >
        <div className={styles.modal_heading}>
          <h4>
            <span>
              <Image
                src={leftarrow}
                alt="left-arrow"
                onClick={() => hideAccredaSignMenufn()}
              />
            </span>
            Accreda Signature Program
          </h4>
        </div>
        <div className={`${styles.tostmessage} ${styles.violet_bg}`}>
          <p>
            The Accreda Booster Program are byte sized / micro-skills
            acquisition programs that lead to proficiency in one defined area.
            These are short term programs and typically take between 2 and 4
            weeks for completion.
          </p>
        </div>
        <div className={` ${styles.our_prog} `}>
          <figure>
            <Image src={flyiconvio} alt="fly-icon" />
          </figure>
          <div>
            <h5>Our Programs</h5>
            <span>Powered by FLY</span>
          </div>
        </div>
        <ul className="list-unstyled d-flex flex-wrap">
          <li className="col-md-6 col-sm-6 col-6">
            <a href="#">Digital Marketing</a>
          </li>
          <li className="col-md-6 col-sm-6 col-6">
            <a href="#">Business Acumen</a>
          </li>
          <li className="col-md-6 col-sm-6 col-6">
            <a href="#">Leadership</a>
          </li>
          <li className="col-md-6 col-sm-6 col-6">
            <a href="#">Project Management</a>
          </li>
          <li className="col-md-6 col-sm-6 col-6">
            <a href="#">Professional Skills</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.sliding_modal} mg_menu`} ref={showAboutopt}>
        <div className={styles.modal_heading}>
          <h4>
            <span>
              <Image
                src={leftarrow}
                alt="left-arrow"
                onClick={() => hideAboutMenufn()}
              />
            </span>
            About
          </h4>
        </div>
        <Row className={styles.about_row}>
          <Col md={6} sm={6} xs={6} className="px-4">
            <div className={styles.about_cards}>
              <h5>About Us</h5>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6} className="px-4">
            <div className={styles.about_cards}>
              <h5>FAQ</h5>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6} className="px-4">
            <div className={styles.about_cards}>
              <h5>Contact Us</h5>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6} className="px-4">
            <div className={styles.about_cards}>
              <h5>Resources</h5>
            </div>
          </Col>
        </Row>
        <Row className={styles.annouce_row}>
          <Col md={6} sm={6} xs={6}>
            <h5>Announcement</h5>
            <a href="#">
              <div className="d-flex">
                Read more
                <span>
                  <Image src={rytarrow} alt="right-arrow" />
                </span>
              </div>
            </a>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <h5>Research Paper</h5>
            <a href="#">
              <div className="d-flex">
                Read more
                <span>
                  <Image src={rytarrow} alt="right-arrow" />
                </span>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </Navbar>
  );
};
