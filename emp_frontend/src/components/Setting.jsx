import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    salaryComponents: {
      baseSalary: 50000,
      bonus: 5000,
      deductions: 2000,
    },
    leavePolicies: {
      sickLeave: 10,
      casualLeave: 5,
      earnedLeave: 15,
    },
    companyInfo: {
      name: 'SP IT Soft-Tech',
      address: '123 Street, Hyderabad, IND',
    },
  });

  useEffect(() => {
    // Fetch existing settings (Replace with actual API call)
    const fetchSettings = async () => {
      const response = await fetch('/api/settings');
      const data = await response.json();
      setSettings(data);
    };

    fetchSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [category, field] = name.split('.'); // Nested settings (e.g., salaryComponents.baseSalary)

    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send updated settings to the backend (you can adjust this API call)
    await updateSettings(settings);
    alert('Settings updated successfully!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.settingsTitle} className='text-primary'>Company Settings</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Salary Components Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle} className='text-primary'>Salary Components</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Base Salary</label>
            <input
              type="number"
              name="salaryComponents.baseSalary"
              value={settings.salaryComponents.baseSalary}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Bonus</label>
            <input
              type="number"
              name="salaryComponents.bonus"
              value={settings.salaryComponents.bonus}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Deductions</label>
            <input
              type="number"
              name="salaryComponents.deductions"
              value={settings.salaryComponents.deductions}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Leave Policies Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle} className='text-primary '>Leave Policies</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Sick Leave (days)</label>
            <input
              type="number"
              name="leavePolicies.sickLeave"
              value={settings.leavePolicies.sickLeave}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Casual Leave (days)</label>
            <input
              type="number"
              name="leavePolicies.casualLeave"
              value={settings.leavePolicies.casualLeave}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Earned Leave (days)</label>
            <input
              type="number"
              name="leavePolicies.earnedLeave"
              value={settings.leavePolicies.earnedLeave}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Company Information Section */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle} className='text-primary'>Company Information</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Company Name</label>
            <input
              type="text"
              name="companyInfo.name"
              value={settings.companyInfo.name}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Company Address</label>
            <input
              type="text"
              name="companyInfo.address"
              value={settings.companyInfo.address}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitBtn}>Save Settings</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  settingsTitle: {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#555',
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  },
  submitBtn: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitBtnHover: {
    backgroundColor: '#0056b3',
  },
};

export default Settings;
