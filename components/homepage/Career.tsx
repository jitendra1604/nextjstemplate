import React from "react";
import { Col, Row } from "react-bootstrap";
// import Lottie from "react-lottie";
import { Carrercontent } from "../Data/homepage";
import Borderimg from "../../public/images/footerborder.svg";
import Image from "next/image";
import styles from "../../styles/components/Home.module.scss";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import animationData from "../../public/animate/Frame_1.json";
// import animationData1 from "../../public/animate/Full_Frame.json";

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
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
// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData1,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
function Career() {
  return (
    <section className={styles.careercontent}>
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
            {/* <Lottie options={defaultOptions} /> */}
            {/* <Lottie options={defaultOptions1} /> */}

            {Carrercontent.map((data, index) => {
              return (
                <div key={data.id}>
                  <div>
                    <Slider {...settings}>
                      {data.slidersection.map((subdata, index) => {
                        return (
                          <div key={subdata.id}>
                            <p className="slicksection">{subdata.title}</p>
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
