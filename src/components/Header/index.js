import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Style from "./Header.module.scss";
import Assets from "../Assets";
import { useWindowSize } from "../../logics/useDimension";
import { Link } from "react-scroll";

const Header = () => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Define navigation links array
  const navLinks = [
    { to: "banner", label: "Home" },
    { to: "next", label: "About" },
    { to: "services", label: "Services" },
    { to: "gallery", label: "Gallery" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${Style.header} ${isActive ? Style.active : ""}`}>
      <div className="container">
        <nav className="d-flex justify-content-between">
          <a href="google" className={Style.logo_area}>
            <img src={Assets.logo} alt="" />
          </a>

          {width >= 1200 ? (
            // Desktop Navigation
            <ul className="d-flex justify-content-end">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} smooth={true} duration={200}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            // Mobile Offcanvas Navigation
            <div className={Style.offcanvas_wrap}>
              <Button onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body className={Style.offcanvas_body}>
                  <ul>
                    {navLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.to}
                          smooth={true}
                          duration={500}
                          onClick={handleClose}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
