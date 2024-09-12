import React, { useState } from "react";
import Animate from "../Animate/Animate";
import Style from "./gallery.module.scss";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active tab

  const tabs = [
    {  no: "1" },
    {  no: "2" },
    {  no: "3" },
    {  no: "4" },
    { no: "5" },
  ];

  return (
    <section className={Style.gallery}>
      <div className="container">
        <Animate as="div" className="row anim">
          <div className="col-md-3">
            <h3 className="h2">Gallery</h3>
          </div>
          <div className="col-md-9">
            <div className={Style.links}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${Style.tabs} ${activeIndex === index ? Style.active : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={Style.slide_wrap}>
                    
                    <div className={Style.tab_no}>{tab.no}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Gallery;
