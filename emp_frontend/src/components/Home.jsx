import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';
import Footer from './Footer';
import ListEmployee from './ListEmployee';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Performance from './Performance';
import { Link } from 'react-router-dom';

const Home = () => {

    const backgroundStyle = {
        backgroundImage: 'url(empsbg.png)',
        backgroundSize: 'cover', // Makes the image cover the entire area
        backgroundPosition: 'center', // Centers the image
        height: '83vh', // Full height of the viewport
        width: '100%', // Full width
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensures footer is pushed down if content is short
    };


    return (
        <>
            <div style={backgroundStyle}>
                {/* The content is wrapped in a flex container */}
                <div style={{ flexGrow: 1 }}>
                    {/* Header goes here */}
                   

                    {/* Main Body Content */}
                    <Container className="pt-5">
                        <Row className="justify-content-center">
                            <Col sm={12} md={12} lg={6} className="text-center">
                                 <h4 className="text-white mt-5">Welcome to Your Employee Management Hub</h4>
                                <h2 className=" text-white display-4 font-weight-bold" >Innovative Solutions for Modern Workplaces</h2>
                                <p className="text-white mb-4">
                                    "Coming together is a beginning, staying together is progress, and working together is success. 
                                    "
                                </p>
                                <Link to="/getstarted">
                                    <button className="btn btn-primary mb-3">Let's Get Started</button>
                                </Link>
                                <br />
                                <Link to="/about">
                                    <button className="btn text-white " style={{background: '#f39c12'}}>Learn More</button>
                                </Link> 
                            </Col>

                            <Col sm={12} md={12} lg={6}>
                                <center>
                                    <h1 className="heading6">______________________</h1>
                                    <Carousel>
                                        <Carousel.Item interval={1000}>
                                            <img className="d-block w-100" src="teamwork1.png" alt="First slide" />
                                            <Carousel.Caption>
                                                <h3>Team Work</h3>
                                                <p>Teamwork is the fuel that allows common people to attain uncommon results.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img className="d-block w-100" src="track2.png" alt="Second slide" />
                                            <Carousel.Caption>
                                                <h3>Login-in/Login-out</h3>
                                                <p>Tools for goal setting and conducting performance reviews.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src="attendance2.png" alt="Third slide" />
                                            <Carousel.Caption>
                                                <h3>Attendance Tracking</h3>
                                                <p>Allowing employees to log their working hours accurately.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </center>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* Components for Dashboard, List of Employees, and Attendance */}
                    <Dashboard />
                    <br></br>
                    <ListEmployee />
                    <br></br>
                    <Attendance />
                    <br></br>
                    <Performance></Performance>
                    
                    {/* Footer goes here */}
                    <Footer />
                    
                </div>
            </div>
        </>
    );
}

export default Home;

