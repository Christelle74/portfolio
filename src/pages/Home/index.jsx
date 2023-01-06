import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-c.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
import './home.scss'
import Loader from 'react-loaders'


const Home=()=> {
  const [letterClass, setLetterClass] = useState('text-animate')
  const presentationArray = ['J','e',' ',"m'",' ','a','p','p','e','l','l','e']
  const nameArray = ['h', 'r','i','s','t','e','l','l','e',',']
  const jobArray = ['j','e','','s','u','i','s','','D','é','v','e','l','o','p','p','e','u','r',' ','F','r','o','n','t','-','E','n','d']

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
              <span className={`${letterClass} _12`}>ello !</span>
              <br/>
              <AnimatedLetters  letterClass={letterClass} strArray={presentationArray} index={13}/>
              <img className={`${letterClass} _14`} src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22}/>
            </h1>
            <h2>Developpeur Front-end / JavaScript / React, à la recherche d'un poste en remote et à temps complet</h2>
            <h3>Je propose également de créer votre site web en freelance</h3>
            <div>
              <a className='btn' href='/media/CV_Philippe_Christelle_DeveloppeurFrontEnd.pdf' download="CV_Philippe_Christelle_DeveloppeurFrontEnd.pdf" target="_blank">Télécharger CV</a>
            </div>
            <Link to='/contact' className='btn'>Contactez moi</Link>   
        </div>
        <div className='aside'>
            <div className='profile-picture'>
              <div className='profile-picture-background'></div>
          </div>
        </div>
        <Loader type='pacman'/>
    </div>  
  )
}

export default Home