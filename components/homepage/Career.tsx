import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import Lottie from "react-lottie";
import { Carrercontent } from "../Data/homepage";
import Borderimg from "../../public/images/footerborder.svg";
import Diamond1 from "../../public/images/diamond_slick.svg";

import Image from "next/image";
import styles from "../../styles/components/Home.module.scss";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import animationData from "../../public/animate/Frame_name.json";
import AOS from "aos";
import "aos/dist/aos.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
function Career() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`${styles.careercontent} career_section`}>
      <div>
        <Row>
          <Col sm={6}>
            {Carrercontent.map((data, index) => {
              return (
                <div key={data.id}>
                  <Image
                    className={styles.border_line}
                    alt=""
                    src={Borderimg}
                    width={188}
                    height={20.49}
                  />
                  <div>
                    <h4>{data.mian}</h4>
                    <h2>{data.title}</h2>
                    <p className="p-primary">{data.content}</p>
                    <a href="#">{data.links}</a>
                    <h3>{data.title2}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
              );
            })}
            <Form>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email ID" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={6}>
            {/* <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className={styles.Ds_section}
            >
              <Lottie options={defaultOptions} />
            </div> */}

            {Carrercontent.map((data, index) => {
              return (
                <div key={data.id} className={styles.Mb_section}>
                  <div className={styles.slider_sec}>
                    <Slider {...settings}>
                      {data.slidersection.map((subdata, index) => {
                        return (
                          <div key={subdata.id}>
                            <div className="d-inline-flex">
                              <div className="me-2">
                                <Image src={Diamond1} alt="" />
                              </div>
                              <div>
                                <p className="slicksection">{subdata.title}</p>
                              </div>
                            </div>
                            <p className="max_323">{subdata.content}</p>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                  <div className={styles.image_container} key={data.id}>
                    <Image
                      src={data.Image}
                      alt=""
                      layout="fill"
                      className={styles.image}
                    />
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Career;
