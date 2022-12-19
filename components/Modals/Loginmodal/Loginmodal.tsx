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
import { BsFillEyeFill } from "react-icons/bs";
import HidePassword from "../../../public/images/Hide.png";
import { useRouter } from "next/router";

const Loginmodal = (props: any) => {
  const router = useRouter();
  console.log(router.pathname);
  const { show, onClose = () => {}, onShowForgotPassword = () => {} } = props;

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  useEffect(() => {
    if (data !== null) {
      setIsValid(Object.values(data).every((value) => value !== ""));
    }
  }, [data]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkMatchRegex = (text: string, type: string) => {
    let flag;
    if (type === "email") {
      flag = text.match(regexEmail);
    }
    return flag;
  };

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    if (checkMatchRegex(newData.email, "email")) {
      console.log(newData);
      setData(newData);
    } else {
      setData({ ...data, email: "" });
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        centered
        className={`${styles.LoginModal} modal-sigin-flow`}
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
                onChange={handleChange}
              />
            </Form.Group>
            <div className={styles.password_section}>
              <Form.Control
                placeholder="Password"
                autoComplete="off"
                name="password"
                type={passwordShown ? "text" : "password"}
                onChange={handleChange}
              />
              {!passwordShown ? (
                <Image
                  src={HidePassword}
                  className={styles.eyeicon}
                  onClick={togglePassword}
                  alt="hide"
                  width={21}
                  height={18}
                />
              ) : (
                <BsFillEyeFill
                  onClick={togglePassword}
                  className={styles.eyeicon}
                />
              )}
            </div>

            <div className={styles.rememberPassword}>
              <div className={styles.remember}>
                <InputGroup.Checkbox className={styles.formCheckbox} />
                <span>Remember me</span>
              </div>
              <div className={styles.forgotPassword}>
                <span onClick={onShowForgotPassword}>Forgot password?</span>
              </div>
            </div>
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="submit"
                disabled={!isValid}
                onClick={handleSubmit}
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
