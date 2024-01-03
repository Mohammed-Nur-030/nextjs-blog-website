import React, { useState } from 'react'
import styles from '@/styles/contact.module.css'


const Contact = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name,
      email,
      password
    }

     fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.text())
    .then(data=>{ 
      alert('Thanks for contacting us')
    }

    )
    .catch((err)=>{
      console.error('Error',err);
    })

    setName('');
    setPassword('');
    setEmail('');
    
  
  }
  const handleChange=(e)=>{
    // console.log(e.target.value);
    // console.log("e.target.value",e.target.value);

    if(e.target.name==='name'){
      setName(e.target.value);
      // console.log(e.target.value);
    }
    else if(e.target.name==='password'){
      setPassword(e.target.value);
      // console.log(password);
    }
    else if(e.target.name==='email'){
      setEmail(e.target.value);
      // console.log(value);
    }

  }

  return (
    
    <div className={`${styles.main}`}>
      <form className={`${styles.form}`} onSubmit={handleSubmit} >
        <h2>Contact Details</h2>
        <div>
          <label htmlFor="name" >Enter Your Name:</label>
          <input type="text" 
          value={name} 
           id="name" 
           name="name"
           aria-describedby="nameHelp"
            onChange={handleChange}
             />
        </div>
        <div>
          <label htmlFor="email" >Email address:</label>
          <input type="email"  
          value={email}   
            id="email" 
            name="email"
            aria-describedby="emailHelp"
             onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" >Password:</label>
          <input type="password"
           value={password}   
            id="password"
            name="password"
            onChange={handleChange}/>
        </div>

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Contact
