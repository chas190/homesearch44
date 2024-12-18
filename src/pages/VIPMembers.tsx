import React from 'react';

export default function VIPMembers() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">VIP Members</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Exclusive Benefits</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Priority access to new listings</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Private property tours</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Dedicated real estate concierge</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Special financing options</span>
          </li>
        </ul>
      </div>
    </main>
  );
}