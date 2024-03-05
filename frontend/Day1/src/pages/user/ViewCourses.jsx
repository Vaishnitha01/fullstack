import React, { useState, useEffect } from 'react';

const ViewCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  // Fetch courses data from API
  useEffect(() => {
    // Your API call to fetch courses data would go here
    // For demonstration, I'm using dummy data
    const dummyCourses = [
      { id: 1, name: 'BEC Foundation', description: 'Basic English certification', duration: '6 weeks', cost: '$100' },
      { id: 2, name: 'BEC Intermediate', description: 'Intermediate English certification', duration: '8 weeks', cost: '$150' },
      { id: 3, name: 'BEC Advanced', description: 'Advanced English certification', duration: '10 weeks', cost: '$200' }
    ];

    setCourses(dummyCourses);
  }, []);

  return (
    <div>
      <h1>View Courses</h1>
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
                  <button>Make Payment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCoursesPage;
