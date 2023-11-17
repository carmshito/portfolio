import { Container } from "react-bootstrap";

import "../styles/AboutMe.scss";
import LargeButtonSvg from "../assets/LargeButtonsSvg";

const AboutMe = () => {
  return (
    <Container className="about-me-window">
      <div className="window-header">
        <LargeButtonSvg className="large-buttons"/>
        <span className="window-text">
          AboutMe.txt
        </span>
      </div>
    </Container>
  );
}

export default AboutMe