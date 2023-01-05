import React, { useEffect, useState } from 'react'
//import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
import './home.scss'
import Loader from 'react-loaders'


const Home=()=> {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ','C','h', 'r','i','s','t','e','l','l','e']
  const jobArray = ['D','é','v','e','l','o','p',,'p','e','u','r',' ','W','e','b']

  useEffect(()=>{
      setTimeout(()=>{
        setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>ello,</span>
              <br/>
              <span className={`${letterClass} _13`}>Je</span><br/>
              <span className={`${letterClass} _14`}>suis</span>
              {/* <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" /> */}
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22}/>
            </h1>
            <h2>Developpeur Front-end / JavaScript / React</h2>
            <div>
              <a className='btn' href='/media/CV_Philippe_Christelle_DeveloppeurFrontEnd.pdf' download="CV_Philippe_Christelle_DeveloppeurFrontEnd.pdf" target="_blank">Télécharger CV</a>
            </div>
            <Link to='/contact' className='btn'>Contactez moi</Link>
            
            
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
        <Loader type='pacman'/>
    </div>  
  )
}

export default Home