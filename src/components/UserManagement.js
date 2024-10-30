import React, { useState } from 'react';
import './User.css';
import backgroundImage from '../images/pro.png';



const UserManagement = ({ users, setUsers, onNavigate, onLogout }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newRole, setNewRole] = useState('');

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setNewRole(users[index].role);
  };

  const handleSaveRole = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = newRole;
    setUsers(updatedUsers);
    setEditingIndex(null); 
  };
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  

  return (
    <div style={containerStyle}>
      
    <div className="user-management"  style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px' }}>
      
      <h2>User Management</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>
                {editingIndex === index ? (
                  <input 
                    type="text" 
                    value={newRole} 
                    onChange={(e) => setNewRole(e.target.value)} 
                  />
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button onClick={() => handleSaveRole(index)}>Save</button>
                ) : (
                  <button onClick={() => handleEditUser(index)}>Edit Role</button>
                )}
                <button onClick={() => handleDeleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={() => onNavigate('Dashboard')}>Go to Dashboard</button>
      <button onClick={() => onNavigate('Product')}>Go to Product Management</button>
      <button onClick={onLogout}>Logout</button>
    </div>
    </div>
  );
};

export default UserManagement;
