import React, { useState } from 'react';

const Calendar = () => {
  const years = Array.from({ length: 51 }, (_, index) => 2000 + index); // 2000 to 2050
  
  // Default selected year and month
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 is January
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the starting day of the month (weekday)
  const getStartDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Render the calendar days
  const renderCalendar = () => {
    const totalDays = getDaysInMonth(selectedYear, selectedMonth);
    const startDay = getStartDayOfMonth(selectedYear, selectedMonth);

    let days = [];
    let currentDay = 1;

    // Create padding for the first week
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} style={styles.emptyDay}></div>);
    }

    // Add the actual days of the month
    for (let i = 0; i < totalDays; i++) {
      days.push(
        <div key={i} style={styles.day}>
          {currentDay}
        </div>
      );
      currentDay++;
    }

    return days;
  };

  return (
    <div style={styles.container}>
      <h1 className='text-primary'>Calendar</h1>

      {/* Year Selector */}
      <div style={styles.selectorContainer}>
        <label htmlFor="year" style={styles.label}>Select Year:</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          style={styles.select}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Month Selector */}
      <div style={styles.selectorContainer}>
        <label htmlFor="month" style={styles.label}>Select Month:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          style={styles.select}
        >
          {monthNames.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar Display */}
      <div style={styles.calendar}>
        <h2>{monthNames[selectedMonth]} {selectedYear}</h2>
        
        {/* Days of the week header */}
        <div style={styles.daysOfWeek}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} style={styles.dayHeader}>{day}</div>
          ))}
        </div>

        {/* Days Container */}
        <div style={styles.daysContainer}>
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

// Improved styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#fafafa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  selectorContainer: {
    margin: '10px 0',
    width: '100%',
    textAlign: 'center',
  },
  label: {
    fontSize: '16px',
    marginRight: '10px',
    color: '#555',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    width: '150px',
  },
  calendar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
    textAlign: 'center',
  },
  daysOfWeek: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#666',
  },
  dayHeader: {
    padding: '10px',
  },
  daysContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    textAlign: 'center',
    marginTop: '10px',
  },
  day: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  emptyDay: {
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
  },
};

export default Calendar;
