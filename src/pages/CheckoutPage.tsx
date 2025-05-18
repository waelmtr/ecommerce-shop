import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '../context/CartContext';
import { CustomerInfo, Order } from '../types';
import Checkout from '../components/Checkout';
import OrderConfirmation from '../components/OrderConfirmation';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  const handlePlaceOrder = (customerInfo: CustomerInfo) => {
    const newOrder: Order = {
      id: uuidv4(),
      items: cartItems,
      total: getCartTotal(),
      customerInfo,
      status: 'pending',
      createdAt: new Date()
    };

    setOrder(newOrder);
    setShowConfirmation(true);
    clearCart();
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  return (
    <div className="pt-20">
      <Checkout
        isOpen={!showConfirmation}
        onClose={() => navigate('/cart')}
        onPlaceOrder={handlePlaceOrder}
      />
      
      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        order={order}
      />
    </div>
  );
};

export default CheckoutPage;