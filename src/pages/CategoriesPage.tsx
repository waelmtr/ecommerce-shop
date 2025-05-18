import React, { useState } from "react";
import { categories } from "../data/products";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";

const CategoriesPage: React.FC = () => {
    const [searchQuery , setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectCategory = (categoryId: string) => {
        navigate(`/category/${categoryId}`);
    };
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
        
        <Categories
          categories={filteredCategories}
          selectedCategory = {null} 
          onSelectCategory={handleSelectCategory}
        />
      </div>
    </div>
    );
} 

export default CategoriesPage;