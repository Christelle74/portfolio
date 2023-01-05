import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../components/AnimatedLetters';
import './testimonials.scss'

const Testimonials = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container testimonials-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Testimonials'.split('')} index={15}/>
                    </h1>
                    <h2>A venir...</h2>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
};

export default Testimonials;