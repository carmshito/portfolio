import { Container } from "react-bootstrap";

import "../styles/ProfilePicture.scss";

import pfp from "../assets/pfp.png"

const ProfilePicture = () => {
  return (
    <Container className="profile-picture-window">
      <div className="window-header">
        <span className="window-text">pfp.jpg</span>
      </div>
      <img src={pfp} alt="Profile" className="profile-picture-image"/>
    </Container>
  )
}

export default ProfilePicture;