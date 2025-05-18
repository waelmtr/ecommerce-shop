import { User, LoginCredentials, RegisterData } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user storage
const USERS_KEY = 'elegant_store_users';
const getStoredUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const storeUser = (user: User) => {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const login = async (credentials: LoginCredentials): Promise<User> => {
  await delay(1000); // Simulate API call

  const users = getStoredUsers();
  const user = users.find(u => u.email === credentials.email);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // In a real app, we would hash the password and compare it properly
  return user;
};

export const register = async (data: RegisterData): Promise<User> => {
  await delay(1000); // Simulate API call

  const users = getStoredUsers();
  if (users.some(u => u.email === data.email)) {
    throw new Error('Email already exists');
  }

  const newUser: User = {
    id: uuidv4(),
    email: data.email,
    name: data.name
  };

  storeUser(newUser);
  return newUser;
};

export const logout = async (): Promise<void> => {
  await delay(500); // Simulate API call
};