import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Card = (props) => {
  const {heading, description,link,imgsrc,link1,sub,title,docs}=props;
  return (
    <>
      <Zoom>
    <div className="title">
      <h1>{title}</h1>
    </div>
    <div className="cardBox">
    <div className="cardContainer">
  <div className="cardBx">
    <div className="imgBx">
      <img src={imgsrc} alt="" />
        <h1>{heading}</h1>
    </div>
    <div class="cardContent">
    
      <p>{description}</p>
      <a href={link} target="__blank">Documentation</a>
        <p>{sub}</p>
      <a href={link1} target="__blank">{docs}</a>
    </div>
  </div>
</div>
</div>
  </Zoom>
    < />

  );
}


export default Card;