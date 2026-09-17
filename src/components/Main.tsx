import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Mariana Paredes" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MarianaParedes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mariana-paredes-profile/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mariana Paredes</h1>
          <p>Full Stack Engineer with focus on Backend</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MarianaParedes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mariana-paredes-profile/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;