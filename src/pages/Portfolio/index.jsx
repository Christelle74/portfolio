import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import ProjectList from '../../components/ProjectList';


const Portfolio = () => {
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
                        <AnimatedLetters letterClass={letterClass} strArray={'Portfolio'.split('')} index={15}/>
                    </h1>
                </div>
                <div>
                    <ProjectList/>
                </div>
           </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Portfolio;