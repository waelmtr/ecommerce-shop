import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, ShoppingBag, Heart, Settings } from 'lucide-react';

const AccountPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 px-6 py-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
                  <User className="w-10 h-10 text-emerald-600" />
                </div>
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-emerald-100">{user.email}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <ShoppingBag className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Orders</h3>
                  <p className="text-gray-600 text-sm">View your order history</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Wishlist</h3>
                  <p className="text-gray-600 text-sm">Products you've saved</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Settings className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Settings</h3>
                  <p className="text-gray-600 text-sm">Manage your account</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;