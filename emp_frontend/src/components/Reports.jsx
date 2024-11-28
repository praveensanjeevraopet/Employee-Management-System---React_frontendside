
import React, { useState } from 'react';


const sectionDescriptions = {
    monthlyReports: {
      heading: "Monthly Reports",
      description: "This section provides a detailed report of your organization's performance on a monthly basis. You can generate reports that include sales figures, employee performance, financial summaries, and more."
    },
    performanceReports: {
      heading: "Performance Reports",
      description: "Performance Reports focus on evaluating the output and efficiency of your teams or individual employees. This includes KPIs (Key Performance Indicators), productivity metrics, and other performance-related data."
    },
    createForm: {
      heading: "Create Form",
      description: "The 'Create Form' section allows you to design custom forms for collecting data from employees, customers, or stakeholders. You can create surveys, feedback forms, data entry forms, or any other type of form that meets your data collection needs."
    },
    submitData: {
      heading: "Submit Data",
      description: "In this section, users can submit data to be processed and stored. Whether it’s employee feedback, customer surveys, or financial information, you can fill out forms and submit them for analysis or reporting."
    },
    dataTables: {
      heading: "Data Tables",
      description: "Here you can view and manage large datasets in a tabular format. This section allows you to filter, sort, and manipulate data entries easily. You can update records, remove outdated information, or add new entries, all in real-time."
    },
    manageData: {
      heading: "Manage Data",
      description: "The Manage Data section is where administrators can review, edit, and update any data records within the system. Whether you're updating employee information, adjusting sales figures, or correcting erroneous entries, this section provides you with full control over the data."
    }
  };

export const Reports = () => {
    const [selectedSection, setSelectedSection] = useState('monthlyReports');

  // Function to handle section selection
  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  // Retrieve the current section's content
  const currentSection = sectionDescriptions[selectedSection];




  return (
  
  
  <div style={styles.container}>
      <h1 className='text-primary'>Reporting and Data Management</h1>

      {/* Section selection buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={() => handleSelectSection('monthlyReports')} style={styles.button}>Monthly Reports</button>
        <button onClick={() => handleSelectSection('performanceReports')} style={styles.button}>Performance Reports</button>
        <button onClick={() => handleSelectSection('createForm')} style={styles.button}>Create Form</button>
        <button onClick={() => handleSelectSection('submitData')} style={styles.button}>Submit Data</button>
        <button onClick={() => handleSelectSection('dataTables')} style={styles.button}>Data Tables</button>
        <button onClick={() => handleSelectSection('manageData')} style={styles.button}>Manage Data</button>
      </div>

      {/* Section content display */}
      <div style={styles.content}>
        <h3>{currentSection.heading}</h3>
        <p>{currentSection.description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    marginBottom: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
  content: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }
};
  

export default Reports;