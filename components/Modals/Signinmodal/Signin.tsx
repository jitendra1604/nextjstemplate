import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import Social from "../../../public/images/Google_logo.svg";
import Social1 from "../../../public/images/In.svg";
import styles from "../../../styles/components/Modalpop.module.scss";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// const onFormSubmit = (e: any) => {
//   e.preventDefault();
//   const formData = new FormData(e.target),
//     formDataObj = Object.fromEntries(formData.entries());
//   console.log(formDataObj);
// };

const Signin = (props: any) => {
  const { show, onClose } = props;
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const validate = () => {
    return (
      fname.length & lname.length & email.length & pass.length & conpass.length
    );
  };
  return (
    <div>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3>Create new account</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <div className="d-flex  justify-content-center">
            <div>
              <Image
                src={Social1}
                alt=""
                width={38}
                height={38}
                className={styles.socialmedia}
              />
            </div>
            <div>
              <Image src={Social} alt="" width={38} height={38} />
            </div>
          </div>
          <Form>
            <Row>
              <Col style={{ paddingLeft: "0px" }}>
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  autoComplete="off"
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                />
              </Col>
              <Col style={{ paddingRight: "0px" }}>
                <Form.Control
                  type="text"
                  name="lname"
                  value={lname}
                  placeholder="Last Name"
                  autoComplete="off"
                  onChange={(e) => setLName(e.target.value)}
                />
              </Col>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Password"
                name="Password"
                autoComplete="off"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <Form.Control
                type="text"
                name="ConPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={conpass}
                onChange={(e) => setConpass(e.target.value)}
              />
            </Row>
            <div className="text-center">
              <Button
                className=" btn btn-violet"
                type="submit"
                disabled={!validate()}
              >
                Continue
              </Button>
            </div>
          </Form>
          <p className="text-center my-4">
            Already have an account? <a href="#">Login</a>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Signin;
