import React from 'react';
import './ADashboard.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const ADashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="box">
                <a href='/view-courses'>
                <h2>View Courses</h2>
                </a>
                {/* Add any content related to viewing courses */}
            </div>
            <div className="box">
                <a href='/add-course'>
                <h2>Add Courses</h2>
                </a>
                {/* Add any content related to viewing courses */}
            </div>
            
            <div className="box">
                <Link to="/view-enquiry">
                <h2>View Enquiry</h2>
                </Link>
                {/* Add any content related to viewing enquiries */}
            </div>
            <div className="box">
                <Link to="/view-payments">
                <h2>View Payments</h2>
                </Link>
                {/* Add any content related to viewing enquiries */}
            </div>
        </div>
    );
}

export default ADashboard;
