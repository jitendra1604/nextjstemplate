import React from "react";
import { Futureplancontent } from "../Data/homepage";
import styles from "../../styles/components/Home.module.scss";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Image from "next/image";

const Futureplan = () => {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    dots: false,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: false,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };
  return (
    <section className={`${styles.learing} learing_sec`}>
      {Futureplancontent.map((data, index) => {
        return (
          <>
            <div key={data.id} className={styles.header_part}>
              <h2>
                {data.mian}
                <span>{data.mian1}</span>
              </h2>
              <h5>{data.submain}</h5>
            </div>
            <div className={styles.content}>
              <Slider {...settings}>
                {data.patnars.map((subdata, index) => {
                  return (
                    <div key={subdata.id}>
                      <Card className="card_section">
                        <Card.Body>
                          <div className="card_body_content">
                            <Image
                              src={subdata.logo}
                              alt=""
                              width={168}
                              height={126}
                            />
                            <Card.Title>
                              <h4>{subdata.title} </h4>
                            </Card.Title>
                            <Card.Text className="p-secondary">
                              {subdata.content}
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Futureplan;
