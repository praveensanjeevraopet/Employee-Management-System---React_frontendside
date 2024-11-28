import React, { useEffect, useState } from 'react';
import { deleteEmployee, ListEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    // Fetch all employees from the service
    function getAllEmployees() {
        ListEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Add a new employee by navigating to the add page
    function addNewEmployee() {
        navigator("/add-employee");
    }

    // Navigate to the update employee page
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    // Delete employee by ID
    function removeEmployee(id) {
        deleteEmployee(id)
            .then((response) => {
                getAllEmployees();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="d-flex justify-content-center shadow">
                <h1 className="text-primary text-center pt-4 fontsize1"> List of Employee</h1>
            </div>
            <div className="container">
                {/* Button to add new employee */}
                <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
                    Add Employee
                </button>

                {/* Table displaying employee details */}
                <div className="table-responsive">
                    <table className="table table-bordered table-hover border-dark text-center text-capitalize">
                        <thead>
                            <tr className="table-dark table-active text-uppercase text-white">
                                <td><b>Employee Id</b></td>
                                <td><b>Employee First Name</b></td>
                                <td><b>Employee Last Name</b></td>
                                <td><b>Employee Email Id</b></td>
                                <td><b>Update</b></td>
                                <td><b>Delete</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => updateEmployee(employee.id)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeEmployee(employee.id)}
                                        >
                                            Delete
                                        </button>
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

export default ListEmployee;
