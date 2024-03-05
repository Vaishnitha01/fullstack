import React, { useState } from 'react';

const AddCourse = () => {
  // State variables to store form data
  const [courseData, setCourseData] = useState({
    courseName: '',
    description: '',
    duration: '',
    cost: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(courseData);
    // Clear form fields after submission
    setCourseData({
      courseName: '',
      description: '',
      duration: '',
      cost: ''
    });
  };

  return (
    <div>
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input type="text" id="courseName" name="courseName" value={courseData.courseName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={courseData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={courseData.duration} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input type="text" id="cost" name="cost" value={courseData.cost} onChange={handleChange} />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
