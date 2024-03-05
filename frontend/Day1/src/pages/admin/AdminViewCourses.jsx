import React, { useState, useEffect } from 'react';

const AdminViewCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  // Dummy data for demonstration
  const dummyCourses = [
    { id: 1, name: 'BEC Foundation', description: 'Basic English certification', duration: '6 weeks', cost: '$100' },
    { id: 2, name: 'BEC Intermediate', description: 'Intermediate English certification', duration: '8 weeks', cost: '$150' },
    { id: 3, name: 'BEC Advanced', description: 'Advanced English certification', duration: '10 weeks', cost: '$200' }
  ];

  useEffect(() => {
    // Simulating fetching data from an API
    // In a real application, you would fetch data from your backend
    setCourses(dummyCourses);
  }, []);

  const handleEdit = (courseId) => {
    // Logic to handle editing the course
    console.log('Edit course with ID:', courseId);
  };

  const handleDelete = (courseId) => {
    // Logic to handle deleting the course
    console.log('Delete course with ID:', courseId);
  };

  return (
    <div>
      <h1>Admin View Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.cost}</td>
              <td>
                <button onClick={() => handleEdit(course.id)}>Edit</button>
                <button onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewCoursesPage;
