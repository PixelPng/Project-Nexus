import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h2>Our Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}: {product.description}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

