import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'A powerful laptop for all your needs.' },
    { id: 2, name: 'Phone', price: 500, description: 'A smartphone with the latest technology.' },
    { id: 3, name: 'Headphones', price: 200, description: 'Noise-cancelling headphones.' },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
