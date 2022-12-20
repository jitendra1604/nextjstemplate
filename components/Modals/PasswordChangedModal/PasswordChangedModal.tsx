import React from "react";
import { Button } from "react-bootstrap";
import { BsCheck2Circle } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import styles from "./PasswordChangedModal.module.scss";

const PasswordChangedModal = (props: any) => {
  const { show, onClose = () => {}, backToLogin = () => {} } = props;

  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        centered
        className={`${styles.PasswordChangedModal} modal-sigin-flow`}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={styles.body_content}>
          <BsCheck2Circle className={styles.checkLogo} />
          <h3 className={styles.titleHeader}>Password Changed</h3>
          <p className={`${styles.description} text-center`}>
            Your password has been changed successfully. Now you can login
            again.
          </p>
          <div className="text-center">
            <Button
              className={`btn btn-violet ${styles.btn}`}
              type="button"
              onClick={backToLogin}
            >
              Back to Login
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PasswordChangedModal;
