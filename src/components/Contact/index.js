import Style from "./contact.module.scss";
import Animate from "../Animate/Animate";

const Contact = () => {
  // Define an array for contact menu links
  const contactLinks = [
    { href: "#banner", icon: "icon-home3", label: "Home" },
    { href: "#next", icon: "icon-user", label: "About" },
    { href: "#services", icon: "icon-wrench", label: "Services" },
    { href: "#gallery", icon: "icon-images", label: "Gallery" },
    { href: "tel:+97430510542", icon: "icon-phone", label: "Contact" },
  ];

  // Define an array for social media links
  const socialLinks = [
    { href: "https://www.facebook.com", icon: "icon-facebook" },
    { href: "https://www.instagram.com", icon: "icon-instagram" },
    { href: "https://www.youtube.com", icon: "icon-youtube" },
    { href: "https://www.linkedin.com", icon: "icon-linkedin2" },
  ];

  return (
    <Animate as="section" className={`${Style.contact} anim`} id="contact">
      <div className="container">
        {/* Contact Menu Links */}
        <div className={Style.contact_wrap}>
          <ul className="d-flex">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <span className={link.icon}></span>
                  <span className="ms-2">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={Style.social_wrap}>
          <ul className="d-flex">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={Style.icon}>
                  <span className={link.icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Area */}
        <div className={Style.footer_area}>
          <p>Copyright 2024, Thariq Ameer Group All rights reserved</p>
          <p>
            Designed by{" "}
            <a href="https://portfolio-safeela.vercel.app/">Saffnazrin</a>
          </p>
        </div>
      </div>
    </Animate>
  );
};

export default Contact;
