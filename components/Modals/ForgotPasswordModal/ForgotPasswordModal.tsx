import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import Modal from "react-bootstrap/Modal";
import styles from "./ForgotPasswordModal.module.scss";

const ForgotPasswordModal = (props: any) => {
  const { show, onClose = () => {}, onShowSentMail = () => {} } = props;

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

  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        centered
        className={`${styles.ForgotModal} modal-sigin-flow`}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3 className={styles.titleHeader}>Forgot your password?</h3>
            <p className={`${styles.description} text-center`}>
              Enter your email address to receive a password reset link
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
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

            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="button"
                disabled={!isValid}
                onClick={onShowSentMail}
              >
                Send Mail
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ForgotPasswordModal;
