import React from 'react'
import './Register.css'
import { FaUser } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
const Register = () => {
  return (
    <div className='wrapper'>
      <form action='login'>
        <h1 style={{color: 'white'}}>Sign Up</h1>
        <div className='input-box'>
          <input type='text' placeholder='First Name' required />
          {/* <FaUser className='icon'/> */}
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Last Name' required />
          {/* <FaUser className='icon'/> */}
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Email'required />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password'required />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          {/* <label style={{color:'white'}}><input type='checkbox'/>Remember me</label>
          <a href="#">Forgot password?</a> */}
        </div>

        <button type='submit'>Register</button>
        <div className='register-link'>
          <p>Already have an account?<a href='/react-app/login'>Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default Register


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Register.css';
// import { FaUser, FaLock } from "react-icons/fa";

// const Register = () => {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     userType: 'student' // Default user type is student
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store registration details in local storage
//     localStorage.setItem('user', JSON.stringify(formData));
//     console.log('Registration successful', formData);
//     // Redirect user to login page or perform other actions upon successful registration
//     history.push('/react-app/login');
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1 style={{ color: 'white' }}>Sign Up</h1>
//         <div className='input-box'>
//           <input type='text' name="firstName" placeholder='First Name' required value={formData.firstName} onChange={handleChange} />
//         </div>
//         <div className='input-box'>
//           <input type='text' name="lastName" placeholder='Last Name' required value={formData.lastName} onChange={handleChange} />
//         </div>
//         <div className='input-box'>
//           <input type='email' name="email" placeholder='Email' required value={formData.email} onChange={handleChange} />
//           <FaUser className='icon' />
//         </div>
//         <div className='input-box'>
//           <input type='password' name="password" placeholder='Password' required value={formData.password} onChange={handleChange} />
//           <FaLock className='icon' />
//         </div>
//         <div className="user-type">
//           <input type="radio" id="student" name="userType" value="student" checked={formData.userType === 'student'} onChange={handleChange} />
//           <label htmlFor="student">Student</label>
//           <input type="radio" id="admin" name="userType" value="admin" checked={formData.userType === 'admin'} onChange={handleChange} />
//           <label htmlFor="admin">Admin</label>
//         </div>
//         <button type='submit'>Register</button>
//         <div className='register-link'>
//           <p>Already have an account?<a href='/react-app/login'>Login</a></p>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Register;
