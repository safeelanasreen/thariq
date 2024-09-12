import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Assets from "../Assets"; // Ensure this imports the video assets correctly
import Style from "./videogallery.module.scss";
import { Autoplay, Navigation } from 'swiper/modules';
import Animate from "../Animate/Animate";


const videos = [
  { id: 1, src: Assets.Video_2 },
  { id: 2, src: Assets.Video_1 },
  { id: 3, src: Assets.Video_3 },
  // Add more video objects here if needed
];

const VideoGallery = () => {
  return (
    <section className={Style.videogallery} id="gallery">
      <Animate as="div" className="container anim">
        <h4 className="h2 ">Video Gallery</h4>
        <div className={Style.swiper_area}>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 15000, // Adjust the delay as needed
              disableOnInteraction: false,
            }}
            loop={true} // Enable looping
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className={Style.video_banner}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                 
                    src={video.src}
                  ></video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Animate>
    </section>
  );
};

export default VideoGallery;
