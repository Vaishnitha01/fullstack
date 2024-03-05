import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountPage from './AccountPage';
import CoursePage from './CoursePage';
import EnquiryPage from './EnquiryPage';

function Layout() {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Initialize selectedMenuItem with null

  const sidebarStyle = {
    height: '100%',
    width: '250px',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#333',
    paddingTop: '20px',
  };

  const linkStyle = {
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: '18px',
    color: '#fff',
    display: 'block',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  };

  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    position: 'sticky',
    top: '0',
    width: '100%',
    zIndex: '100',
  };

  const logoStyle = {
    marginRight: 'auto',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const supportButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#555',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const mainContentStyle = { padding: '20px' }; // Styles for the main content area

  const handleMenuItemClick = (menuItem) => {
    if (menuItem === 'Logout') {
      navigate('/nav');
    } else {
      setSelectedMenuItem(menuItem);
    }
  };

  const PlaceholderImage = () => (
    <img src="/src/Images/vbg.jpg" alt="Placeholder" style={{ width: '100%', borderRadius: '8px' }} />
  );

  return (
    <div>
      <div style={sidebarStyle}>
        <a href="#" style={linkStyle} onClick={() => handleMenuItemClick('Account')}>Account</a>
        <a href="#" style={linkStyle} onClick={() => handleMenuItemClick('Courses')}>Courses</a>
        <a href="#" style={linkStyle} onClick={() => handleMenuItemClick('Enquiry')}>Enquiry</a>
        <a href="#" style={linkStyle} onClick={() => handleMenuItemClick('Logout')}>Logout</a>
      </div>
      <div style={{ marginLeft: '250px' }}>
        <div style={navbarStyle}>
          <div>
            <a href="#" style={logoStyle}>Your Logo</a>
          </div>
          <a href="#" style={supportButtonStyle}>Support</a>
        </div>
        <div style={mainContentStyle}>
          {/* Conditional rendering based on selected menu item */}
          {selectedMenuItem === null ? (
            <PlaceholderImage /> // Show placeholder image if no menu item is selected
          ) : (
            <>
              {selectedMenuItem === 'Account' && <AccountPage />}
              {selectedMenuItem === 'Courses' && <CoursePage />}
              {selectedMenuItem === 'Enquiry' && <EnquiryPage />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
