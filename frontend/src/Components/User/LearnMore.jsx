import React, { useState } from 'react';

const LearnMore = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    totalAmount: '',
    modeOfPayment: '',
    paymentDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' ,marginBottom:'50px',marginTop:'20px'}}>Make Payment</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="studentId">Student ID:</label><br />
          <input type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} style={{ border: '1px solid #ccc', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="courseId">Course ID:</label><br />
          <input type="text" id="courseId" name="courseId" value={formData.courseId} onChange={handleChange} style={{ border: '1px solid #ccc', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="totalAmount">Total Amount:</label><br />
          <input type="text" id="totalAmount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} style={{ border: '1px solid #ccc', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="modeOfPayment">Mode of Payment:</label><br />
          <select id="modeOfPayment" name="modeOfPayment" value={formData.modeOfPayment} onChange={handleChange} style={{ border: '1px solid #ccc', padding: '5px' }}>
            <option value="">Select Mode</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="paymentDate">Payment Date:</label><br />
          <input type="date" id="paymentDate" name="paymentDate" value={formData.paymentDate} onChange={handleChange} style={{ border: '1px solid #ccc', padding: '5px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#e75cf7', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>Generate Payment</button>
      </form>
    </div>
  );
}

export default LearnMore;
