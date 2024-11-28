import React, { useEffect, useState } from 'react';
import { getEmployee, saveEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';
const Employee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator =useNavigate();
    const {id} =useParams();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error =>{
                console.error(error);
            })
        }

    },[id])


    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function submitemployeedetails(e) {
        e.preventDefault();
        const emp = { firstName, lastName, email };
        console.log(emp)
        if(id){
            updateEmployee(id, emp).then((response)=>{
                console.log(response.data);
                navigator('/save');
            }).catch(error =>{
                console.error(error);
            })
        }
        else{
    
    saveEmployee(emp).then((response) => {
       console.log(response.data);
      navigator("/save")
      
   })
}

}
function pageTitle(){
      if(id){
        return <h1 className='text-center text-primary'>Update Employee</h1>
      }
      else{
        return <h1 className='text-center text-primary'>Add Employee</h1>
      }
}

    return (
        <div className='container pb-5'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {
                   pageTitle()
                    }
                    <form onSubmit={submitemployeedetails}>
                        <div className='form-group md-2'>
                            <label className='form-label'> First Name *:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={handleFirstName}
                                required
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'> Last Name *:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={handleLastName}
                                required
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'> Email *:</label>
                            <input
                                type='email'
                                placeholder='Enter Employee Email Id'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={handleEmail}
                                required
                            />
                        </div>
                        <button className='btn btn-success' onClick={submitemployeedetails}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Employee;
