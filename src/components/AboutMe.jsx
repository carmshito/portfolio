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
      <h1 className="hello-text">Hello!</h1>
      <p className="about-me-text">
      My name is <b>Carmelia</b>, but I also like to go by <b>Carm</b>. I am a <b>full stack web developer</b> and <b>creative</b> based in <b>Toronto</b>.<br/><br/>
      This portfolio is my playground, featuring my projects and illustrations.<br/>
      I enjoy drawing, playing sports, meeting new people, and taking on new challenges.<br/>
      Let's create something amazing together!
      </p>
    </Container>
  );
}

export default AboutMe