import React from 'react';
import { categories } from '../data/products';
import CategoryCard from './CategoryCard';
import { Category } from '../types';

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  categories : Array<Category>
}

const Categories: React.FC<CategoriesProps> = ({categories , selectedCategory , onSelectCategory }) => {
  
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across different categories to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={onSelectCategory}
              isSelected={selectedCategory === category.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;