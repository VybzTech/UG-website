import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FilterTabs from '@/components/common/FilterTabs';
import { StatusBadge } from '@/components/ui/Badge';
import { Plus, Eye, Heart, Users, MapPin } from 'lucide-react';

const MOCK_LISTINGS = [
  { id: 'l1', title: '3 Bedroom Apartment', address: 'Lekki Phase 1', price: 1200000, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', views: 245, likes: 34, matches: 8 },
  { id: 'l2', title: '2 Bedroom Flat', address: 'Victoria Island', price: 2500000, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', views: 189, likes: 27, matches: 5 },
  { id: 'l3', title: 'Studio Apartment', address: 'Ikoyi', price: 800000, status: 'PENDING_REVIEW', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', views: 0, likes: 0, matches: 0 },
  { id: 'l4', title: '4 Bedroom Duplex', address: 'Ajah', price: 3500000, status: 'PAUSED', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400', views: 120, likes: 15, matches: 3 },
  { id: 'l5', title: '1 Bedroom Mini-flat', address: 'Surulere', price: 450000, status: 'RENTED', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400', views: 310, likes: 42, matches: 12 },
];

export default function LandlordListings() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? MOCK_LISTINGS : MOCK_LISTINGS.filter((l) => l.status === filter.toUpperCase().replace(' ', '_'));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#1A1A1A]">My Listings</h1>
        <Button onClick={() => navigate('/landlord/create-listing')} size="sm"><Plus size={16} /> Create Listing</Button>
      </div>

      <FilterTabs filters={['All', 'Active', 'Pending Review', 'Paused', 'Rented']} active={filter} onChange={setFilter}
        counts={{ All: 5, Active: 2, 'Pending Review': 1, Paused: 1, Rented: 1 }} />

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((l) => (
          <Card key={l.id} hover className="!p-0 overflow-hidden" onClick={() => navigate(`/landlord/listing/${l.id}`)}>
            <div className="relative h-40">
              <img src={l.image} alt={l.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3"><StatusBadge status={l.status} /></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#1A1A1A]">{l.title}</h3>
              <div className="flex items-center gap-1 text-xs text-[#666] mt-0.5"><MapPin size={12} />{l.address}</div>
              <p className="text-lg font-bold text-[#FFCA08] mt-2">₦{l.price.toLocaleString()}<span className="text-xs text-[#999] font-normal">/month</span></p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[#F0F0F0]">
                <span className="flex items-center gap-1 text-xs text-[#666]"><Eye size={12} />{l.views}</span>
                <span className="flex items-center gap-1 text-xs text-[#666]"><Heart size={12} />{l.likes}</span>
                <span className="flex items-center gap-1 text-xs text-[#666]"><Users size={12} />{l.matches}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
