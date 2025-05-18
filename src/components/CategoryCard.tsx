import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
  isSelected: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isSelected }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform 
        ${isSelected 
          ? 'ring-4 ring-emerald-500 scale-[1.02] shadow-xl' 
          : 'hover:shadow-lg hover:scale-[1.01]'
        }
      `}
      onClick={() => onClick(category.id)}
    >
      <div className="aspect-w-3 aspect-h-2">
        <img 
          src={category.image} 
          alt={category.name} 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{category.name}</h3>
        <p className="text-sm opacity-90">{category.description}</p>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
          Selected
        </div>
      )}
    </div>
  );
};

export default CategoryCard;