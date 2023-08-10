import {useState, useEffect} from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import LogoRaffy from '../../assets/images/RaffyLogo.svg'
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a','f','f','y']
  const jobArray = ['I','n','f','o','r','m','a','t','i','o','n','','t','e','c','h','n','o','l','o','g','y',]
  const job2Array = ['S','t','u','d','e','n','t']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

    return (
      <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span> 
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>  
          <img src={LogoRaffy} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={21}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={10}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={job2Array} idx={20}/>
          </h1>
          <h2>Information Technology / Frontend Developer / SYS Admin</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type='pacman' />
      </>
    );
  };

export default Home