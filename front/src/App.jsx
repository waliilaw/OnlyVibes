import React, { useState } from 'react';
import './MagicCard.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { ProtectedRoute } from './Pages/ProtectedRoute';

function App() {
  const [activeComponent, setActiveComponent] = useState('home'); // Track active component
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome</h1>
        <div className="button-container">
          <button onClick={() => navigate('./')}>Go to Profile</button>
          <button onClick={() => setActiveComponent('home')}>Go to Home</button>
          <button onClick={() => setActiveComponent('dashboard')}>Go to Dashboard</button>
        </div>
        {/* Render the active component here */}
        {renderComponent()}
      </div>
    </div>
  );
}

// Make sure to wrap your App component with Router in your index.js or main entry file
const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
