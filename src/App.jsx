import React from 'react';
import CustomerList from './components/CustomerList';
import FoodGallery from './components/FoodGallery';

  function App() {
    return (
      <div className="min-h-screen bg-gray-100">
        <CustomerList />
        <FoodGallery/>
      </div>
    );
  }

export default App;