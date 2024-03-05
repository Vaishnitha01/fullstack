import React from 'react';

function AccountPage() {
  const userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Street, City, Country',
    college: 'ABC University',
    studentID: '123456',
    department: 'Computer Science',
    // Add more user details as needed
  };

  const containerStyle = {
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  };

  const detailsContainerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const detailStyle = {
    marginBottom: '10px',
    fontSize: '18px',
    color: '#333',
  };

  const strongStyle = {
    marginRight: '10px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Account Details</h1>
      <div style={detailsContainerStyle}>
        <div style={detailStyle}>
          <strong style={strongStyle}>Name:</strong> {userDetails.name}
        </div>
        <div style={detailStyle}>
          <strong style={strongStyle}>Email:</strong> {userDetails.email}
        </div>
        <div style={detailStyle}>
          <strong style={strongStyle}>Address:</strong> {userDetails.address}
        </div>
        <div style={detailStyle}>
          <strong style={strongStyle}>College:</strong> {userDetails.college}
        </div>
        <div style={detailStyle}>
          <strong style={strongStyle}>Student ID:</strong> {userDetails.studentID}
        </div>
        <div style={detailStyle}>
          <strong style={strongStyle}>Department:</strong> {userDetails.department}
        </div>
        {/* Add more user details here */}
      </div>
    </div>
  );
}

export default AccountPage;
