import React from 'react';
import Contact from '../Contact';
import Menu from '../Menu';
import Footer from '../Footer';


const Form = () => {
  const ContacContainer = {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const foot = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "60px",

  }
  return (
    <>
    <Menu />

    <div style={ContacContainer}>
    <Contact />
    </div>

    <div style={foot}>
    <Footer />
    </div> < />

  );
}


export default Form;