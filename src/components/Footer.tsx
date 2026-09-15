import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/MarianaParedes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mariana-paredes-profile/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by Mariana Paredes, based on a <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">template by Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;