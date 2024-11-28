import React, { useState } from 'react';


const LeaveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    leaveType: 'Sick Leave',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.startDate) formErrors.startDate = 'Start date is required';
    if (!formData.endDate) formErrors.endDate = 'End date is required';
    if (!formData.reason) formErrors.reason = 'Reason for leave is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert('Leave request submitted successfully!');
      // You can implement an API call here to save the data
      setFormData({
        name: '',
        leaveType: 'Sick Leave',
        startDate: '',
        endDate: '',
        reason: ''
      });
    }
  };

  return (
    <div className="leave-form-container">
      <h2 className='text-primary'>Leave Management Form</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleInputChange}
          >
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Earned Leave">Earned Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className={errors.startDate ? 'error' : ''}
          />
          {errors.startDate && <span className="error-message">{errors.startDate}</span>}
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className={errors.endDate ? 'error' : ''}
          />
          {errors.endDate && <span className="error-message">{errors.endDate}</span>}
        </div>

        <div className="form-group">
          <label>Reason for Leave</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className={errors.reason ? 'error' : ''}
          ></textarea>
          {errors.reason && <span className="error-message">{errors.reason}</span>}
        </div>

        <button type="submit" className="submit-btn">Submit Leave Request</button>
      </form>
    </div>
  );
};

export default LeaveForm;
