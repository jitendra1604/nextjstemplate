import React from "react";
import { Partnerlist } from "../Data/homepage";
import Image from "next/image";
import styles from "../../styles/components/Home.module.scss";
import Borderimg from "../../public/images/footerborder.svg";
import Slider from "react-slick";
const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  autoplaySpeed: 2000,
  dots: false,
};
const Partnerslist = () => {
  return (
    <section className={`${styles.partnerlist} container`}>
      <Image
        className={styles.border_line}
        alt=""
        src={Borderimg}
        width={188}
        height={20.49}
      />
      <Slider {...settings}>
        {Partnerlist.map((data, index) => {
          return (
            <div key={data.id}>
              <Image src={data.Image} width={88} height={49} alt="" />
              <h6>
                {data.title} <span>{data.title2}</span>
              </h6>
              <p>{data.sub}</p>
            </div>
          );
        })}
      </Slider>
      <Image
        className={styles.border_line}
        alt=""
        src={Borderimg}
        width={188}
        height={20.49}
      />
    </section>
  );
};

export default Partnerslist;
