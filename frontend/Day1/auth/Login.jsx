import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
const Login = () => {
  
  return (
    <div className='wrapper'>
      <form action='login'>
        <h1 style={{color: 'white'}}>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='Username'required />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password'required />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label style={{color:'white'}}><input type='checkbox'/>Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type='submit'>Sign In</button>
        <div className='register-link'>
          <p>Don't have an account?<a href='/react-app/register'>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login

// // Login.jsx
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Login.css';
// import { FaUser, FaLock } from "react-icons/fa";

// const Login = () => {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
//       console.log('Login successful', storedUser);
//       // Redirect user to the corresponding dashboard based on user type
//       if (storedUser.userType === 'student') {
//         history.push('/student-dashboard');
//       } else if (storedUser.userType === 'admin') {
//         history.push('/admin-dashboard');
//       }
//     } else {
//       console.error('Login failed. Incorrect email or password.');
//       // Display error message to the user
//     }
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1 style={{ color: 'white' }}>Login</h1>
//         <div className='input-box'>
//           <input type='email' name="email" placeholder='Username' required value={formData.email} onChange={handleChange} />
//           <FaUser className='icon' />
//         </div>
//         <div className='input-box'>
//           <input type='password' name="password" placeholder='Password' required value={formData.password} onChange={handleChange} />
//           <FaLock className='icon' />
//         </div>
//         <button type='submit'>Sign In</button>
//         <div className='register-link'>
//           <p>Don't have an account?<a href='/react-app/register'>Register</a></p>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login;
