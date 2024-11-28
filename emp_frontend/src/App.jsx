// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import './App.css';
import Employee from './components/Employee';
import Register from './components/Register';
import Start from './components/Start';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout'; // Single Layout component
import Attendance from './components/Attendance';
import Performance from './components/Performance';
import About from './components/About';
import GetStartedSection from './components/GetStartedSection';
import LeaveForm from './components/LeaveForm';
import Settings from './components/Setting';
import SupportPage from './components/SupportPage';
import Calendar from './components/Calender';
import Reports from './components/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Start - No Header and Footer */}
        <Route path="/" element={<Start />} />

        {/* Route for Home - Header only, No Footer */}
        <Route path="/home" element={<Layout showFooter={false}><Home /></Layout>} />

        {/* All other routes use Layout with Footer */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/listemployee" element={<Layout><ListEmployee /></Layout>} />
        <Route path="/save" element={<Layout><ListEmployee /></Layout>} />
        <Route path="/add-employee" element={<Layout><Employee /></Layout>} />
        <Route path="/edit-employee/:id" element={<Layout><Employee /></Layout>} />
        <Route path="/attendance" element={<Layout><Attendance /></Layout>} />
        <Route path="/performance" element={<Layout><Performance /></Layout>} />
        <Route path="/leaveform" element={<Layout><LeaveForm></LeaveForm></Layout>} />
        <Route path="/setting" element={<Layout><Settings></Settings></Layout>} />
        <Route path="/login" element={<Layout><Register /></Layout>} />
        <Route path="/supportpage" element={<Layout><SupportPage></SupportPage></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/getstarted" element={<Layout><GetStartedSection /></Layout>} />
        <Route path="/calender" element={<Layout><Calendar></Calendar></Layout>} />
        <Route path="/reports" element={<Layout><Reports></Reports></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
