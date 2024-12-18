export const sampleProperties = [
  {
    id: '1',
    address: '123 Main Street',
    city: 'San Jose',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2200,
    type: 'house',
    yearBuilt: 1995,
    description: 'Beautiful single-family home in prime location',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'for_sale',
    listedDate: '2024-03-15'
  },
  {
    id: '2',
    address: '456 Oak Avenue',
    city: 'Santa Clara',
    price: 2180000,
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: 'house',
    yearBuilt: 2008,
    description: 'Elegant modern estate with pool',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'for_sale',
    listedDate: '2024-03-18'
  },
  {
    id: '3',
    address: '789 Maple Drive',
    city: 'Palo Alto',
    price: 4250000,
    beds: 6,
    baths: 5.5,
    sqft: 4500,
    type: 'house',
    yearBuilt: 2015,
    description: 'Luxurious smart home with theater room',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'for_sale',
    listedDate: '2024-03-10'
  },
  {
    id: '4',
    address: '321 Pine Court',
    city: 'Los Altos',
    price: 5500000,
    beds: 7,
    baths: 6,
    sqft: 5800,
    type: 'house',
    yearBuilt: 2020,
    description: 'Mediterranean villa with vineyard views',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'pending',
    listedDate: '2024-03-05'
  },
  {
    id: '5',
    address: '567 Willow Lane',
    city: 'Menlo Park',
    price: 3850000,
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    type: 'house',
    yearBuilt: 2018,
    description: 'Contemporary masterpiece with guest house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'for_sale',
    listedDate: '2024-03-20'
  },
  // ... continuing with more properties
  {
    id: '100',
    address: '999 Tech Circle',
    city: 'Mountain View',
    price: 4150000,
    beds: 6,
    baths: 5,
    sqft: 4800,
    type: 'house',
    yearBuilt: 2019,
    description: 'Ultra-modern smart home near tech hub',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000'
    ],
    status: 'for_sale',
    listedDate: '2024-03-01'
  }
] as const;