// src/components/Layout.jsx
import React from 'react';
import Header from './Header'; // Import your Header component
import Footer from './Footer'; // Import your Footer component

const Layout = ({ children, showFooter = true }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

export default Layout;
