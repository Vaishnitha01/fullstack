import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import abc from '../../assets/images/logo.png';
const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
      {/* <ul>
      <img src={abc}  />
      </ul> */}
      <ul>
        <li>
          <h3 style={{color:'white',marginRight:'670px'}}>BEC Enquiry Management System</h3>
        </li>
        <li>
          <Link to="/react-app/user/home">Home</Link>
        </li>
        <li>
          <Link to="/react-app/user/account">Account</Link>
        </li>
        <li><a href='/react-app/login'>Logout</a> 
         </li>
      </ul>
    </nav>
    </div>
    
  );
};

export default Navbar;
// import {Link} from 'react-router-dom'
// import { CgProfile } from "react-icons/cg";
// import './Navbar.css'
// // import './home.css'
// // import abc from "../../assets/images/newlogo.png"
// const Navbar = () => {
//   return (
//     <div>
//         <header>
        
//       <nav>
//         <ul>
//           <li>
//             Home
//           </li>
//           <li>
//             About
//           </li>
//           <li><a href='/react-app/login'>Login / SignUp</a> 
//           </li>
//           <li>
//           <CgProfile style={{ fontSize: '2em' }}/>
//           </li>
//         </ul>
//       </nav>

//         </header>
//     </div>
//   )
// }

// export default Navbar