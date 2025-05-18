import React from 'react';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Order } from '../types';
import { formatPrice } from '../utils/format';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      
      {/* Confirmation modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto p-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Your Order!</h2>
            <p className="text-gray-600">
              Your order has been received and is now being processed.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">Order #:</span>
                <span className="text-gray-700">{order.id.slice(0, 8).toUpperCase()}</span>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {order.status}
              </span>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-4">
              <h3 className="font-medium text-lg mb-3">Order Summary</h3>
              <ul className="divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <li key={index} className="py-3 flex justify-between">
                    <div>
                      <span className="font-medium text-sm mr-2">{item.quantity}x</span>
                      <span className="text-gray-700">{item.product.name}</span>
                    </div>
                    <span className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">{formatPrice(order.total)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Package className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className="font-medium">Shipping Details</h3>
              </div>
              <address className="text-sm text-gray-600 not-italic">
                <p>{order.customerInfo.name}</p>
                <p>{order.customerInfo.address}</p>
                <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
                <p>{order.customerInfo.country}</p>
              </address>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Home className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className="font-medium">Estimated Delivery</h3>
              </div>
              <p className="text-sm text-gray-600">
                Your order will be delivered within 5-7 business days.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                A confirmation email has been sent to: <span className="font-medium">{order.customerInfo.email}</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;