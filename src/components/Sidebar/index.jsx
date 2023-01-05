import React from 'react'
import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoC from '../../assets/images/logo-c.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faImage, faWallet, faUtensils, faTools, faToolbox, faBook} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
  return (
    <div className='navbar'>
      <Link className='logo' to='/'>        
        <img src={LogoC} alt="Logo" />
        {/*<img className='sub-logo' src={LogoSubtitle} alt="logo subtitle" /> */}
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to="/">
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="aboutLink" to="/about">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="portfolioLink" to="/portfolio">
          <FontAwesomeIcon icon={faImage} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="skillsLink" to="/skills">
          <FontAwesomeIcon icon={faTools} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="testimonialsLink" to="/testimonials">
          <FontAwesomeIcon icon={faBook} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className="contactLink" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Christelle74">
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christelle-philippe-a687771a3/">
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100086364060619">
            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
          </a>
        </li>
      </ul>
    </div>
  )
}
