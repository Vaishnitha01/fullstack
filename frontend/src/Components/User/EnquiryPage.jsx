import React from 'react';

function EnquiryPage() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  };

  const enquiryFormStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '500px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
  };

  const buttonStyle = {
    backgroundColor: '#555',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#333',
  };

  return (
    <div style={containerStyle}>
      <form style={enquiryFormStyle}>
        <h2 style={titleStyle}>Add Enquiry Details</h2>
        <input type="text" placeholder="CourseName" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type='text' placeholder='Enquiry Type' style={inputStyle}/>
        <textarea placeholder="Description" style={textareaStyle}></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default EnquiryPage;
