import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { BsFillEyeFill } from "react-icons/bs";
import HidePassword from "../../../public/images/Hide.png";
import InfoPassword from "../ResetPasswordModal/components/InfoPassword/InfoPassword";

const Signin = (props: any) => {
  const {
    show,
    onClose,
    onShowLogin = () => {},
    onShowWorkExperience = () => {},
  } = props;
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    ConPassword: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [meter, setMeter] = useState(false);
  const [meterSecondPass, setMeterSecondPass] = useState(false);

  const [showInfo, setShowInfo] = useState(false);
  // const [password, setPassword] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onShowWorkExperience();
  };

  useEffect(() => {
    if (data !== null) {
      setIsValid(
        Object.values(data).every((value) => value !== "") &&
          data.password === data.ConPassword
      );
    }
  }, [data]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const listRegex = [
    "Be a minimun of 8 charachters",
    "include atleast one lowercase letter(a-z)",
    "Include atleast one Uppercase letter(a-z)",
    "include atleast one number(0-9)",
  ];
  // const passwordRegex =
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: data?.password.match(atLeastOneUppercase),
    lowercase: data?.password.match(atLeastOneLowercase),
    number: data?.password.match(atLeastOneNumeric),
    // specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: data?.password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
  };

  const renderStrength = () => {
    const line = new Array(3).fill(null);
    const obj = {
      line,
      title: <span className={`${styles.status} ${styles.weak}`}>Weak</span>,
    };
    if (passwordStrength <= 2) {
      const result = line.map((val, index) => {
        if (index === 0) {
          return (val = (
            <span className={`${styles.lineWeak} ${styles.line}`}></span>
          ));
        }
        return (val = <span className={` ${styles.line}`}></span>);
      });
      return { ...obj, line: result };
    }
    if (passwordStrength > 2 && passwordStrength < 4) {
      const result = line.map((val, index) => {
        if (index <= 1) {
          return (val = (
            <span className={`${styles.lineMedium} ${styles.line}`}></span>
          ));
        }
        return (val = <span className={` ${styles.line}`}></span>);
      });
      return {
        ...obj,
        line: result,
        title: (
          <span className={`${styles.status} ${styles.medium}`}>Medium</span>
        ),
      };
    }
    if (passwordStrength === 4) {
      const result = line.map((val, index) => {
        return (val = (
          <span className={`${styles.lineStrong} ${styles.line}`}></span>
        ));
      });
      return {
        ...obj,
        line: result,
        title: (
          <span className={`${styles.status} ${styles.strong}`}>Strong</span>
        ),
      };
    }
  };
  const renderMatchPassword = () => {
    if (
      meterSecondPass &&
      data.password &&
      data.ConPassword &&
      data.password !== data.ConPassword
    ) {
      return (
        <div className={styles.passwordValidate}>
          <p className={styles.notMatch}>Password doesn't match</p>
        </div>
      );
    } else if (
      meterSecondPass &&
      data.password &&
      data.ConPassword &&
      data.password === data.ConPassword
    ) {
      return (
        <div className={styles.passwordValidate}>
          <p className={styles.match}>Password matches</p>
        </div>
      );
    }
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        dialogClassName="dialog-signin"
        className="modal-sigin-flow"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3>Create new account</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <div className="d-flex  justify-content-center">
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
            <div>
              <Link href="/">
                <Image src={Social} alt="" width={38} height={38} />
              </Link>
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
                  onChange={handleChange}
                />
              </Col>
              <Col style={{ paddingRight: "0px" }}>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </Col>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                onChange={handleChange}
              />
              <div className={styles.password_section}>
                <Form.Control
                  placeholder="Password"
                  autoComplete="off"
                  onFocus={() => setMeter(true)}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={handleChange}
                />
                {/* <button type="button" className="mt-0" onClick={togglePassword}>
              </button> */}
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
                <span
                  className={styles.iconInfo}
                  onClick={() => setShowInfo(!showInfo)}
                >
                  i
                </span>
                <InfoPassword
                  list={listRegex}
                  title="Passwords should contain :"
                  show={showInfo}
                />
              </div>
              {meter && (
                <div className={styles.passwordValidate}>
                  <div className={styles.strength}>
                    {renderStrength()?.title}
                    {renderStrength()?.line.map((val) => val)}
                  </div>
                  <ul>
                    <li
                      className={
                        passwordTracker.eightCharsOrGreater
                          ? styles.success
                          : styles.error
                      }
                    >
                      Must contain atleast 8 characters
                    </li>
                    <li
                      className={
                        passwordTracker.uppercase
                          ? styles.success
                          : styles.error
                      }
                    >
                      Must contain atleast 1 Uppercase character
                    </li>
                    <li
                      className={
                        passwordTracker.lowercase
                          ? styles.success
                          : styles.error
                      }
                    >
                      Must contain atleast 1 Lowercase character
                    </li>
                    <li
                      className={
                        passwordTracker.number ? styles.success : styles.error
                      }
                    >
                      Must contain atleast 1 number
                    </li>
                  </ul>
                </div>
              )}
              <Form.Control
                type="password"
                name="ConPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                className={`${
                  data.password !== data.ConPassword
                    ? "error"
                    : !data.ConPassword
                    ? ""
                    : "success"
                }`}
                onFocus={() => {
                  setMeter(false);
                  setMeterSecondPass(true);
                }}
                onChange={handleChange}
              />
              {renderMatchPassword()}
            </Row>
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="submit"
                disabled={!isValid}
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </div>
          </Form>
          <p className="text-center my-4">
            Already have an account?{" "}
            <a href="#" onClick={onShowLogin}>
              Login
            </a>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Signin;

{
  /* <style >
  {`
    input {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid grey;
      max-width: 50%;
      width: 100%;
    }
    .password-strength-meter {
      height: 0.3rem;
      background-color: lightgrey;
      border-radius: 3px;
      margin: 0.5rem 0;
    }

    .password-strength-meter::before {
      content: "";
      background-color: ${
        ["red", "orange", "#03a2cc", "#03a2cc", "#0ce052"][
          passwordStrength - 1
        ] || ""
      };
      height: 100%;
      width: ${(passwordStrength / 5) * 100}%;
      display: block;
      border-radius: 3px;
      transition: width 0.2s;
    }
  `}
</style>; */
}
