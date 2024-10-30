import { BrowserRouter as Router, Route, Routes,   } from 'react-router-dom';// link to link pages 
import React, { useState } from 'react';
import  './App.css';

//pages
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import UserManagement from './components/UserManagement'; 
import Login from './components/Login';
import wingsImage from './images/wings.png';

const App = () => {
  const style ={
    backgroundImage: `url(${wingsImage})`,
    backgroundSize: 'cover',
    backgroundPosition:'center',
    height: '100vh',
    width: '100%',
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('Dashboard'); // Default view after Login
  
  const [users, setUsers] = useState([]);
  const [Products, setProducts] = useState([]);

  // Handlers for Login
  const handleLogin = () => { 
    setIsLoggedIn(true);
    setCurrentView('Dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('Login');
  };

  // Handlers for navigation
  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} users={users} setUsers={setUsers} />;
  }

  return (
    <Router style={style}>
       
        <header className="app-header">
        {/*<nav>
          WINGS Cafe
        <NavLink to="/">Login</NavLink>
          <NavLink to="Dashboard">Dashboard</NavLink>
        </nav>
        <h1>Wings Cafe Inventory System</h1>
        */}
        <a href='#!' className='logo'>W <span>ings C</span>afe Inventory System </a>
        
      </header>
      <div className="app-container">
      <Routes>
        {/* Define routes to the components */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/UserManagement" element={<UserManagement />} />
      </Routes>
      

      <div className="content">
        

        {currentView === 'Dashboard' && (
          <Dashboard
            totalProducts={Products.length}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}

        {currentView === 'Product' && (
          <Product
            Products={Products}
            setProducts={setProducts}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}

        {currentView === 'UserManagement' && (
          <UserManagement
            users={users}
            setUsers={setUsers}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        )}
         <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px'
          }}>
            <img src="../aa.jpg" alt="Drinks" style={{
              width: '200px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }} />
            <img src="../bb.jpg" alt="Fast Food" style={{
              width: '200px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
