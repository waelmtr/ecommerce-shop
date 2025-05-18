import React, { useState, useEffect , MouseEvent} from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { getCartItemsCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAuthClick = (e : any) => {
    if (user) {
      e.preventDefault();
      navigate('/account');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const openCart = () => {
    navigate('/cart');
  };

  const getProducts = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/products');
  };

  const getCategories = (e : MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/categories');
  }
  
  const getHome = (e : MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
              WaelStore
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a type="button" onClick={(e) => getHome(e)} className="font-medium hover:text-emerald-600 transition-colors cursor-pointer">
              Home
            </a>
            <a type="button" onClick={(e) => getCategories(e)} className="font-medium hover:text-emerald-600 transition-colors">
              Categories
            </a>
            <a type="button" onClick={(e) => getProducts(e)} className="font-medium hover:text-emerald-600 transition-colors">
              Products
            </a>
            <a href="#about" className="font-medium hover:text-emerald-600 transition-colors">
              About
            </a>
          </div>

          {/* Search Bar, Auth & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            
            <button 
              onClick={(e) => handleAuthClick(e)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>{user ? user.name : 'Sign In'}</span>
            </button>

            <button 
              onClick={openCart}
              className="relative p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-6 w-6 text-emerald-600" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={handleAuthClick}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            
            <button 
              onClick={openCart}
              className="relative p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5 text-emerald-600" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-200">
            <a type="button" onClick={(e) => getHome(e)} className="block py-2 px-4 font-medium hover:bg-gray-100 rounded-md">
              Home
            </a>
            <a type="button" onClick={(e) => getCategories(e)} href="#categories" className="block py-2 px-4 font-medium hover:bg-gray-100 rounded-md">
              Categories
            </a>
            <a type="button" onClick={(e) => getProducts(e)} className="block py-2 px-4 font-medium hover:bg-gray-100 rounded-md">
              Products
            </a>
            <a href="#about" className="block py-2 px-4 font-medium hover:bg-gray-100 rounded-md">
              About
            </a>
            <form onSubmit={handleSearch} className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;