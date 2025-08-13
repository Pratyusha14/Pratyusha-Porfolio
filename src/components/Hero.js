import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import './Hero.scss';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ParticlesComponent from './ParticlesConfig';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Hero({ theme }) { // Accept theme as a prop
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showBlobs, setShowBlobs] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showWord, setShowWord] = useState(false);

  const hiArray = ['H', 'i,'];
  const imArray = ['I', ' ', 'a', 'm'];
  const nameArray = ['r', 'a', 't', 'y', 'u', 's', 'h', 'a'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass(prevLetterClass =>
        prevLetterClass === 'text-animate' ? 'text-animate-hover' : 'text-animate'
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBlobs(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIcons(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWord(true);
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <section className={`hero-section md:py-32 ${theme}`}>
      <div className="relative container mx-auto">
        <ParticlesComponent id="particles" theme={theme}/>
        <div className="lettersc grid md:grid-cols-2 items-center justify-center md:justify-between relative">
          <div className="hero-info">
            <h1 className="text-4xl lg:text-6xl">
              <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={10} />{' '}
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={14} />{' '}
              <span className={`${letterClass} _16 text-accent`}>P</span>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} /> <br />
              <div className={`word inline ${showWord ? 'word-visible' : ''}`}>
                {showWord && (
                  <Typewriter
                    options={{
                      strings: ['Software Developer', 'Front-end Developer', 'Full Stack Developer', 'Web Developer'],
                      autoStart: true,
                      pauseFor: 700,
                      loop: true,
                    }}
                  />
                )}
              </div>
            </h1>
          </div>

          <div className={`blobc relative hero-img mt-12 ${showBlobs ? 'blobs-visible' : ''}`}>
            <div className="blob-overlay ml-16 md:ml-auto"></div>
            <div className="blob ml-16 md:ml-auto"></div>
          </div>

          <div className={`icons relative translate-x-20 -translate-y-28 cursor-pointer`}>
            <a href="https://github.com/Pratyusha14" target="_blank" rel="noreferrer" className='pr-6'>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
              <FontAwesomeIcon
                icon={faGithub}
                color="#37e4db"
                className={`github ${showIcons ? 'icons-show' : ''}`}
                size='2x'
              />
            </a>
            <a href="https://www.linkedin.com/in/mallampeta-pratyusha/" target="_blank" rel="noreferrer" className='pr-6'>
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#37e4db"
                className={`linkedin ${showIcons ? 'icons-show' : ''}`}
                size='2x'
              />
            </a>
            <a href="mailto:mallampetapratyusha14@gmail.com" target="_blank" rel="noreferrer" className='pr-6'>
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#37e4db"
                className={`Gmail ${showIcons ? 'icons-show' : ''}`}
                size='2x'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;