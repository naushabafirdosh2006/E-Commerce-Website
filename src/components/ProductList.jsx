import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Link to the CSS for styling

// Import images
import laptopImage from '../assets/images/laptop.jpg'; // Adjust the path based on your folder structure
import phoneImage from '../assets/images/phone.jpg'; // Assuming you have these images
import headphonesImage from '../assets/images/headphones.jpg';
import smartwatchImage from '../assets/images/smartwatch.jpg';
import tabletImage from '../assets/images/tablet.jpg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000, image: laptopImage }, // Use the imported image
    { id: 2, name: 'Phone', price: 500, image: phoneImage }, // Use imported image
    { id: 3, name: 'Headphones', price: 200, image: headphonesImage },
    { id: 4, name: 'Smartwatch', price: 250, image: smartwatchImage },
    { id: 5, name: 'Tablet', price: 600, image: tabletImage },
  ];

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
