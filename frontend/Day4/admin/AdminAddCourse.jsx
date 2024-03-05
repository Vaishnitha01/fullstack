import React, { useState } from 'react';

const AddCourseDetailsPage = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission, such as making an API call to add the course details
    console.log('Form submitted:', { courseName, description, duration, cost });
    // Reset form fields after submission
    setCourseName('');
    setDescription('');
    setDuration('');
    setCost('');
  };

  return (
    <div>
      <h1>Add Course Details</h1>
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
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="text"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourseDetailsPage;
