import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Cart panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full sm:w-96 bg-white shadow-xl flex flex-col h-full`}>
          {/* Cart header */}
          <div className="px-4 py-6 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button 
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Cart body */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
                <button 
                  className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                  onClick={onClose}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.product.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                        <p className="text-sm text-gray-500">{formatPrice(item.product.price)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          className="p-1 rounded-full hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4 text-gray-500" />
                        </button>
                        <span className="text-gray-700 w-6 text-center">{item.quantity}</span>
                        <button 
                          className="p-1 rounded-full hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                      <button 
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Cart footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex justify-between mb-4">
                <span className="text-base font-medium text-gray-900">Subtotal</span>
                <span className="text-base font-medium text-gray-900">{formatPrice(getCartTotal())}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
              <button 
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 flex items-center justify-center space-x-2 transition-colors"
                onClick={onCheckout}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;