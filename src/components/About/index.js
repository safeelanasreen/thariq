import React, { useState, useEffect } from "react";
import Style from "./About.module.scss";
import Assets from "../Assets";
import Animate from "../Animate/Animate";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of image sources
  const images = [
    Assets.thariq7,
    Assets.thariq10,
    Assets.thariq2,
    Assets.thariq4,
  ];

  const imgItemsLength = images.length; // Total number of images

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgItemsLength);
    }, 5000); // 6 seconds

    return () => clearInterval(intervalId);
  }, [imgItemsLength]);

  return (
    <Animate as="section" className={`${Style.about} anim`} id="next">
      <div className="container">
        <div className="row align-items-center">
          <Animate as="div" className="col-lg-6 anim">
            <div className={Style.img_anim}>
              <div className={`${Style.shape_1} about-shape1`}>
                <img src={Assets.about_shape1} alt="" />
              </div>
              <div className={`${Style.shape_2} about-shape2`}>
                <figure className="ratio mb-0">
                  <img src={Assets.about_shape2} alt="" />
                </figure>
              </div>
              <div className={Style.img_wrap}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${Style.img_item} ${
                      activeIndex === index ? Style.active : ""
                    }`}
                  >
                    <figure className="ratio mb-0">
                      <img src={image} alt={`Image ${index + 1}`} />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
          <Animate as="div" className="col-lg-6 anim">
            <div className={Style.about_ttl}>
              <h2 className="h2">About me</h2>
            </div>
            <p>
              Driven by a deep passion for the automotive world, I take pride in
              knowing everything about cars and their services in Qatar. From
              sharing insightful reviews and maintenance tips to exploring the
              latest automotive trends, I aim to provide valuable content for
              car enthusiasts and casual drivers alike. Alongside my automotive
              interests, I am a versatile digital influencer with a love for
              photography, video editing, and creating engaging content that
              spreads positivity. My journey in social media began with
              capturing life's moments and evolved into sharing family vlogs,
              knowledge, and experiences from both Qatar and India. Join me as I
              explore the beauty of life, both behind the wheel and through the
              lens, inspiring and educating others along the way{" "}
            </p>
          </Animate>
        </div>
      </div>
    </Animate>
  );
};

export default About;
