import React, { useState } from 'react';

const SupportPage = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [feedbackForm, setFeedbackForm] = useState({ rating: 1, comments: '' });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm({ ...feedbackForm, [name]: value });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    alert("Contact Form Submitted!");
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    alert("Feedback Submitted!");
  };

  // Inline styling for container and spacing
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Space between boxes
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle} className='text-primary'>Help & Support</h2>

      {/* FAQ Box */}
      <div style={boxStyle}>
        <h3 className='text-primary'>Frequently Asked Questions</h3>
        <div style={{ marginBottom: '15px' }}>
          <h4>How do I reset my password?</h4>
          <p>To reset your password, click on 'Forgot Password' at the login page.</p>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h4>How can I update my profile?</h4>
          <p>Go to your profile page and click on 'Edit Profile' to make changes.</p>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <h4>What should I do if I find a bug?</h4>
          <p>Please contact our support team using the contact form below.</p>
        </div>
      </div>

      {/* Contact Support Box */}
      <div style={boxStyle}>
        <h3 className='text-primary text-center'>Contact Support</h3>
        <form onSubmit={handleSubmitContact}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleContactChange}
              placeholder="Enter your name"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleContactChange}
              placeholder="Enter your email"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              placeholder="Type your message here"
              style={{ ...inputStyle, height: '120px' }}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>

      {/* Feedback Box */}
      <div style={boxStyle}>
        <h3 className='text-primary text-center'>Feedback</h3>
        <form onSubmit={handleSubmitFeedback}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="rating">Rating (1-5)</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={feedbackForm.rating}
              onChange={handleFeedbackChange}
              min="1"
              max="5"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="comments">Your Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={feedbackForm.comments}
              onChange={handleFeedbackChange}
              placeholder="Please provide your feedback"
              style={{ ...inputStyle, height: '120px' }}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
