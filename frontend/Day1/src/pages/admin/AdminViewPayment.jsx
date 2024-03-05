import React, { useState } from 'react';

const AdminViewPayment = () => {
  const [payments, setPayments] = useState([]);

  const handlePayment = (paymentDetails) => {
    // Add payment details to the local state
    setPayments([...payments, paymentDetails]);
  };

  return (
    <div>
      <h1>Payment History</h1>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Student ID</th>
            <th>Status</th>
            <th>Total Amount</th>
            <th>Payment Date</th>
            <th>Mode of Payment</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{payment.studentId}</td>
              <td>{payment.status}</td>
              <td>{payment.totalAmount}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.modeOfPayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewPayment;
