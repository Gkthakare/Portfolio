import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>{' '}
      <ul>
        <li>
          <a
            href="https://www.facebook.com/gaurav.thakare.5876060/"
            target="_gaurav"
          >
            <FaFacebookSquare className="facebook" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/gaurav-thakare-36228918b/"
            target="_gaurav"
          >
            <FaLinkedin className="linkedin" />
          </a>
        </li>

        <li>
          <a href="https://github.com/Gkthakare" target="_gaurav">
            <FaGithub className="github" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/thakare2379/?hl=en"
            target="_gaurav"
          >
            <FaInstagram className="instagram" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
