import axios from "axios";


const REST_API_BASE_URL ="http://localhost:8080/getAll";

export const ListEmployees = ()=>{
return axios.get(REST_API_BASE_URL);
}

const REST_API_BASE1_URL ="http://localhost:8080/save";
export const saveEmployee = (emp)=>{

    return axios.post(REST_API_BASE1_URL,emp);

}
const REST_API_BASE2_URL ="http://localhost:8080/delete";

export const deleteEmployee = (employeeId)=>{

    return axios.delete(REST_API_BASE2_URL+'/'+employeeId);

}


const REST_API_BASE3_URL ="http://localhost:8080/update";

export const updateEmployee = (employeeId, employee)=>{

    return axios.put(REST_API_BASE3_URL+'/'+employeeId, employee);

}


const REST_API_BASE6_URL ="http://localhost:8080/getone";
export const getEmployee = (employeeId)=>{
return axios.get(`${REST_API_BASE6_URL}/${employeeId}`);
}


const REST_API_BASE7_URL ="http://localhost:8080/getAll";

export const Attendance = ()=>{
return axios.get(REST_API_BASE7_URL);
}
