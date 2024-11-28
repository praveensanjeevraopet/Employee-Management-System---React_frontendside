import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

 const Login = () => {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (<>

<h1>welcome to login page</h1>



  
    <Card className='container col-md-6 offset-md-3'style={{ background:""}} > 
         <Card.Header className='text-center bg-black text-white'>LOGIN FORM</Card.Header>
          <Card.Body>
            <Card.Text>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
        
      <Form.Group  as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label >Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
         
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">**</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
     
      
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        
   
    <Card style={{ width: '18rem' }} className='col-sm-2 offset-sm-5 '>
      
      <Card.Body>
        <Card.Title className='text-center bg-black text-white' >REGISTER</Card.Title>
        <Card.Text>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
        
            <Form.Group  as={Col} md="16" controlId="validationCustomUsername">
                <Form.Label >Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="16" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">**</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
     
      
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Login</Button>

 </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        








  </>
    
  );
}
export default Login;