import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TableViewIcon from '@mui/icons-material/TableView';
import DescriptionIcon from '@mui/icons-material/Description';
import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import CallIcon from '@mui/icons-material/Call';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {
   
  
    const navigator =useNavigate();
 
   function loginEmployee(){
    navigator("/login")

   }

  return (
    <>
      {/* First Navbar */}
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary navbar-hover">
       <div className='container-fluid'>
          <Navbar.Brand href="#" className='text-primary'><b>EMS</b></Navbar.Brand>
           
          <button className='btn btn-white rounded-5 p-0  d-md-none '> <AccountCircleIcon className='fs-1'></AccountCircleIcon></button>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 fs-6 mr-5" >
                <Nav.Link href="/home"><HomeIcon className='text-primary'></HomeIcon>Home</Nav.Link>
                <Nav.Link href="/dashboard"><SpaceDashboardIcon className='text-primary'></SpaceDashboardIcon>Dashboard</Nav.Link>

                <Nav.Link href="/listemployee">< GroupsIcon className='text-primary'></GroupsIcon>Employees</Nav.Link>

                <Nav.Link href="/attendance" ><HowToRegIcon className='text-primary'></HowToRegIcon>Attendance</Nav.Link>
                <Nav.Link href="/performance" ><BarChartIcon className='text-primary'></BarChartIcon>Performance</Nav.Link>
                
              

 

                

                {/* <Nav.Link href="/about"><PersonIcon></PersonIcon>About</Nav.Link>
                <Nav.Link href="/contact"><  PhoneIcon></PhoneIcon>Contacts</Nav.Link>
                <Nav.Link href="#action4">< GroupsIcon></GroupsIcon>Employees</Nav.Link>
                <NavDropdown title="Projects done" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            <button className='btn btn-white rounded-5 p-0'> <CircleNotificationsIcon className='fs-3'></CircleNotificationsIcon></button>
            <Nav>
             

            <div className='btn btn-white rounded-5 p-0'> <AccountCircleIcon className='fs-1'></AccountCircleIcon></div>
            </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          </div>
      </Navbar>

      {/* Second Navbar */}
      <Navbar data-bs-theme="dark" expand="false" className='navbgcolor bg-body-tertiary shadow'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
    <Navbar.Toggle aria-controls="offcanvasNavbar2" />
    
    <h1 className='text-center text-pink flex-grow-1 ' style={{ margin: '0', padding: '0 40px' }}>
      Employee Management System
    </h1>
    
    
    <Navbar.Brand href="/" className="ms-auto d-none d-md-block">
      <button className="btn btn-primary">Logout</button>
    </Navbar.Brand>
      
          <Navbar.Offcanvas
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbarLabel2"
            placement="start"
            style={{ marginTop: '55px', height: '600px',width:'300px' }}
          >
            <Offcanvas.Header closeButton className='bg-primary'>
              <Offcanvas.Title id="offcanvasNavbarLabel2" className='text-white'><b>Praveen Sanjeevraopet</b></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 fs-5 navbar-hover">
              <Nav.Link href="/home"><HomeIcon className='text-primary'></HomeIcon><b>Home</b></Nav.Link>
              <Nav.Link href="/dashboard"><SpaceDashboardIcon className='text-primary'></SpaceDashboardIcon><strong>Dashboard</strong></Nav.Link>

              <Nav.Link href="/listemployee">< GroupsIcon className='text-primary'></GroupsIcon><b>Employees</b></Nav.Link>
           
               <Nav.Link href="/attendance" ><HowToRegIcon className='text-primary'></HowToRegIcon><b>Attendance</b></Nav.Link>
               <Nav.Link href="/performance" ><BarChartIcon className='text-primary'></BarChartIcon><b>Performance</b></Nav.Link>
               <Nav.Link href="/leaveform" >< BorderColorIcon className='text-primary'></BorderColorIcon><b>LeaveManagement</b></Nav.Link>
                {/* <Nav.Link href="/about">Layouts</Nav.Link>
                <Nav.Link href="/contact">widgets</Nav.Link>
                <Nav.Link href="#action4"></Nav.Link> */}
                <NavDropdown  title={<><AspectRatioIcon className='text-primary'></AspectRatioIcon><b>Layouts</b> </>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5"><ScreenshotIcon className='text-primary'></ScreenshotIcon>Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<><PlagiarismIcon className='text-primary'></PlagiarismIcon><b>Payroll</b></>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Payroll Overview</NavDropdown.Item>
                  <NavDropdown.Item href="#action6"> Generate Payslips</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Salary Management</NavDropdown.Item>
                </NavDropdown>


               
                <Nav.Link href="/reports" ><ReportIcon className='text-primary'></ReportIcon><b>Reports</b></Nav.Link>

                <NavDropdown title={<><SettingsIcon className='text-primary'></SettingsIcon><b>Settings</b></>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="/setting">company setting</NavDropdown.Item>
                  <NavDropdown.Item href="#action6"> System Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Notifications</NavDropdown.Item>
                </NavDropdown>
               

             
                <Nav.Link href="/supportpage" ><CallIcon className='text-primary'></CallIcon><b>Help/Support</b></Nav.Link>

                

                <NavDropdown title={<><BarChartIcon className='text-primary'></BarChartIcon><b>charts</b> </>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<><PsychologyIcon className='text-primary'></PsychologyIcon><b>UI Designs</b> </>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<>< BorderColorIcon className='text-primary'></BorderColorIcon><b>forms</b> </>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<>< TableViewIcon className='text-primary'></TableViewIcon><b>tables</b> </>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<><DescriptionIcon className='text-primary'></DescriptionIcon><b>pages</b> </>}id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<><CopyAllRoundedIcon className='text-primary'></CopyAllRoundedIcon><b>copy </b></>} id="offcanvasNavbarDropdown2">
                  <NavDropdown.Item href="#action5">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              

                <Nav.Link href="/calender" > <CalendarMonthRoundedIcon className='text-primary'></CalendarMonthRoundedIcon><b>Calender</b></Nav.Link>
                <Nav.Link href="/" >< LogoutIcon className='text-primary'></ LogoutIcon><b>Logout</b></Nav.Link>
              </Nav>

        




              
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
          </div>
      </Navbar>
     
    </>
  );
};

export default Header;
