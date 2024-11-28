import React from 'react';
import { LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dash = () => {

  
  const data = [
    { name: 'Total Users', activeusers: 4000, pageview: 2400, amt: 2400 },
    { name: 'Active Users', activeusers: 3000, pageview: 1398, amt: 2210 },
    { name: 'Inactive Users', activeusers: 2000, pageview: 9800, amt: 2290 },
    { name: 'Admins', activeusers: 2780, pageview: 3908, amt: 2000 },
    { name: 'Employees', activeusers: 1890, pageview: 4800, amt: 2181 },
    { name: 'Salaries', activeusers: 2390, pageview: 3800, amt: 2500 },
    { name: 'Total Salary (USD)', activeusers: 3490, pageview: 4300, amt: 2100 }
  ];
  
  

  const data2 = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
  ];

  return (
    <>
      <div className="text-center shadow">
        <h1 className="text-primary pt-4 fontsize1">Dashboard</h1>
      </div>

      <div className="container mt-4">
        {/* Row for Dashboard Cards */}
        <div className="row justify-content-around">
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center ">
                <h4 className='text-primary'>Admin</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1 className='text-muted'>10</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Employee</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1 className='text-muted'>53</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4 className='text-primary'>Salary</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Total:</h5>
                  <h1 className='text-muted'>$5000</h1> {/* Replace with dynamic data */}
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Row for the Charts */}
        <div className="row justify-content-between" style={{ marginBottom: '30px' }}>
          <div className="col-12 col-md-6 mb-4" style={{ minHeight: '400px' }}> {/* Ensuring there's space for the chart */}
          <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="activeusers" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="pageview" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
          </div>

          <div className="col-12 col-md-6 mb-4" style={{ minHeight: '400px' }}> {/* Ensuring there's space for the chart */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeusers" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="pageview" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
