import React, { useState } from 'react';
import './Product.css';

const Product = ({ Products, setProducts, onNavigate, onLogout }) => {
  const [ProductName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [ProductCategory, setProductCategory] = useState('');
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductQuantity, setProductQuantity] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null); 

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      name: ProductName,
      description: ProductDescription,
      category: ProductCategory,
      price: parseFloat(ProductPrice),
      quantity: parseInt(ProductQuantity),
    };

    if (editingIndex !== null) {
    
      const updatedProducts = [...Products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      
      setProducts([...Products, newProduct]);
    }

    
    setProductName('');
    setProductDescription('');
    setProductCategory('');
    setProductPrice(0);
    setProductQuantity(0);
  };

  const handleEditProduct = (index) => {
    // Load product details into the input fields for editing
    const product = Products[index];
    setProductName(product.name);
    setProductDescription(product.description);
    setProductCategory(product.category);
    setProductPrice(product.price);
    setProductQuantity(product.quantity);
    setEditingIndex(index); 
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...Products];
    updatedProducts.splice(index, 1); 
    setProducts(updatedProducts);
  };

  return (
    <div className="Product-management-container">
      <h2>Product Management</h2>

      <form className="Product-form" onSubmit={handleAddProduct}>
        <div className="form-group">
          <label>Product Name: 
            <input type="text" value={ProductName} onChange={e => setProductName(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Description: 
            <input type="text" value={ProductDescription} onChange={e => setProductDescription(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Category: 
            <input type="text" value={ProductCategory} onChange={e => setProductCategory(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Price: 
            <input type="number" value={ProductPrice} onChange={e => setProductPrice(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>Quantity: 
            <input type="number" value={ProductQuantity} onChange={e => setProductQuantity(e.target.value)} />
          </label>
        </div>
        <button className="btn" type="submit">
          {editingIndex !== null ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h3>Product List</h3>
      {Products.length > 0 ? (
        <table className="Product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((Product, index) => (
              <tr key={index}>
                <td>{Product.name}</td>
                <td>{Product.description}</td>
                <td>{Product.category}</td>
                <td>M{Product.price.toFixed(2)}</td>
                <td>{Product.quantity}</td>
                <td>
                  <button onClick={() => handleEditProduct(index)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Products added yet.</p>
      )}

      <div className="Product-management-buttons">
        <button className="btn" onClick={() => onNavigate('Dashboard')}>Go to Dashboard</button>
        <button className="btn" onClick={() => onNavigate('UserManagement')}>Go to User Management</button>
        <button className="btn logout" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Product;
