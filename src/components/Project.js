import React from 'react';
import Zoom from 'react-reveal/Zoom';


const Project = (props) => {
  const {pic,bg,heading,pname,about,demo,code}=props;
  return (
    <>
  <Zoom>
  
    <section id="code">
    <div className="title">
      <h1>{heading}</h1>
    </div>
       <div className="box">
        <div className="boxCenter" style={{backgroundColor:bg}}>
          <img src={pic} alt="..." />
          <h1>{pname}</h1>
          <p>
            {about}
          </p>
          <ul>
            <li><a href={demo} target="_blank" rel="noreferrer">Demo</a></li>
             <li><a href={code} target="_blank" rel="noreferrer">Source Code</a></li>
    </ul>
    </div>
    </div>
    </section>
    
    </Zoom>
    < />

  );
}


export default Project;