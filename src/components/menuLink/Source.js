import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Project from '../Project';
import Pdata from "../Pdata"
import Carousel from '../Carousel';

const Source = () => {
  
  return (
    <>
      <Carousel />
    <Menu />
    
       {
     Pdata.map((val)=>{
       const {id,pic,bg,heading,pname,about,demo,code}=val;
       return (
            <Project
              key={id}
              heading={heading}
              bg={bg}
              pic={pic}
              pname={pname}
              about={about}
              demo={demo}
              code={code}
            />
         )
     })
   }
    <Footer />
    < />

  );
}
export default Source;