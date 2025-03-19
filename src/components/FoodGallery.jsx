import React from 'react';
import FoodCard from './FoodCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodGallery = () => {
  const topSectionItems = [
    {
      id: 1,
      name: "Italian Mozzarella Bowl",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Spicy Basil Shrimp",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Roasted Bowl",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const featuredItems = [
    {
      id: 4,
      name: "Crispy Salmon Bowl",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Steak Bowl",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Vegan Protein Bowl",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Buffalo Chicken Bowl",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Based on your search</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSectionItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Featured Items Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default FoodGallery; 