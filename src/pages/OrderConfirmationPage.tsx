import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order #{orderId?.slice(0, 8).toUpperCase()} has been confirmed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
            <div className="text-left space-y-4">
              <p className="flex items-start">
                <span className="inline-block w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full text-center leading-6 mr-3">1</span>
                <span>You'll receive an email confirmation with your order details.</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full text-center leading-6 mr-3">2</span>
                <span>We'll notify you when your order has been shipped.</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full text-center leading-6 mr-3">3</span>
                <span>You can track your order status in your account dashboard.</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;