import React, { useState, useEffect } from "react";
import { ListEmployees, deleteEmployee } from "../services/EmployeeService"; // Assuming there's a deleteEmployee function in your service
import { Button } from "react-bootstrap";

const Attendance = () => {
  // Employee data state
  const [employees, setEmployees] = useState([]);
  
  // Track time for each employee
  const [timeTracking, setTimeTracking] = useState({});

  // Fetch employees on component mount
  useEffect(() => {
    getAllEmployees();
  }, []);

  // Fetch employee list from service
  function getAllEmployees() {
    ListEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }

  // Delete employee handler
  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId)
      .then((response) => {
        // If successful, filter out the employee from the list
        setEmployees(employees.filter(employee => employee.id !== employeeId));
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  // Start time handler for each employee
  const handleStart = (employeeId) => {
    const currentTime = new Date();

    setTimeTracking((prevState) => ({
      ...prevState,
      [employeeId]: {
        ...prevState[employeeId],
        startTime: currentTime,
        endTime: null,  // Reset end time when starting a new session
        totalTime: null // Reset total time when starting a new session
      }
    }));
  };

  // Stop time handler and calculate the total time for the current employee
  const handleStop = (employeeId) => {
    const currentTime = new Date();
    const startTime = timeTracking[employeeId]?.startTime;

    if (startTime) {
      const timeDiff = Math.abs(currentTime - startTime); // in milliseconds

      // Convert milliseconds to hours, minutes, seconds
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      const totalTime = `${hours}:${minutes}:${seconds}`;

      setTimeTracking((prevState) => ({
        ...prevState,
        [employeeId]: {
          ...prevState[employeeId],
          endTime: currentTime,
          totalTime: totalTime
        }
      }));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center shadow">
        <h1 className="text-primary text-center pt-4 fontsize1">Attendance Tracking</h1>
      </div>
      <div className="container mt-4">
        {/* Employee Table */}
        <div className="table-responsive mt-5">
          <table className="table table-bordered table-hover border-dark text-center text-capitalize">
            <thead>
              <tr className="table-dark table-active text-uppercase text-white">
                <th><b>Employee Id</b></th>
                <th><b>Employee Name</b></th>
                <th><b>Login Time</b></th>
                <th><b>Logout Time</b></th>
                <th><b>Total Time</b></th>
                <th><b>Login</b></th>
                <th><b>Logout</b></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName} {employee.lastName}</td>
                  <td>
                    {timeTracking[employee.id]?.startTime ? 
                      timeTracking[employee.id].startTime.toLocaleTimeString() 
                      : "N/A"
                    }
                  </td>
                  <td>
                    {timeTracking[employee.id]?.endTime ? 
                      timeTracking[employee.id].endTime.toLocaleTimeString() 
                      : "N/A"
                    }
                  </td>
                  <td>
                    {timeTracking[employee.id]?.totalTime ? 
                      timeTracking[employee.id].totalTime 
                      : "N/A"
                    }
                  </td>
                  <td>
                    {/* Start button */}
                    <Button
                      variant="success"
                      onClick={() => handleStart(employee.id)}
                      disabled={timeTracking[employee.id]?.startTime && !timeTracking[employee.id]?.endTime} // Disable if already started and not stopped
                    >
                      Login
                    </Button>
                  </td>
                  <td>
                    {/* Stop button */}
                    <Button
                      variant="danger"
                      onClick={() => handleStop(employee.id)}
                      disabled={!timeTracking[employee.id]?.startTime || timeTracking[employee.id]?.endTime} // Disable if no start time or already stopped
                      className="mx-3"
                    >
                      Logout
                    </Button>

                    {/* Delete button */}
                    {/* <Button
                      variant="danger"
                      onClick={() => handleDelete(employee.id)}
                      className="mx-2"
                    >
                      Delete
                    </Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Attendance;
