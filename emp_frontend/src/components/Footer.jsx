import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row text-center text-md-start">

            {/* Column 1: Company Name */}
            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase text-primary" >SP It soft-tech</h5>
              <p>NexTech | Accelerating Progress
              </p>
            </div>

            {/* Column 2: Important Links */}
            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase text-primary">Important Links</h5>
              <ul className="list-unstyled">
                <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/dashboard" className="text-white text-decoration-none">Dashboard</a></li>
                <li><a href="/save" className="text-white text-decoration-none">Employees</a></li>
                <li><a href="/attendance" className="text-white text-decoration-none"> Attendance</a></li>
                <li><a href="/performance" className="text-white text-decoration-none"> Performance</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase text-primary">Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: praveensanjeevraopet9@gmail.com</li>
                <li>Phone: +91 8106197584</li>
                <li>Address: 5-74/29,Mardi, Hyderabad</li>
              </ul>
            </div>

            {/* Column 4: Links */}
            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase text-primary">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-white text-decoration-none">Git</a></li>
                <li><a href="#!" className="text-white text-decoration-none">Github</a></li>
                <li><a href="#!" className="text-white text-decoration-none">linkedIn</a></li>
                <li><a href="#!" className="text-white text-decoration-none">projects</a></li>
              </ul>
            </div>

          </div>
          <p className='text-center'>&copy;2024.All right reserved by praveen sanjeevraopet</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
