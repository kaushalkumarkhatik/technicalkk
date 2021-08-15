import React, { useState } from 'react';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  //create useState
  const [user,
    setUser] = useState({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  //onChange in input filled
  let name,
  value;
  const getData = (event)=> {
    name = event.target.name;
    value = event.target.value;

    setUser({
      ...user, [name]: value
    });

  }
  //fetch data from firebase
  const postData = async (e)=> {
    e.preventDefault();
    const {
      name,
      email,
      number,
      message
    } = user;
    if (name && email && number && message) {
      const res = await fetch('https://mydata-c556b-default-rtdb.firebaseio.com/usercontact.json', {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          message,
        })
      })
      
      
      
      
      
      if (res) {
        setUser({
          name: "",
          email: "",
          number: "",
          message: "",
        });
        //alert("Send Successfully...");
        toast.dark('Submit Successfully...🙂🙂🙂', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      //alert("Please fill the all data")
      toast.error('Please fill the form ⚠️⚠️⚠️', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
      
    }
  };
  
  

  
  return (
    <>
      
    <section>
 <div className="container" id="contact">
    <h2>Contact Us</h2>
    <form id="myform" method="POST" >
      <div className="field">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={user.name}
      autocomplete="off"
      required
      onChange={getData}
      /><br />
      
      </div>
    <div className="field">
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={user.email}
      autocomplete="off"
      required
      onChange={getData} /><br />
    </div>
    <div className="field">
    <input
      type="text"
      name="number"
      placeholder="Mobile Number"
      value={user.number}
      autocomplete="off"
      required
      onChange={getData}
      /><br />
    </div>
    <div className="field">
    <textarea
        name="message"
        rows="10"
        cols="36"
        placeholder="Message"
        value={user.message}
        onChange={getData}
        ></textarea><br />
    <div className="btn1">
    <button type="submit" onClick={postData}>Submit</button>
      </div>
    </div>
    </form>
    </div>
    </section>
    <ToastContainer
      bodyClassName="toastBody"
      /> 
      
      < />
  );
}


export default Contact;