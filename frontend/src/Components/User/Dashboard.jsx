import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="box">
                <a href='/view-courses'>
                <h2>View Courses</h2>
                </a>
                {/* Add any content related to viewing courses */}
            </div>
            <div className="box">
                <a href='/add-enquiry'>
                <h2>Add Enquiry</h2>
                </a>
                {/* Add any content related to adding enquiries */}
            </div>
            <div className="box">
                <a href='/view-enquiry'>
                <h2>View Enquiry</h2>
                </a>
                {/* Add any content related to viewing enquiries */}
            </div>
        </div>
    );
}

export default Dashboard;
