import { Container } from "react-bootstrap";

import "../styles/SideNavBar.scss";

import AboutMeIcon from "../assets/about-me-icon.png";
import MySkillsIcon from "../assets/my-skills-icon.png";
import MyProjectsIcon from "../assets/my-projects-icon.png";
import ContactMeIcon from "../assets/contact-me-icon.png";



const SideNavBar = () => {
  return (
      <Container className="icon-container">
        <a href="">
          <img src={AboutMeIcon} alt="About Me" className="side-bar-icon"/>
        </a>
        <a href="">
          <img src={MySkillsIcon} alt="My Skills" className="side-bar-icon"/>
        </a>
        <a href="">
          <img src={MyProjectsIcon} alt="My Projects" className="side-bar-icon"/>
        </a>
        <a href="">
          <img src={ContactMeIcon} alt="Contact Me" className="side-bar-icon"/>
        </a>
      </Container>
  );
}

export default SideNavBar;
