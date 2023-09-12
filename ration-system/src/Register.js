import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="mainbody">
        <div className='bigbox'>
            <h1>Rationary</h1>
            <input className='inputbox' placeholder='Enter your Name'></input>
            <input className='inputbox' type='number' placeholder='Enter your Phone Number'></input>
            <input className='inputbox' type='number' placeholder='Enter your Adhaar No.'></input>
            <input className='inputbox' type='password' placeholder='Enter your password'></input>
            <input className='inputbox' type='password' placeholder='Confirm your password'></input>
            <button className='button'>Submit</button>
            <span className='span'> Already have an account ? <a href='http://localhost:3000/login'>Login here</a> </span>
        </div>
    </div>
  )
}

export default Register;