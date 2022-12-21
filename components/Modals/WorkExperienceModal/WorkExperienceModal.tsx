import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Signlogo from "../../../public/images/signlogo.svg";
import Button from "react-bootstrap/Button";
import styles from "../../../styles/components/Modalpop.module.scss";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Link from "next/link";

const WorkExperienceModal = (props: any) => {
  const { show, onClose } = props;
  const [data, setData] = useState({
    companyName: "",
    industry: "",
    role: "",
    experience: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (data !== null) {
      console.log(data);
      const array = Object.values(data);
      setIsValid(array.every((value) => value !== ""));
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
        dialogClassName="dialog-signin"
        className={`${styles.WorkExperience} modal-sigin-flow`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={Signlogo} alt="" width={49} height={49} />
            <h3>Work Experience</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body_content}>
          <Form>
            <Form.Control
              type="text"
              name="companyName"
              placeholder="Company Name"
              autoComplete="off"
              onChange={handleChange}
            />
            <Form.Select name="industry" onChange={handleChange}>
              <option disabled={true} hidden value="">
                Industry
              </option>
              <option
                value="0"
                style={{
                  padding: "12px 0",
                  borderBottom: "0.5px solid #5C1A53",
                }}
              >
                Computer Science
              </option>
              <option value="1">Arts And Humanities</option>
              <option value="2">Business</option>
              <option value="3">Information Architecture</option>
              <option value="3">Others</option>
            </Form.Select>
            <Form.Control
              type="text"
              name="role"
              placeholder="Role"
              autoComplete="off"
              onChange={handleChange}
            />
            <Form.Select
              name="experience"
              onChange={handleChange}
              defaultValue=""
            >
              <option disabled={true} hidden value="">
                Experience Level
              </option>
              <option value="0">Entry Level</option>
              <option value="1">Mid Level - Manager</option>
              <option value="2">Senior Level - Executive</option>
            </Form.Select>
            <div className={styles.acceptCodition}>
              <div className="d-flex align-items-center">
                <InputGroup.Checkbox className={styles.formCheckbox} />
                <span>
                  I accept the <Link href="">Terms and Conditions</Link>{" "}
                </span>
              </div>
            </div>
            <div className="text-center">
              <Button
                className={`btn btn-violet ${styles.submit_butn}`}
                type="submit"
                disabled={!isValid}
                // onClick={handleSubmit}
              >
                Create Account
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WorkExperienceModal;
