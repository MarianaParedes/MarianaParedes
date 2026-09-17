import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faNodeJs, faDev } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "NodeJS",
    "NestJS",
    "Express",
    "TypeScript",
    "Prisma",
    "PHP",
    "API REST",
    "PostgreSQL",
    "Microservices"
];

const labelsSecond = [
    "Angular",
    "Scrum",
    "Git",
    "GitHub Actions",
    "Linux",
    "Docker",
    "AWS",
    "Lambda",
];

const labelsThird = [
    "Claude",
    "Codex",
    "SDD",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend Developer</h3>
                    <p>I have developed a variety of web applications from scratch using technologies such as NodeJS, NestJS, Express, and PHP. I have solid experience with the software development lifecycle (SDLC), with a particular focus on analysis and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDev} size="3x"/>
                    <h3>Full-stack developer</h3>
                    <p>I develop full-stack applications, working with backend technologies and Angular on the frontend. I also contribute to requirements analysis, testing and AWS deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI - assisted development </h3>
                    <p>I incorporate AI tools into the development process to improve productivity, explore solutions, and support technical decision-making.</p>
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