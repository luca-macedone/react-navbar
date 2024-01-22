import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <>
      <ul className="list-unstyled d-flex align-items-center gap-5 mb-0 flex-column flex-lg-row">
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://twitter.com"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://facebook.com"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://linkedin.com"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
