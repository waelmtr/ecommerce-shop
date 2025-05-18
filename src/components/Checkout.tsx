import React, { useState } from 'react';
import { X, CreditCard, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { CustomerInfo } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onPlaceOrder: (customerInfo: CustomerInfo) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, onPlaceOrder }) => {
  const { cartItems, getCartTotal } = useCart();
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });
  
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof CustomerInfo]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof CustomerInfo, string>> = {};
    let isValid = true;

    // Validate each field
    Object.entries(customerInfo).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key as keyof CustomerInfo] = 'This field is required';
        isValid = false;
      }
    });

    // Email validation
    if (customerInfo.email && !/\S+@\S+\.\S+/.test(customerInfo.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onPlaceOrder(customerInfo);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      
      {/* Checkout modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
            {/* Customer information form */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${formErrors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                  />
                  {formErrors.address && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.address}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${formErrors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {formErrors.city && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {formErrors.zipCode && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.zipCode}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={customerInfo.country}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md ${formErrors.country ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
                    />
                    {formErrors.country && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.country}</p>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4">Payment Information</h3>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <CreditCard className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-700 font-medium">Credit Card</p>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    Payment processing is simulated for this demo. No actual payment will be processed.
                  </p>
                </div>
              </form>
            </div>
            
            {/* Order summary */}
            <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-6">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-gray-200 mb-6">
                    {cartItems.map((item) => (
                      <li key={item.product.id} className="py-3 flex justify-between">
                        <div className="flex items-center">
                          <span className="font-medium text-sm mr-2">{item.quantity}x</span>
                          <span className="text-sm text-gray-700">{item.product.name}</span>
                        </div>
                        <span className="text-sm font-semibold">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(getCartTotal())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">{formatPrice(getCartTotal())}</span>
                    </div>
                  </div>
                </>
              )}
              
              <button 
                className="w-full mt-6 bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;