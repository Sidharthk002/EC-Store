import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.scss"

const obj = {
  fullName:"",
  email:"",
  password:"",
  cart:[]
}

function SignUp() {
  const navigate = useNavigate();
  const [data,setData] = useState(obj);

 const handleChange = (e)=>{
  console.log(e.target.value)
    setData({...data, [e.target.name]:e.target.value})
 }
console.log(data)


 const handleSubmit = (e)=>{
  e.preventDefault();
  
  console.log(data)

  setData(obj)

  

  fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData); // Handle the response data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
 }


  return (
    <div>
    <div className="container1">
        <div id="box">
            <h2>Create an account</h2>
            <form id="form" onSubmit={handleSubmit}>
                <label for="name">Full Name</label>
                <input required type="text" placeholder="Enter your full name" id="first-name" name='fullName' onChange={handleChange} value={data.fullName}/>
                <label for="email">Email</label>
                <input required type="email" placeholder="Enter email" id="email" name="email" onChange={handleChange} value={data.email}/>
                <label for="password">Password</label>
                <input required type="password" placeholder="Enter password" id="password" name='password' onChange={handleChange} value={data.password}/>
                {/* <label for="password">Confirm Password</label>
                <input required type="password" placeholder="Confirm password" id="confirm" name=''/> */}
                <input type="submit" value="Sign Up" id="submit"/>
                </form>
                <h5>Already have an account? <span><p onClick={()=>navigate("/signin")}> Sign In</p></span></h5>
        </div>
    </div>
    </div>
  )
}

export default SignUp