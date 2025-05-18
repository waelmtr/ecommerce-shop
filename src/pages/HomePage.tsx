import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';
import { products  , categories} from '../data/products';
import { useNavigate } from 'react-router-dom';
import About from '../components/About';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div>
      <Hero />
      <Categories 
        categories={categories}
        selectedCategory={null}
        onSelectCategory={handleSelectCategory}
      />
      <Products 
        products={products.slice(0, 4)}
        title="Featured Products"
        description="Explore our carefully curated collection of exceptional products"
      />
      <About />
    </div>
  );
};

export default HomePage;