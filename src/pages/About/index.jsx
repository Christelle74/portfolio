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
                <p>Après 15 ans d'expérience dans le domaine administratif et comptable, j'ai suivi une formation de 14 mois me permettant d'obtenir le savoir et savoir-faire nécessaires à ma reconversion dans le métier de développeur web. <br />
                    <br />
                    Plutôt passionnée par la partie 'front-end' d'un site (conception et intégration), je sais néanmoins créer un petit 'back-end' si nécessaire. <br />
                    <br />
                    Aujourd'hui, je continue de parfaire et d'alimenter mes connaissances et mon expérience tout en créant des projets personnels et professionnels.
                    <br />
                    <br />
                    Disponible à partir de fin août 2023, je suis à la recherche d'un poste dans une entreprise établie qui me donnerait l'opportunité de travailler avec les dernières technologies, sur des projets variés et stimulants.
                </p>
                <p>
                    De nature enthousiaste, je suis une personne fiable, organisée, autonome et je travaille à améliorer mes connaissances.
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