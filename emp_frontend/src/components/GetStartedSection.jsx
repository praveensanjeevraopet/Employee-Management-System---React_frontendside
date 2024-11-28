import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const GetStartedSection = () => {
  return (
    <section style={{ backgroundColor: '#f1f1f1', padding: '50px 0' }}>
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h2 style={{ color: '#007bff', fontSize: '2.5rem', fontWeight: 'bold' }}>
              Ready to Manage Your Employees Like a Pro?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#333', marginTop: '20px' }}>
              It's time to streamline your workforce management with the most efficient, user-friendly Employee
              Management System (EMS) out there.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '20px' }}>
              Our system simplifies employee data management, tracks attendance, automates payroll calculations, 
              and helps you evaluate performance—all in one place. Start using it now to create a more organized 
              and productive workplace.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Whether you're managing a small team or overseeing hundreds of employees, this system will help you 
              take control and save valuable time. Below are a few features you can get started with:
            </p>

            {/* Features List */}
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '20px', fontSize: '1.1rem' }}>
              <li style={{ paddingBottom: '10px' }}>✔ Add and manage employee details easily</li>
              <li style={{ paddingBottom: '10px' }}>✔ Track attendance with a simple login/logout system</li>
              <li style={{ paddingBottom: '10px' }}>✔ Automate payroll calculations based on attendance</li>
              <li style={{ paddingBottom: '10px' }}>✔ Monitor employee performance and productivity</li>
            </ul>

            {/* Button to Get Started */}
            <div style={{ marginTop: '30px' }}>
              <Button
                variant="primary"
                size="lg"
                href="/home" // Link to the dashboard or next step in the system
                style={{
                  padding: '15px 30px',
                  fontSize: '1.2rem',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '5px',
                  boxShadow: '0 4px 10px rgba(0, 123, 255, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Let's Get Started
              </Button>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '20px' }}>
              Click on the button above to access your dashboard and start managing your employees efficiently.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              If you have any questions, feel free to visit the Help Center or reach out to our support team for assistance.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStartedSection;
