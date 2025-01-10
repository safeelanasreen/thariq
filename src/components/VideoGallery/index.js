import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Assets from "../Assets"; // Ensure this imports the video assets correctly
import Style from "./videogallery.module.scss";
import { Autoplay, Navigation } from "swiper/modules";
import Animate from "../Animate/Animate";

const videos = [
  { id: 1, src: Assets.Video_2 },
  { id: 2, src: Assets.Video_1 },
  { id: 3, src: Assets.Video_3 },
  // Add more video objects here if needed
];

const VideoGallery = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const videoElements = document.querySelectorAll("video");

    videoElements.forEach((video, index) => {
      if (index === swiper.activeIndex) {
        video.muted = true; // Ensure videos start muted
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay failed:", error.message);
          });
        }
      } else {
        video.pause();
        video.currentTime = 0; // Optionally reset the video
      }
    });
  };

  const enableSound = (video) => {
    video.muted = false; // Unmute the video
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Autoplay failed:", error.message);
      });
    }
  };

  return (
    <section className={Style.videogallery} id="gallery">
      <Animate as="div" className="container anim">
        <h4 className="h2">Video Gallery</h4>
        <div className={Style.swiper_area}>
          <Swiper
            ref={swiperRef}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 15000, // Adjust the delay as needed
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className={Style.video_banner}>
                  <video
                    loop
                    playsInline
                    muted // Start muted to comply with autoplay policies
                    controls
                    src={video.src}
                    onClick={(e) => enableSound(e.target)} // Unmute on user interaction
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
