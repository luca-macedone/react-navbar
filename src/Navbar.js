import { useEffect, useRef, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./Links";
import Socials from "./Socials";

const Navbar = () => {
  const navbar = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const checkSize = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth <= 1026.5) {
      setIsMobile(true);
      setIsVisible(false);
    } else {
      setIsMobile(false);
      setIsVisible(false);
    }
  };

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    // console.log(isVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <div
        className="shadow py-3"
        ref={navbar}
      >
        <nav
          className="container d-flex align-items-center justify-content-between flex-wrap"
          id="navbar"
        >
          <div className="d-inline-flex align-items-center gap-2 fs-5 fw-semibold">
            <img
              src="https://navbar-tutorial.netlify.app/static/media/logo.7d6aa1c2.svg"
              alt="DevBar Logo"
              height="28"
              className="ratio-1x1"
            />
            DevBar
          </div>

          {!isMobile && (
            <>
              <Links isMobileView={isMobile}></Links>

              <Socials></Socials>
            </>
          )}
          {isMobile && (
            <>
              <div>
                <button
                  type="button"
                  className="btn py-1 px-3 d-inline-flex align-items-center border-0"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-dark"
                    size="xl"
                  />
                </button>
              </div>
            </>
          )}
          {isVisible && isMobile && (
            <div
              className="w-100"
              id="dropdown-menu"
            >
              <Links isMobileView={isMobile}></Links>
              {/* <Socials></Socials> */}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
