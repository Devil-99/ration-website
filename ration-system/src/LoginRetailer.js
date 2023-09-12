import {React, useState} from 'react';
import './Login.css';

function LoginRetailer() {

  const [values,setValues] = useState({
    Adhaar:"",
    Password:""
  });

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value});
  }

  const handleSubmit = ()=>{
  if(values.Adhaar==="" && values.Password!=="")
    alert("Please enter Adhaar Number !");
  else if(values.Adhaar!=="" && values.Password==="")
    alert("Please enter Password !");
  else if(values.Adhaar==="" && values.Password==="")
    alert("Please enter Adhaar Number and Password !");
  else
    alert("Login Successful !");
    
    console.log(values);
  }

  return (
    <div className="mainbody1">
      <div className='bigbox1'>
          <h1>Rationary</h1>
          <input className='inputbox1' type='number' placeholder='Enter your Retailer ID' name='Adhaar' onChange={(e)=>{handleChange(e)}} ></input>
          <input className='inputbox1' type='password' placeholder='Enter your password' name='Password' onChange={(e)=>{handleChange(e)}} ></input>
          <button className='button1' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default LoginRetailer;