import React from "react";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import Check from "../../../public/images/checkSuccess.svg";
import Modal from "react-bootstrap/Modal";
import styles from "./SentMailSuccessModal.module.scss";

const SentMailSuccessModal = (props: any) => {
  const { show, onClose } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        centered
        className={`${styles.SentMail} modal-sigin-flow`}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <div className={styles.headerContent}>
              <Image src={Check} alt="" width={45} height={45} />
              <h3 className={styles.titleHeader}>Email has been sent</h3>
              <p className={`${styles.description} text-center`}>
                Please check your email address, to find a link to change your
                password
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <div className="text-center">
            <Button className={`btn btn-violet ${styles.btn}`} type="button">
              Resend Mail
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SentMailSuccessModal;
