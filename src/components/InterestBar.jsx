import { Container } from "react-bootstrap";

import "../styles/InterestBar.scss";

import TentEmoji from "../assets/tent-emoji.png";
import DogEmoji from "../assets/dog-emoji.png";
import CatEmoji from "../assets/cat-emoji.png";
import VolleyballEmoji from "../assets/volleyball-emoji.png";
import ArtEmoji from "../assets/art-emoji.png";
import FrisbeeEmoji from "../assets/frisbee-emoji.png";
import GamingEmoji from "../assets/gaming-emoji.png";
import TravelEmoji from "../assets/travel-emoji.png";


const InterestBar = () => {
  return (
    <Container className="interest-container">
        <span>these are my interests!</span>
      <div className="interest-bar">
        <img src={TentEmoji} alt="Tent" className="emoji-icon"/>
        <img src={DogEmoji} alt="Dog" className="emoji-icon"/>
        <img src={CatEmoji} alt="Cat" className="emoji-icon"/>
        <img src={VolleyballEmoji} alt="Volleyball" className="emoji-icon"/>
        <img src={ArtEmoji} alt="Art" className="emoji-icon"/>
        <img src={FrisbeeEmoji} alt="Frisbee" className="emoji-icon"/>
        <img src={GamingEmoji} alt="Gaming" className="emoji-icon"/>
        <img src={TravelEmoji} alt="Travel" className="emoji-icon"/>
      </div>
    </Container>
  )
}

export default InterestBar;