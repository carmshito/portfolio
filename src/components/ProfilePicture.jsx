import { Container } from "react-bootstrap";

import "../styles/ProfilePicture.scss";

import pfp from "../assets/pfp.png"
import LargeButtonsSvg from "../assets/LargeButtonsSvg";


const ProfilePicture = () => {
  return (
    <Container className="profile-picture-window">
      <div className="window-header">
        <LargeButtonsSvg className="large-buttons"/>
        <span className="window-text">pfp.jpg</span>
      </div>
      <img src={pfp} alt="Profile" className="profile-picture-image"/>
    </Container>
  )
}

export default ProfilePicture;