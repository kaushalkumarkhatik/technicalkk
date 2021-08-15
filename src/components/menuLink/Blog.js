import React from 'react';
import Carousel from '../Carousel';
import Menu from '../Menu';
import Footer from '../Footer';
import Card from '../Card';
import Cdata from '../Cdata';


const Blog = () => {
  return (
    <>
    
      <Menu />
        <Carousel />
           
       {
     Cdata.map((val)=>{
       const {id,heading,imgsrc, description,link,sub,link1,title,docs}=val;
       return (
            <Card
              key={id}
              heading={heading}
              imgsrc={imgsrc}
              description={description}
              link={link}
              link1={link1}
              sub={sub}
              title={title}
              docs={docs}
            />
         )
     })
   }
       
      <Footer />
    < />

  );
}


export default Blog;