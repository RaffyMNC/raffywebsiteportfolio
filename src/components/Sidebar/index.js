import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoRaffy from '../../assets/images/RaffyLogo.svg'
import raffylogosubtitle from '../../assets/images/RaffySubLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBriefcase, faEnvelope, faHome, faInfo, faLink, faPlay, faUser,} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link classname='logo' to='/'>
            <img src= {LogoRaffy} alt="logo" />
            <img className='sub-logo' src={raffylogosubtitle} alt="raffy" />
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#7D0000" />
            </NavLink>

            <NavLink exact= "true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#7D0000" />
            </NavLink>

            <NavLink exact= "true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#7D0000" />
            </NavLink>

            <NavLink exact= "true" activeclassname="active" className="my-work" to="/mywork">
                <FontAwesomeIcon icon={faBriefcase} color="#7D0000" />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/raffy-miguel-capili-97054a25a/'>
                    <FontAwesomeIcon icon={faInfo} color='#7D0000' />
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faLink} color='#7D0000' />
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href=''>
                    <FontAwesomeIcon icon={faPlay} color='#7D0000' />
                </a>

            </li>
        </ul>
    </div>
);

export default Sidebar;