import React from "react";
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/di2ydexdo/image/upload/v1785615999/WhatsApp_Image_2026-08-01_at_11.24.56_PM_fcrxny.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* <a href="https://www.instagram.com/abdelrahman_ad3/" target="_blank" rel="noreferrer"><InstagramIcon/></a> */}
            <a href="https://www.linkedin.com/in/abdelrahman-mohamed-ams10/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://calendly.com/abdelrahmanmohamed-ams10/30min" target="_blank" rel="noreferrer"><EventAvailableIcon/></a>

          </div>
          <h2>Abdelrahman Sobhy </h2>
          <p>Social Media Marketer | Esports Marketing Enthusiast</p>

          <div className="mobile_social_icons">
            {/* <a href="https://www.instagram.com/abdelrahman_ad3/" target="_blank" rel="noreferrer"><InstagramIcon/></a> */}
            <a href="https://www.linkedin.com/in/abdelrahman-mohamed-ams10/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://calendly.com/abdelrahmanmohamed-ams10/30min" target="_blank" rel="noreferrer"><EventAvailableIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;