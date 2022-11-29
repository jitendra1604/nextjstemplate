import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from "../../styles/components/Home.module.scss";
import Grayshade from "../../public/images/slide_gray.png";
import { Universitieslist } from "../Data/homepage";
export const Universities = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.universiti}>
      <div>
        {Universitieslist.map((data, index) => {
          return (
            <>
              <div key={data.id}>
                <h2>
                  {data.mian} <span>{data.submain}</span>
                </h2>
                <div className={styles.flex_list}>
                  <div className={styles.shaded}>
                    <Image src={Grayshade} alt="" width={385} height={534} />
                  </div>
                  <div className={styles.emp_details}>
                    <Slider {...settings}>
                      {data.empolyes.map((subdata, index) => {
                        return (
                          <div key={subdata.id}>
                            <div
                              className={`${styles.image_container} rhombus-parent`}
                            >
                              <Image
                                src={subdata.profile}
                                className={`${styles.image} rhombus`}
                                alt=""
                                width={385}
                                height={534}
                              />
                            </div>
                            <div>
                              <Image
                                src={subdata.logo}
                                width={54}
                                height={54}
                                alt=""
                                className="logo_img"
                              />
                              <h3>{subdata.title}</h3>
                              <p className="p_primary">{subdata.content}</p>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                  <div className={styles.shaded1}>
                    <Image src={Grayshade} alt="" width={385} height={534} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
