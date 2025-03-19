import React from 'react';
import { FiEdit2, FiEye, FiMoreVertical } from 'react-icons/fi';

const CustomerCard = ({ customer }) => {
  return (
    <div className="grid grid-cols-12 items-center px-6 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="col-span-5 flex items-center gap-3 border-r border-gray-200 pr-4">
        <img 
          src={customer.profileImage} 
          alt={customer.name} 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-gray-800">{customer.name}</span>
      </div>
      
      <div className="col-span-4 text-gray-600 border-r border-gray-200 px-4">{customer.lastInvoice}</div>
      
      <div className="col-span-3 flex items-center justify-end gap-2 pl-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiEdit2 size={18} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiEye size={18} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiMoreVertical size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CustomerCard; 