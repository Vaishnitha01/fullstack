import React, { useState, useEffect } from 'react';

const ViewEnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);

  // Dummy data for demonstration
  const dummyEnquiries = [
    { id: 1, courseName: 'BEC Foundation', description: 'Enquiry regarding course content', email: 'example1@example.com', enquiryType: 'General' },
    { id: 2, courseName: 'BEC Intermediate', description: 'Enquiry about registration process', email: 'example2@example.com', enquiryType: 'Registration' },
    { id: 3, courseName: 'BEC Advanced', description: 'Enquiry about course fee', email: 'example3@example.com', enquiryType: 'General' }
  ];

  useEffect(() => {
    // Simulating fetching data from an API
    // In a real application, you would fetch data from your backend
    setEnquiries(dummyEnquiries);
  }, []);

  return (
    <div>
      <h1>View Enquiries</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Enquiry Type</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map(enquiry => (
            <tr key={enquiry.id}>
              <td>{enquiry.courseName}</td>
              <td>{enquiry.description}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.enquiryType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEnquiriesPage;
