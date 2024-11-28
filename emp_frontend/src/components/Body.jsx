import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';


const Body = () => {
    const backgroundStyle = {
        backgroundImage: 'url(empsbg.png)',
        backgroundSize: 'cover', // Makes the image cover the entire area
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Full height of the viewport
        width: '100%', // Full width
      };
    
      return (<>
     
        
        <div style={backgroundStyle}>
        
        
        <Container className='pt-2'>
      <Row>
        <Col className='text-center  sm={12} md={12} lg={12}'>
        <h4 className='text-lg text-white heading1' >Welcome to Your Employee Management Hub</h4>
        <h2 className='heading2'>Innovative Solutions for Modern Workplaces</h2>
       <p className='text-white heading3'> Coming together is a beginning, staying together is progress, and working together is success.Teamwork is the fuel that allows common people to attain uncommon results.An Employee Management System (EMS) is a digital platform designed to streamline HR processes and improve organizational efficiency. 
       
       </p>
       <button className='btn btn-primary'> Let's Get Started</button><br></br><br></br>
       <button className='btn btn-primary'> Learn More</button>

        </Col>

        <Col className='sm={12} md={12} lg={12}'>

       <center>
        <h1 className='heading6'>________________________________________</h1>
        <Carousel>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 "
          src="teamwork1.png"
          alt="First slide"
        />
        
        <Carousel.Caption className=''>
          <h3>Team Work</h3>
          <p>Teamwork is the fuel that allows common people to attain uncommon results</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
          className="d-block w-100"
         src="track2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Login-in/Login-out</h3>
          <p> Tools for goal setting and conducting performance reviews.

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 "
         src="attendance2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Attendance Tracking</h3>
          <p>
          Allowing employees to log their working hours accurately
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100 "
          src="database.png"
          alt="First slide"
        />
        <Carousel.Caption className=''>
          <h3>Employee Database</h3>
          <p>A centralized repository for storing employee records and contact information.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 "
         src="dashboard2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Performance Management</h3>
          <p>
          Tools for goal setting and conducting performance reviews.


          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
       src="mobileaccess1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mobile Accessibility</h3>
          <p>
          A mobile-friendly interface for accessing the system anytime, anywhere.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Carousel.Item>
      <img
          className="d-block w-100"
       src="mobileaccess1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mobile Accessibility</h3>
          <p>
          A mobile-friendly interface for accessing the system anytime, anywhere.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
       src="review1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Feedback and Surveys</h3>
          <p>
          Tools for conducting surveys and gathering employee feedback for improvement.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
   
    </center>
        </Col>
      </Row>
      
    </Container>

    </div>
        
        </>);
}
export default Body