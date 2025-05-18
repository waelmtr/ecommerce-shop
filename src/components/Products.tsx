import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductsProps {
  products: Product[];
  title: string;
  description?: string;
}

const Products: React.FC<ProductsProps> = ({ products, title, description }) => {
  if (products.length === 0) {
    return (
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">No products found. Try selecting a different category or search term.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;