import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 h-[500px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Discover Amazing Products for Every Lifestyle
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Shop the latest trends with our carefully curated collection of high-quality products
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="px-8 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Explore Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;