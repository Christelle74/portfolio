import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { faHtml5, faGithub, faCss3, faReact, faSass, faJsSquare,  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';
import './about.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'About me'.split('')} index={15}/>
                </h1>
                <p>
                    Développeuse front-end enthousiaste, je suis à la recherche d'un poste dans une entreprise établie qui me donnerait l'opportunité de travailler avec les dernières technologies, sur des projets variés et stimulants.
                </p>
                <p>
                    Je suis une personne fiable, organisée, autonome et je travaille à améliorer mes connaissances.
                </p>
                <p>
                    Si je devais me définir en une phrase ce serait passionnée de danses latines et de kizomba, aimant les grands espaces et la photographie.
                </p>
            </div>

            <div className='aside'>
                <div className='cube-container'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faSass} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
};

export default About;