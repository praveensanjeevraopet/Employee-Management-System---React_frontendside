import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export const About = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Main Container */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h2>Employee Management System (EMS)</h2>
              <p className="lead">A Tool for Efficient Employee Management</p>
            </Card.Header>
            <Card.Body>
              <h3 className="text-primary">About the EMS</h3>
              <p className="text-muted">
                An Employee Management System (EMS) is a tool used by businesses to manage employee data. This system
                allows HR managers or admin users to maintain employee records, track attendance, manage payroll, and
                assess performance. It provides an interface for tracking employee activities, assigning tasks, and
                monitoring overall productivity.
              </p>

              {/* Key Features */}
              <h4 className="mt-4 text-primary">Key Features:</h4>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Add Employees:</strong> Add new employee records with personal and job details.</ListGroup.Item>
                <ListGroup.Item><strong>Employee List:</strong> View all employees in a list, with options to edit or delete records.</ListGroup.Item>
                <ListGroup.Item><strong>Attendance Tracking:</strong> Keep track of employee attendance for better time management.</ListGroup.Item>
                <ListGroup.Item><strong>Performance Tracking:</strong> Evaluate employee performance based on tasks and projects completed.</ListGroup.Item>
                <ListGroup.Item><strong>Payroll Management:</strong> Automate salary calculations based on attendance and task performance.</ListGroup.Item>
              </ListGroup>

              {/* UI Overview */}
              <h4 className="mt-4 text-primary">UI Overview</h4>
              <p>
                The UI is designed in a very basic structure with HTML forms to add and list employees. The employee form
                contains three input fields: one for the name, one for the position, and one for the salary. The employee list
                displays all employees in a simple unordered list with a delete button next to each entry.
              </p>

              {/* Additional Functionalities */}
              <h4 className="mt-4 text-primary">Additional Functionalities and Enhancements:</h4>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Edit Employee Details:</strong> Allow the admin to edit employee information.</ListGroup.Item>
                <ListGroup.Item><strong>Attendance Tracking:</strong> Track attendance, log in and out each day, and store data for payroll calculations.</ListGroup.Item>
                <ListGroup.Item><strong>Employee Performance:</strong> Rate employees based on tasks completed and performance (e.g., star-rating system).</ListGroup.Item>
                <ListGroup.Item><strong>Payroll System:</strong> Automate payroll calculations based on attendance and completed tasks.</ListGroup.Item>
                <ListGroup.Item><strong>Authentication System:</strong> Introduce authentication for authorized users (HR/Admin) to manage employee data.</ListGroup.Item>
              </ListGroup>

              {/* Conclusion */}
              <h4 className="mt-4 text-primary">Conclusion</h4>
              <p>
                This Employee Management System (EMS) offers a basic platform for managing employee data, but it can be expanded
                with more features such as task management, attendance, performance tracking, and payroll systems. It's a great
                starting point for learning how to store and manage data in modern web applications.
              </p>
              <p>
                By using ReactJS and React hooks, this application is responsive, easy to manage, and scalable. It can be enhanced
                by integrating a backend API to persist employee data instead of storing it in memory.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
