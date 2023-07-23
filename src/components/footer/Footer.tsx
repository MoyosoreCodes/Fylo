import "./Footer.scss";
import Logo from "../svg/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="footer-ctn">
      <Logo />
      <div className="items">
        <div className="item-ctn">
          <div className="content">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              animi natus vero? Harum, placeat aspernatur.
            </span>
          </div>
        </div>
        <div className="item-ctn">
          <div className="content">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>+1-234-567-8910</span>
          </div>
          <div className="content">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>someone@email.com</span>
          </div>
        </div>
        <div className="links-ctn">
          <div className="content">
            <p>About Us</p>
            <p>Job</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="content">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
