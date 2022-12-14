import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Signlogo from "../../../public/images/signlogo.svg";
import Social from "../../../public/images/Google_logo.svg";
import Social1 from "../../../public/images/In.svg";
import Modal from "react-bootstrap/Modal";
import styles from "./Loginmodal.module.scss";

const Loginmodal = (props: any) => {
  const { show, onClose } = props;
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Loginmodal;
