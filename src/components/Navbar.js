import React from 'react';
import Typewriter from 'typewriter-effect';
import HeadShake from 'react-reveal/HeadShake';
import Menu from './Menu';



const Navbar = () => {
  const github="https://github.com/kaushalkumarkhatik";
  const youtube="https://youtube.com/channel/UCOVcYqozlM4P-2KQ2fhkl7g";
  const linkdin="https://www.linkedin.com/in/kaushal-kumar-khatik-67416220a";
  return (
    <>
    <HeadShake>
      <nav id="home">
    <div className="cont">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,245.3C840,235,960,181,1080,176C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
   
  <Menu />
     
   
      <div className="logo">
        <img src="./images/logo.jpg" alt="logo" /><br />
      </div>
      <h1>I'm a  <span id="type1"><Typewriter
  options={{
    strings: ['Developer', 'Designer','Photo Editor'],
    autoStart: true,
    loop: true,
  }}
/>
      </span>

      
      
     </h1>
      <p>
        In this website you will learn web developement project based learning and by which you will improve your skill.
      </p>

      <div className="wrap">
        <div className="icon github">
          <a href={github} target="_blank"  rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <div className="icon youtube">
          <a href={youtube} target="_blank"  rel="noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="icon linkdin">
          <a href={linkdin} target="_blank"  rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      </div>
    </nav>
</HeadShake>
    < />

  );
}


export default Navbar;