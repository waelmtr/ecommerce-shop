import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';
import { getProductsByCategory, getCategoryById } from '../data/products';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId) : null;
  const products = categoryId ? getProductsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="relative h-64 mb-8">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-lg">{category.description}</p>
          </div>
        </div>
      </div>
      
      <Products
        products={products}
        title={`${category.name} Products`}
        description={`Explore our collection of ${category.name.toLowerCase()}`}
      />
    </div>
  );
};

export default CategoryPage;