import React from 'react';
import { Home } from './Pages/Home';
import {Dashboard} from './Pages/Dashboard';
import { Link, BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from './Pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome</h1>
        <NavigateButtons />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
  <Route index element={<Dashboard />} />
</Route>
        </Routes>
      </div>
    </Router>
  );
}

function NavigateButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('./')}>Go to Profile</button>
      <button onClick={() => navigate('/home')}>Go to Home</button>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  );
}

export default App;