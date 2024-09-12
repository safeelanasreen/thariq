import { useEffect, useState } from 'react';
import "../../icomoon/style.css";
import Style from "./Banner.module.scss";
import Assets from "../Assets";
// import Icon from "../Icons"

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Add event listener for window load
    window.addEventListener('load', handleLoad);

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Define social media data as an array of objects
  const socialLinks = [
    { href: 'https://www.facebook.com', icon: 'icon-facebook' },
    { href: 'https://www.instagram.com', icon: 'icon-instagram' },
    { href: 'https://www.youtube.com', icon: 'icon-youtube' },
    { href: 'https://www.linkedin.com', icon: 'icon-linkedin2' },
    { href: 'tel:+97430510542', icon: 'icon-phone' },
  ];

  return (
    <section className={`${Style.banner} ${isLoaded ? Style.loaded : ''}`} id="banner">
      <div className={Style.background_img}>
        <figure>
          <img src={Assets.thariq} alt="" />
        </figure>
      </div>
      <div className="container">
        <div className={`row align-items-center ${Style.banner_wrap}`}>
          <div className="col-lg-6">
            <div className={Style.banner_content}>
              <p className={Style.intro}>Hello, It's me</p>
              <h1 className={`${Style.h1} h1`}>Thariq</h1>
              <h2 className={Style.banner_subttl}>
                And I'm a <span>Digital Influencer </span>
              </h2>
              <p className={Style.banner_desc}>
                Manager at TopCo and Digital Influencer, specializing in
                strategic leadership and creating impactful online content.
              </p>

              {/* Map over the socialLinks array */}
              <div className={`${Style.social_wrap} d-flex`}>
                {socialLinks.map((link, index) => (
                  <a href={link.href} className={Style.icon} key={index}>
                    <span className={link.icon}></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={Style.img_wrap}>
              <figure className="mb-0 ratio">
                <img src={Assets.thariq} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
