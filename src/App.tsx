import React, { useState } from 'react';
import { Home } from 'lucide-react';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import { sampleProperties } from './data/sampleProperties';
import { Property, SearchFilters } from './types';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import VIPMembers from './pages/VIPMembers';
import BwTown from './pages/BwTown';
import Marketplace from './pages/Marketplace';
import Partners from './pages/Partners';
import PartnersList from './pages/PartnersList';

function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string) => `
    text-gray-600 hover:text-blue-600 transition-colors
    ${isActive(path) ? 'font-bold text-blue-600' : ''}
  `;

  return (
    <nav className="flex gap-8 mr-10">
      <Link to="/" className={linkClass('/')}>Home Search</Link>
      <Link to="/vip-members" className={linkClass('/vip-members')}>VIP Members</Link>
      <Link to="/bwtown" className={linkClass('/bwtown')}>BwTown</Link>
      <Link to="/marketplace" className={linkClass('/marketplace')}>Marketplace</Link>
      <Link to="/partners" className={linkClass('/partners')}>Partners</Link>
    </nav>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">BwTown HomeSearch</h1>
            </div>
            <div className="flex items-center">
              <Navigation />
              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-gray-900">Sign In</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2024 HomeSearch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(sampleProperties);

  const handleSearch = (filters: SearchFilters) => {
    const filtered = sampleProperties.filter((property) => {
      if (filters.city && !property.city.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }
      if (filters.minPrice && property.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && property.price > filters.maxPrice) {
        return false;
      }
      if (filters.minBeds && property.beds < filters.minBeds) {
        return false;
      }
      if (filters.minBaths && property.baths < filters.minBaths) {
        return false;
      }
      return true;
    });

    setFilteredProperties(filtered);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your BwTown Dream Home</h2>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No properties found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/vip-members" element={<Layout><VIPMembers /></Layout>} />
      <Route path="/bwtown" element={<Layout><BwTown /></Layout>} />
      <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
      <Route path="/partners" element={<Layout><Partners /></Layout>} />
      <Route path="/partners/:category" element={<Layout><PartnersList /></Layout>} />
      <Route path="/partners/:category/:subcategory" element={<Layout><PartnersList /></Layout>} />
    </Routes>
  );
}

export default App;