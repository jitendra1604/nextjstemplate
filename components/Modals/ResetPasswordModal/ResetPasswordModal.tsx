import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import { BsFillEyeFill } from "react-icons/bs";
import HidePassword from "../../../public/images/Hide.png";
import Modal from "react-bootstrap/Modal";
import styles from "./ResetPasswordModal.module.scss";
import InfoPassword from "./components/InfoPassword/InfoPassword";

const ResetPasswordModal = (props: any) => {
  const { show, onClose = () => {}, showPasswordChanged = () => {} } = props;

  // regex password
  const regexLength = /.{8,}$/g;
  const regexLowercase = /(?=.*?[a-z])/g;
  const regexUppercase = /(?=.*?[A-Z])/g;
  const regexNumber = /(?=.*?[0-9])/g;

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [meter, setMeter] = useState(false);
  const [meterSecondPass, setMeterSecondPass] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({
    password: "",
    renterPassword: "",
  });

  const listRegex = [
    "Be a minimun of 8 charachters",
    "include atleast one lowercase letter(a-z)",
    "Include atleast one Uppercase letter(a-z)",
    "include atleast one number(0-9)",
  ];

  const passwordTracker = {
    minimumLength: data?.password.match(regexLength),
    atLeastLowercase: data?.password.match(regexLowercase),
    atLeastUppercase: data?.password.match(regexUppercase),
    atLeastNumber: data?.password.match(regexNumber),
  };
  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  useEffect(() => {
    if (data !== null) {
      const array = Object.values(data);
      setIsValid(array.every((value) => value !== "") && array[0] === array[1]);
    }
  }, [data]);

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const renderStrength = () => {
    const line = new Array(3).fill(null);
    if (passwordStrength <= 2) {
      return line.map((val, index) => {
        if (index === 0) {
          return (val = (
            <span className={`${styles.lineWeak} ${styles.line}`}></span>
          ));
        }
        return (val = <span className={` ${styles.line}`}></span>);
      });
    }
    if (passwordStrength > 2 && passwordStrength < 4) {
      return line.map((val, index) => {
        if (index <= 1) {
          return (val = (
            <span className={`${styles.lineMedium} ${styles.line}`}></span>
          ));
        }
        return (val = <span className={` ${styles.line}`}></span>);
      });
    }
    if (passwordStrength === 4) {
      return line.map((val, index) => {
        return (val = (
          <span className={`${styles.lineStrong} ${styles.line}`}></span>
        ));
      });
    }
  };

  const renderMatchPassword = () => {
    if (meterSecondPass && !isValid) {
      return (
        <div className={styles.passwordValidate}>
          <p className={styles.notMatch}>Password doesn't match</p>
        </div>
      );
    } else if (meterSecondPass && isValid) {
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
        centered
        className={`${styles.ResetPasswordModal} modal-sigin-flow`}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3 className={styles.titleHeader}>Reset Password</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <Form>
            <div className={styles.password_section}>
              <Form.Control
                placeholder="New Password"
                autoComplete="off"
                name="password"
                onFocus={() => {
                  setMeter(true);
                  setMeterSecondPass(false);
                }}
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
                  <span className={styles.status}>Weak</span>
                  {renderStrength().map((val) => val)}
                </div>
                <ul>
                  <li
                    className={
                      passwordTracker.minimumLength
                        ? styles.success
                        : styles.error
                    }
                  >
                    Must contain atleast 8 characters
                  </li>
                  <li
                    className={
                      passwordTracker.atLeastUppercase
                        ? styles.success
                        : styles.error
                    }
                  >
                    Must contain atleast 1 Uppercase character
                  </li>
                  <li
                    className={
                      passwordTracker.atLeastLowercase
                        ? styles.success
                        : styles.error
                    }
                  >
                    Must contain atleast 1 Lowercase character
                  </li>
                  <li
                    className={
                      passwordTracker.atLeastNumber
                        ? styles.success
                        : styles.error
                    }
                  >
                    Must contain atleast 1 number
                  </li>
                </ul>
              </div>
            )}
            <div className={styles.password_section}>
              <Form.Control
                placeholder="Re-enter Password"
                autoComplete="off"
                name="renterPassword"
                onFocus={() => {
                  setMeter(false);
                  setMeterSecondPass(true);
                }}
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
            {renderMatchPassword()}
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="button"
                disabled={!isValid}
                onClick={showPasswordChanged}
              >
                Reset Password
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResetPasswordModal;
