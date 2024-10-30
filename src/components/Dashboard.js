import React from 'react';
import './Dashboard.css';
import backgroundImage from '../images/e-shop.png';

const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};


const Dashboard = ({ totalProducts, onNavigate, onLogout }) => {
  return (
    <div  style={containerStyle}>
    <div
      className="Dashboard-container"
      
    >
      
      <div className="Dashboard-header" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '5px' }}>
        <div>
        <h2>Dashboard</h2>
      </div>
      <div className="Dashboard-content" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '5px' }}>
        <p className="Dashboard-total">Total Products: {totalProducts}</p>
        <div className="Dashboard-buttons">
          <button className="btn" onClick={() => onNavigate('Product')}>
            Product Management
          </button>
          <button className="btn" onClick={() => onNavigate('UserManagement')}>
            User Management
          </button>
          <button className="btn logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
