export interface Property {
  id: string;
  address: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'house' | 'condo' | 'townhouse';
  yearBuilt: number;
  description: string;
  images: string[];
  status: 'for_sale' | 'pending' | 'sold';
  listedDate: string;
}

export interface SearchFilters {
  city: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  minBaths?: number;
  propertyType?: string[];
}