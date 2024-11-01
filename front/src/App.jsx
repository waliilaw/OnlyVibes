import React from 'react';
import { Home } from './Pages/Home';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;