import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn,faChartLine, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Snapchat Ads",
    "Pixel",
    "CAPI",
    "GA4",
    "GTM",
    "UTM",
   
];

const labelsSecond = [
    "Events Manager",
    "Pixel Diagnostics",
    "CAPI",
    "GA4",
    "GTM",
    "Attribution",
    "Reporting",
    "KPI Dashboard",
    "Cohorts",
];

const labelsThird = [
    "Creative Strategy",
    "UGC Briefs",
    "Hook Testing",
    "Iterations",
    "Scaling Rules",
    "Budget Pacing",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBullhorn} size="3x"/>
                    <h3>Performance Media Buying</h3>
                    <p>I plan, launch, and optimize performance campaigns focused on measurable growth—leads, sales, and revenue. I build full-funnel structures, test creatives, control CPA/ROAS, and scale winners with clear reporting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Analytics, Tracking & Optimization</h3>
                    <p>I audit tracking and attribution to ensure accurate data. I monitor key metrics daily (CPM, CTR, CPC, CPA, ROAS) and optimize based on insights—creative, targeting, placements, and budget distribution.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faArrowTrendUp} size="3x"/>
                    <h3>Creative Testing & Scaling</h3>
                    <p>I run structured creative testing (hooks, angles, offers) to find winners fast. Then I scale with controlled budget rules, maintaining stability while increasing spend.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;