import React from 'react';

// Dummy data
const dummyData = [
  {
    courseName: 'React Crash Course',
    description: 'Interested in learning React basics.',
    email: 'example1@example.com',
    enquiryType: 'Technical Support'
  },
  {
    courseName: 'Node.js Fundamentals',
    description: 'Need help understanding asynchronous programming in Node.js.',
    email: 'example2@example.com',
    enquiryType: 'Sales Inquiry'
  },
  {
    courseName: 'JavaScript Advanced Concepts',
    description: 'Looking for resources on JavaScript closures and prototypes.',
    email: 'example3@example.com',
    enquiryType: 'General Feedback'
  }
];

function ViewEnquiry() {
  const containerStyle = {
    textAlign: 'center'
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginTop:'30px'
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%'
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px'
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Enquiry Details</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Course Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Enquiry Type</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((enquiry, index) => (
            <tr key={index}>
              <td style={tdStyle}>{enquiry.courseName}</td>
              <td style={tdStyle}>{enquiry.description}</td>
              <td style={tdStyle}>{enquiry.email}</td>
              <td style={tdStyle}>{enquiry.enquiryType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEnquiry;
