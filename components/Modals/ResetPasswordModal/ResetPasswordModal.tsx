import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import { BsFillEyeFill } from "react-icons/bs";
import HidePassword from "../../../public/images/Hide.png";
import Modal from "react-bootstrap/Modal";
import styles from "./ResetPasswordModal.module.scss";

const ResetPasswordModal = (props: any) => {
  const { show, onClose = () => {}, onShowSentMail = () => {} } = props;
  const [passwordShown, setPasswordShown] = React.useState(false);

  const [isValid, setIsValid] = useState(false);
  const [data, setData] = useState({ email: "" });

  useEffect(() => {
    if (data !== null) {
      setIsValid(Object.values(data).every((value) => value !== ""));
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
                name="newPassword"
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
            <div className={styles.password_section}>
              <Form.Control
                placeholder="Re-enter Password"
                autoComplete="off"
                name="renterPassword"
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
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="button"
                disabled={!isValid}
                onClick={onShowSentMail}
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
