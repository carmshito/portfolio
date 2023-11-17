import { Navbar, Container } from "react-bootstrap";

import "../styles/TopNavBar.scss";

import CactusSvg from "../assets/CactusSvg";
import CVIconSvg from "../assets/CVIconSvg";
import LinkedInIconSvg from "../assets/LinkedInIconSvg";
import GitHubIconSvg from "../assets/GitHubIconSvg";
import WifiSvg from "../assets/WifiSvg";
import BatterySvg from "../assets/BatterySvg";

const TopNavBar = () => {
  return (
    <Navbar className="top-nav-bar">
      <Container className="container">
        <div className="nav-bar-text">
          <Navbar.Brand href="#home">
            <CactusSvg />
          </Navbar.Brand>
          <span className="nav-bar-name">Carmelia Shito</span>
        </div>
        <div>
          <BatterySvg />
          <WifiSvg />
          <a href="#">
            <CVIconSvg />
          </a>
          <a href="https://www.linkedin.com/in/carmelia-shito/">
            <LinkedInIconSvg />
          </a>
          <a href="https://github.com/carmshito">
            <GitHubIconSvg />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
