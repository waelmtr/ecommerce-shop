import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'The latest gadgets and electronics for your everyday needs',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Stylish and comfortable clothing for all occasions',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Beautiful items to make your house a home',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Expand your mind with our collection of books',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation technology and crystal clear sound quality. Perfect for music lovers and professionals alike.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics'
  },
  {
    id: 'p2',
    name: 'Smartphone Pro',
    description: 'The latest smartphone with an incredible camera, powerful processor, and all-day battery life. Stay connected in style.',
    price: 999.99,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics'
  },
  {
    id: 'p3',
    name: 'Slim Fit T-Shirt',
    description: 'Comfortable and stylish slim fit t-shirt made from 100% organic cotton. Available in multiple colors.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'clothing'
  },
  {
    id: 'p4',
    name: 'Designer Jeans',
    description: 'Premium quality designer jeans with perfect fit and timeless style. The essential item for any wardrobe.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'clothing'
  },
  {
    id: 'p5',
    name: 'Ceramic Vase',
    description: 'Handcrafted ceramic vase with unique design. Perfect for displaying your favorite flowers or as a standalone decorative piece.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/5825577/pexels-photo-5825577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'home'
  },
  {
    id: 'p6',
    name: 'Modern Coffee Table',
    description: 'Sleek and stylish modern coffee table made from sustainable materials. The perfect centerpiece for your living room.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'home'
  },
  {
    id: 'p7',
    name: 'Best-selling Novel',
    description: 'The latest best-selling novel that has captivated readers worldwide. An engaging story of adventure and discovery.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'books'
  },
  {
    id: 'p8',
    name: 'Cookbook Collection',
    description: 'A collection of gourmet cookbooks featuring recipes from around the world. Perfect for food enthusiasts and home chefs.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'books'
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};