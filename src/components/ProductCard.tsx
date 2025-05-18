import React from 'react';
import { PlusCircle, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.product.id === product.id);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600">{formatPrice(product.price)}</span>
          
          <button
            className={`
              flex items-center justify-center rounded-full px-4 py-2
              transition-all duration-300 transform font-medium text-sm
              ${isInCart 
                ? 'bg-green-100 text-green-700' 
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 hover:-translate-y-1'
              }
            `}
            onClick={() => !isInCart && addToCart(product)}
            disabled={isInCart}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 mr-2" /> Added
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4 mr-2" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;