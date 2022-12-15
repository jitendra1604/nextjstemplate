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
const Signin = (props: any) => {
  const { show, onClose } = props;
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    ConPassword: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    if (data !== null) {
      setIsValid(Object.values(data).every((value) => value !== ""));
    }
  }, [data]);

  const [meter, setMeter] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // const passwordRegex =
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
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
                  value={password}
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  // onChange={handleChange}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <button type="button" className="mt-0" onClick={togglePassword}>
              </button> */}
                <BsFillEyeFill
                  onClick={togglePassword}
                  className={styles.eyeicon}
                />
              </div>
              {meter && (
                <div>
                  <div className="password-strength-meter"></div>

                  <div>
                    {passwordStrength < 8 && "Must contain "}
                    {!passwordTracker.uppercase && "uppercase, "}
                    {!passwordTracker.lowercase && "lowercase, "}
                    {!passwordTracker.specialChar && "special character, "}
                    {!passwordTracker.number && "number, "}
                    {!passwordTracker.eightCharsOrGreater &&
                      "eight characters or more"}
                  </div>
                </div>
              )}
              <Form.Control
                type="password"
                name="ConPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                onChange={handleChange}
              />
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
            Already have an account? <a href="#">Login</a>
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
