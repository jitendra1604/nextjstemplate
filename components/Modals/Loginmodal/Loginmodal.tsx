import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "next/image";
import Link from "next/link";
import Signlogo from "../../../public/images/signlogo.svg";
import Social from "../../../public/images/Google_logo.svg";
import Social1 from "../../../public/images/In.svg";
import Modal from "react-bootstrap/Modal";
import styles from "./Loginmodal.module.scss";

const Loginmodal = (props: any) => {
  const { show, onClose } = props;
  const [password, setPassword] = useState("");

  const [meter, setMeter] = useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        centered
        className={styles.LoginModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3 className={styles.titleHeader}>Welcome back, Log in</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <div className="d-flex  justify-content-center align-items-center">
            <div>
              <Link href="/">
                <Image
                  src={Social1}
                  alt=""
                  width={38}
                  height={38}
                  className={styles.socialmedia}
                />
              </Link>
            </div>
            <span className={styles.line}></span>
            <div>
              <Link href="/">
                <Image src={Social} alt="" width={38} height={38} />
              </Link>
            </div>
          </div>
          <p className="text-center">or use Email account</p>
          <Form>
            <Form.Group controlId="validationCustomUsername">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Control
              placeholder="Password"
              autoComplete="off"
              onFocus={() => setMeter(true)}
              value={password}
              name="password"
              type={passwordShown ? "text" : "password"}
              // onChange={handleChange}

              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.rememberPassword}>
              <div className={styles.remember}>
                <InputGroup.Checkbox className={styles.formCheckbox} />
                <span>Remember me</span>
              </div>
              <div className={styles.forgotPassword}>
                <span>Forgot password?</span>
              </div>
            </div>
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="submit"
                disabled={true}
                // onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center">
            <p className={styles.signUp}>
              Don’t have an account? <Link href="/">Sign up</Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Loginmodal;
