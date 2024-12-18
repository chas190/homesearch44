import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import businessPartners from '../data/businessPartners.json';
import { Star } from 'lucide-react';

interface Business {
  id: string;
  name: string;
  rank: number;
  vipStatus: boolean;
  address: string;
  city: string;
  zipcode: string;
  phone: string;
  hours: string;
  summary: string;
  image: string;
  logo: string;
}

export default function PartnersList() {
  const { category, subcategory } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [rankFilter, setRankFilter] = useState('');
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    if (category && subcategory) {
      const data = (businessPartners as any)[category][subcategory];
      setBusinesses(data || []);
    } else if (category) {
      const categoryData = (businessPartners as any)[category];
      const allBusinesses = Object.values(categoryData).flat();
      setBusinesses(allBusinesses as Business[]);
    }
  }, [category, subcategory]);

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRank = !rankFilter || business.rank >= parseInt(rankFilter);
    return matchesSearch && matchesRank;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {subcategory ? `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} Partners` : 
           category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Partners` : 
           'All Partners'}
        </h2>
        
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by business name or city..."
            className="flex-1 p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border rounded-md"
            value={rankFilter}
            onChange={(e) => setRankFilter(e.target.value)}
          >
            <option value="">All Ranks</option>
            {[5, 4, 3, 2, 1].map(rank => (
              <option key={rank} value={rank}>{rank}+ Stars</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBusinesses.map(business => (
          <div key={business.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <img
                  src={business.logo}
                  alt={`${business.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{business.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(business.rank)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <span className="text-blue-600 text-sm">
                      {business.rank} {business.rank === 1 ? 'star' : 'stars'}
                    </span>
                  </div>
                </div>
                {business.vipStatus && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-sm font-semibold">
                    VIP
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{business.summary}</p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>{business.address}</p>
                <p>{business.city}, CA {business.zipcode}</p>
                <p>{business.phone}</p>
                <p>{business.hours}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No businesses found matching your criteria.</p>
        </div>
      )}
    </main>
  );
}