import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Performance = () => {
  // Pie chart data
  const data5 = [
    { name: 'A', value: 80, color: '#ff0000' },
    { name: 'B', value: 45, color: '#00ff00' },
    { name: 'C', value: 25, color: '#0000ff' },
  ];

  // Bar chart data
  const data = [
    { name: 'projects', uv: 4000, pv: 2400, amt: 2400 },
    { name: ' pending', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'performance', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'leaves', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Teamwork', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Skills', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Project Quality', uv: 3490, pv: 4300, amt: 2100 }
  ];

  
  
const data01 = [
    { name: 'bellow poor', value: 20},
    { name: 'bad', value: 30},
    { name: 'bad', value: 40 },
    { name: 'Normal', value: 60 },
    { name: 'Good', value: 80 },
    { name: 'Exceptinal', value: 100 },
  ];
  const data02 = [
    { name: 'bellow poor', value: 20},
    { name: 'bad', value: 30},
    { name: 'bad', value: 40 },
    { name: 'Normal', value: 60 },
    { name: 'Good', value: 80 },
    { name: 'Exceptinal', value: 100 },
  ];
  

  

  return (
    <>
      <div className=" d-flex justify-content-center shadow">
        <h1 className="text-primary text-center pt-4 fontsize1">Performance</h1>
      </div>
      <div className="container mt-4">
        {/* Row for Dashboard Cards */}
        <div className="row justify-content-around">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Projects completed</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1  className='text-muted'>5</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Tasks Assigned</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1 className='text-muted'>8</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Tasks Completed</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1  className='text-muted'><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /> 5</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Performance</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1  className='text-muted'><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon ></StarBorderIcon></h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Attendance Record</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <b><h5>Total:</h5></b>
                  <h1  className='text-muted'><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Leave Utilization</h4>
                <hr />
                <div className="d-flex justify-content-between">
                 <strong><h5>Total:</h5></strong>
                  <h1  className='text-muted'><StarIcon /><StarIcon /><StarHalfIcon />2</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row for Charts */}
        <div className="row justify-content-between" style={{ marginBottom: '30px' }}>
          <div className="col-12 col-md-6 mb-4" style={{ minHeight: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </ResponsiveContainer>
          </div>

          <div className="col-12 col-md-6 mb-4" style={{ minHeight: '400px' }}>
            <ResponsiveContainer width="80%" height="100%">
              <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
