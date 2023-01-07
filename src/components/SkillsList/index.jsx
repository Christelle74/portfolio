import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faGithub, faCss3, faReact, faSass, faJsSquare, faBootstrap,faFigma,faNpm,faTrello, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'
import './skills.scss'


const SkillsList = () => {
    return (
        <div className='skillsContent'>
            <div className='skills'>
                <h2>Langages Informatiques</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHtml5} color='#e34c26'/>
                        <span>Html5</span> 
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCss3} color='#264de4'/>
                        <span>Css3</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faJsSquare} color='#F0DB4F'/>
                        <span>Javascript</span>
                    </li>
                </ul>
                <h2>Frameworks</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb'/>
                        <span>React</span>
                    </li>
                </ul>
                <h2>Autres</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faSass} color='#cd6799'/>
                        <span>Sass</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} color='#171515'/>
                        <span>Github</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBootstrap} color='#563d7c'/>
                        <span>Bootstrap</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFigma} color='#171515'/>
                        <span>Figma</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNpm} color='#CC3534'/>
                        <span>Npm</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTrello} color='#007AC0'/>
                        <span>Trello</span>
                    </li>
                </ul>
                <h2>Back-end</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon  color='#589636'/>
                        <span>MongoDB</span>
                    </li>
                    <li>
                        <FontAwesomeIcon  color='#171515'/>
                        <span>Express</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNodeJs} color='#44883e'/>
                        <span>NodeJs</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default SkillsList;