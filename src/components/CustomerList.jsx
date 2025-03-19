import React from 'react';
import CustomerCard from './CustomerCard';
import { FiGrid, FiDownload, FiPlus } from 'react-icons/fi';


const customers = [
  {
    id: 1,
    name: 'John Doe',
    lastInvoice: '16/08/24',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Mark Evans',
    lastInvoice: '16/08/24',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Emily Clark',
    lastInvoice: '17/05/12',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 4,
    name: 'Carlos Rivera',
    lastInvoice: '18/10/30',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 5,
    name: 'Anna Kim',
    lastInvoice: '19/04/01',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 6,
    name: 'Michael Scott',
    lastInvoice: '20/11/27',
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    id: 7,
    name: 'Jessica Reed',
    lastInvoice: '21/08/19',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 8,
    name: 'David Wu',
    lastInvoice: '22/03/07',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 9,
    name: 'John Doe',
    lastInvoice: '23/01/14',
    profileImage: 'https://randomuser.me/api/portraits/men/6.jpg'
  }
];

const CustomerList = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 ">
     
      <div className="flex justify-end items-center gap-4 mb-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600">
          <FiPlus size={20} />
          Register
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
          <FiDownload size={20} />
          Export
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
          <FiGrid size={20} />
          Layout
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        
        <div className="grid grid-cols-12 px-6 py-3 border-b bg-gray-50">
          <div className="col-span-5 text-gray-600 font-medium border-r border-gray-200 pr-4">Customer</div>
          <div className="col-span-4 text-gray-600 font-medium border-r border-gray-200 px-4">Last invoice</div>
          <div className="col-span-3 text-gray-600 font-medium text-right pl-3">Action</div>
        </div>

       
        <div>
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerList; 