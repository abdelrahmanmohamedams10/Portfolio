import React from "react";
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/abdelrahman-mohamed-ams10/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://calendly.com/abdelrahmanmohamed-ams10/30min" target="_blank" rel="noreferrer"><EventAvailableIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;