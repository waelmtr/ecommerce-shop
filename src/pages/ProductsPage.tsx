import React, { useState } from 'react';
import Products from '../components/Products';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        
        <Products
          products={filteredProducts}
          title="All Products"
          description="Browse through our complete collection of high-quality products"
        />
      </div>
    </div>
  );
};

export default ProductsPage;