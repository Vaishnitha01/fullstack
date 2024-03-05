import React, { useState } from 'react';

const AddEnquiryPage = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission, such as making an API call
    console.log('Form submitted:', { courseName, description, email, enquiryType });
    // Reset form fields after submission
    setCourseName('');
    setDescription('');
    setEmail('');
    setEnquiryType('');
  };

  return (
    <div>
      <h1>Add Enquiry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="enquiryType">Enquiry Type:</label>
          <select
            id="enquiryType"
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="Course Content">Course Content</option>
            <option value="Registration">Registration</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEnquiryPage;
