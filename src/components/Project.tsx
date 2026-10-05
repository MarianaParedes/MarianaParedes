import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://turnos-flex.vercel.app/login" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://turnos-flex.vercel.app/login" target="_blank" rel="noreferrer"><h2>Turnos Flex</h2></a>
                <p>Designed, developed, and launched a Turnos management system.</p>
            </div>           
        </div>
    </div>
    );
}

export default Project;