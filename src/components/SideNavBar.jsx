import { Container } from "react-bootstrap";

import "../styles/SideNavBar.scss";

import AboutMeIcon from "../assets/about-me-icon.png";
import MySkillsIcon from "../assets/my-skills-icon.png";
import MyProjectsIcon from "../assets/my-projects-icon.png";
import ContactMeIcon from "../assets/contact-me-icon.png";



const SideNavBar = () => {
  return (
      <Container className="icon-container">
        <a href="" className="side-bar-icon">
          <img src={AboutMeIcon} alt="About Me" />
        </a>
        <a href="" className="side-bar-icon">
          <img src={MySkillsIcon} alt="My Skills" />
        </a>
        <a href="" className="side-bar-icon">
          <img src={MyProjectsIcon} alt="My Projects" />
        </a>
        <a href="" className="side-bar-icon">
          <img src={ContactMeIcon} alt="Contact Me" />
        </a>
      </Container>
  );
}

export default SideNavBar;
