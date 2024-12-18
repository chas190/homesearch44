import React from 'react';
import { 
  Building2, 
  BadgeDollarSign, 
  FileCheck, 
  ShieldCheck, 
  Move, 
  Paintbrush 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerLink = ({ icon: Icon, title, category }: { icon: any, title: string, category: string }) => (
  <Link 
    to={`/partners/${category}`}
    className="flex items-center gap-4 group"
  >
    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
      <Icon className="w-8 h-8 text-blue-600 group-hover:text-orange-500 transition-colors" />
    </div>
    <div>
      <h4 className="font-semibold group-hover:text-orange-500 transition-colors">{title}</h4>
      <p className="text-sm text-gray-600">{title} services</p>
    </div>
  </Link>
);

export default function Partners() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">BwTown VIP Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Financial Partners</h3>
            <Link 
              to="/partners/financial"
              className="text-orange-500 hover:text-orange-600 text-sm"
            >
              see list
            </Link>
          </div>
          <ul className="space-y-4">
            <li>
              <PartnerLink 
                icon={Building2} 
                title="Premium Mortgage"
                category="financial/mortgage"
              />
            </li>
            <li>
              <PartnerLink 
                icon={BadgeDollarSign} 
                title="Elite Banking"
                category="financial/banking"
              />
            </li>
            <li>
              <PartnerLink 
                icon={FileCheck} 
                title="BwTown Title Company"
                category="financial/title"
              />
            </li>
            <li>
              <PartnerLink 
                icon={ShieldCheck} 
                title="Secure Escrow Services"
                category="financial/escrow"
              />
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Service Partners</h3>
            <Link 
              to="/partners/services"
              className="text-orange-500 hover:text-orange-600 text-sm"
            >
              see list
            </Link>
          </div>
          <ul className="space-y-4">
            <li>
              <PartnerLink 
                icon={Move} 
                title="Luxury Movers"
                category="services/moving"
              />
            </li>
            <li>
              <PartnerLink 
                icon={Paintbrush} 
                title="Interior Design Co"
                category="services/design"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}