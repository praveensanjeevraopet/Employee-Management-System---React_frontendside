

import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";


const Start = () => {
    const navigate = useNavigate()
 

  return (
    
    <div className=" vh-100  ">
        <div className="p-2 d-flex justify-content-center shadow bg-primary">
      <h1 className="text-white text-center fontsize1"> Employee Management Syatem</h1>
      </div>
     
        <Register></Register>
        
        {/* <center>
      <div className="p-3 rounded w-25 border loginForm mt-5 ">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button type="button" className="btn btn-primary" onClick={() => {navigate('/employee_login')}}>
            Employee
          </button>
          <button type="button" className="btn btn-success" onClick={() => {navigate('/adminlogin')}}>
            Admin
          </button>
        </div>
      </div>
      </center> */}
    </div>
  );
};

export default Start;
