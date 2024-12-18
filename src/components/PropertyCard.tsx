import React, { useState } from 'react';
import { Property } from '../types';
import { Bed, Bath, Square, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [popupLocked, setPopupLocked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateVipPrice = (price: number) => {
    const discount = 0.10; // Fixed 10% discount
    return {
      discountedPrice: price * (1 - discount),
      savings: price * discount
    };
  };

  const handlePriceClick = () => {
    if (popupLocked) {
      setPopupLocked(false);
      setShowVipPopup(false);
    } else {
      setPopupLocked(true);
      setShowVipPopup(true);
    }
  };

  const handleMouseEnter = () => {
    if (!popupLocked) {
      setShowVipPopup(true);
    }
  };

  const handleMouseLeave = () => {
    if (!popupLocked) {
      setShowVipPopup(false);
    }
  };

  const { discountedPrice, savings } = calculateVipPrice(property.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <div 
          className={`absolute top-2 right-2 bg-white text-blue-600 px-3 py-1.5 rounded-md text-sm font-semibold shadow-md hover:bg-green-600 hover:text-white transition-colors cursor-pointer ${
            popupLocked && 'bg-green-600 text-white'
          }`}
          onClick={handlePriceClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {formatPrice(property.price)}
          
          {/* VIP Pricing Popup */}
          {showVipPopup && (
            <div 
              className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl p-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {popupLocked && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupLocked(false);
                    setShowVipPopup(false);
                  }}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="text-gray-900 font-bold mb-2">VIP Special Pricing</div>
              <div className="text-green-600 font-bold mb-1">
                As low as {formatPrice(discountedPrice)}
              </div>
              <div className="text-red-600 text-sm font-semibold mb-3">
                VIP Savings: {formatPrice(savings)}
              </div>
              <p className="text-gray-600 text-xs mb-3">
                Exclusive 10% discount available for VIP members
              </p>
              <div className="space-y-2">
                <Link 
                  to="/vip-members"
                  className="block w-full px-3 py-1.5 bg-blue-600 text-white text-center rounded-md text-sm hover:bg-blue-700 transition-colors"
                >
                  Learn About Savings
                </Link>
                <Link
                  to="/vip-members"
                  className="block w-full px-3 py-1.5 bg-green-600 text-white text-center rounded-md text-sm hover:bg-green-700 transition-colors"
                >
                  Sign Up for VIP Access
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">{property.address}</h3>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 text-sm">{property.city}</p>
          <span className={`text-sm px-2 py-1 rounded ${
            property.status === 'for_sale' 
              ? 'bg-blue-50 text-blue-600' 
              : 'bg-amber-50 text-amber-600'
          }`}>
            {property.status === 'for_sale' ? 'For Sale' : 'Pending'}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.baths}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}