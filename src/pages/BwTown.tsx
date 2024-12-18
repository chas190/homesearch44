import React from 'react';

export default function BwTown() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to BwTown</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">About BwTown HomeSearch Community</h3>
          <p className="text-gray-600">
            BwTown is a premium real estate community dedicated to connecting luxury property buyers
            with exceptional homes. Our curated selection of properties represents the finest in
            architectural design and modern living.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">BwTown HomeSearch Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Premium Property Listings</li>
            <li>Expert Market Analysis</li>
            <li>Luxury Home Tours</li>
            <li>Investment Opportunities</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://my1.bwtown.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[rgb(79,70,229)] text-white text-lg font-semibold rounded-lg hover:bg-[rgb(67,56,202)] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
        >
          Visit My BwTown
        </a>
      </div>
    </main>
  );
}