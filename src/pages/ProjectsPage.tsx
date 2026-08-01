import React from "react";
import { useNavigate } from 'react-router-dom';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Project.scss';
import '../assets/styles/ProjectsPage.scss';
import pdfFile from '../assets/PDF/Fortnite-On-Site-Tournament-Marketing-Case-Study.pdf';
import pdfFile0 from '../assets/PDF/McLaren-SpeedTail-Case-Study.pdf';
import pdfFile1 from '../assets/PDF/LED-Crystal-Panel.pdf';
import pdffile2 from '../assets/PDF/Stadium-&-Storefront-LED-Floodlight.pdf'
import pdffile3 from '../assets/PDF/Social Media Audit for G2 E-sport.pdf'


function ProjectsPage() {
    const navigate = useNavigate();

    return (
        <div className="projects-page-wrapper">
            {/* Back Button */}
            <div className="projects-page-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Home</span>
                </button>
            </div>

            <div className="projects-container" id="projects">
                <h1>All Projects</h1>
                <div className="projects-grid">
                    <div className="project">
                        <a href={pdfFile} target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={pdfFile} target="_blank" rel="noreferrer"><h2>Fortnite On-Site Tournament Marketing Case Study</h2></a>
                    </div>
                    <div className="project">
                        <a href={pdfFile0} target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={pdfFile0} target="_blank" rel="noreferrer"><h2>McLaren SpeedTail Case Study</h2></a>
                    </div>
                    {/* <div className="project">
                        <a href={pdfFile1} target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={pdfFile1} target="_blank" rel="noreferrer"><h2>LED Crystal Panel Campaign</h2></a>
                    </div> */}
                    {/* <div className="project">
                        <a href={pdffile2} target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={pdffile2} target="_blank" rel="noreferrer"><h2>Stadium & Storefront LED Floodlight Campaign</h2></a>
                    </div> */}
                    <div className="project">
                        <a href={pdffile3} target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={pdffile3} target="_blank" rel="noreferrer"><h2>Social Media Audit For G2 E-Sport</h2></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
