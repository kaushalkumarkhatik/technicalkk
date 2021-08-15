import React from 'react';
import Navbar from "../Navbar"
import Project from "../Project"
import Pdata from "../Pdata"
import Contact from "../Contact"
import Footer from "../Footer"


const Home = () => {
  return (
    <>
   <Navbar />
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
    
    <Contact />
    <Footer />
    < />

  );
}


export default Home;
