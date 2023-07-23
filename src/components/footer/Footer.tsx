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
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              animi natus vero? Harum, placeat aspernatur.
            </span>
          </div>
        </div>
        <div className="item-ctn">
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>+1-234-567-8910</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>someone@email.com</span>
          </div>
          {/* <FontAwesomeIcon icon={faEnvelope} />
          <span>In a Galaxy far, far away</span> */}
        </div>
        <div className="links-ctn">
          <div>
            <p>About Us</p>
            <p>Job</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
