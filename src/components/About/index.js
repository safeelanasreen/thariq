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
    <Animate as="section"  className={`${Style.about} anim`} id="next" >
      <div className="container">
        <div className="row align-items-center" >
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
              A versatile digital influencer with a passion for photography,
              video editing, and creating engaging content that spreads
              positivity. My journey in social media began with a love for
              capturing life's moments and evolved into a platform where I
              share family vlogs, new knowledge, and experiences from both
              Qatar and India.   
              As someone deeply interested in the automotive
              world, I pride myself on knowing everything about cars and their
              services in Qatar. Whether it's sharing insightful reviews,
              offering maintenance tips, or exploring the latest automotive
              trends, I strive to provide valuable content for car enthusiasts
              and casual drivers alike. 
              Join me as I continue to explore and
              share the beauty of life, both behind the wheel and in front of
              the camera, inspiring and educating others along the way!
            </p>
          </Animate>
        </div>
      </div>
    </Animate>
  );
};

export default About;
