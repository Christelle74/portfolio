import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = ({project}) => {
    //console.log(project.utilsIcons)
    const [showInfos, setShowInfos] = useState(false)

    return (
        <div className='project-container'>
        
            <h3>{project.name}</h3>
            <img src={project.picture} alt={project}/>
            <div className='icons'>
                {project.utilsIcons.map(icon=> 
                    <i className={icon} key={icon}></i>
                )}
            </div>
            <div className='arrow'>
                <FontAwesomeIcon icon={faCircleArrowRight} className='faPlusCircle' onClick={()=>{setShowInfos(!showInfos)}}/>
            </div>
            
            {showInfos && ( 
            <div className="showInfos">
                <div className="infosContent">
                    <div className="head">{project.name}
                        <div className='sourceCode'>
                            {project.site ?
                                <a href={project.site} rel="noopener noreferrer" className='button' target="blank">Voir le site</a>
                                : ''
                            }
                            {project.source ?
                                <a href={project.source} rel="noopener noreferrer" className='button' target="blank">Source</a>
                                : ''
                            }
                            
                        </div>
                    </div>
                    <p className='text'>{project.info}</p>
                    <div  className='arrow' onClick={()=>{setShowInfos(false)}}> <FontAwesomeIcon icon={faCircleArrowLeft} className='svg'/></div>
                </div>
            </div>
            )} 
        </div>
    );
};

export default ProjectCard;