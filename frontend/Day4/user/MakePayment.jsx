import React, { useState } from 'react';

const MakePaymentPage = () => {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission, such as making an API call to process the payment
    console.log('Payment submitted:', { studentId, courseId, totalAmount, modeOfPayment, paymentDate });
    // Reset form fields after submission
    setStudentId('');
    setCourseId('');
    setTotalAmount('');
    setModeOfPayment('');
    setPaymentDate('');
  };

  return (
    <div>
      <h1>Make Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="text"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="modeOfPayment">Mode of Payment:</label>
          <select
            id="modeOfPayment"
            value={modeOfPayment}
            onChange={(e) => setModeOfPayment(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="UPI">UPI</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default MakePaymentPage;
