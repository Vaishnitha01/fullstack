import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
// import Home from './Home'
import Footer from './Footer'
// import Account from './Account'
const UserLayout = ({children}) => {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
      <header>
        
        <Navbar/>
      </header>
      
      <main>
        {children}
        
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

UserLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default UserLayout
