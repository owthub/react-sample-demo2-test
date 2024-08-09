import React, { useEffect, useState, useMemo } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once on mount

  const filteredAndSortedProducts = useMemo(() => {
    console.log('Filtering and sorting products');
    let filteredProducts = products;

    // Filter products based on search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredProducts;
  }, [products, searchTerm, sortOrder]); // Dependencies

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      <ul>
        {filteredAndSortedProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
