import React from 'react';
import { Link } from 'react-router-dom';

export default function Marketplace() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">BwTown Marketplace</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Buy</h3>
          <p className="text-gray-600 mb-4">
            Explore our exclusive collection of luxury properties available for purchase.
          </p>
          <Link 
            to="/"
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            View Listings
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Sell</h3>
          <p className="text-gray-600 mb-4">
            List your property with us and reach qualified luxury buyers.
          </p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            List Property
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Invest</h3>
          <p className="text-gray-600 mb-4">
            Discover premium investment opportunities in real estate.
          </p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}