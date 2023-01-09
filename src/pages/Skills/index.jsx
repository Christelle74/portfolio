
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import SkillsList from '../../components/SkillsList';


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Hard Skills'.split('')} index={15}/>
                    </h1>
                </div>
                
                <div className='skillsContent'>
                    <SkillsList/>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Skills;
