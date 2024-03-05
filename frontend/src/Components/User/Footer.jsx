import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h3>About Us</h3>
        <p>Learn more about our company and mission.</p>
      </div>
      {/* <div style={styles.column}>
        <h3>Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div> */}
      <div style={styles.column}>
        <h3>Contact</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  column: {
    textAlign: 'left',
  },
};

export default Footer;
