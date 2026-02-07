import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import FilterTabs from '@/components/common/FilterTabs';
import { StatusBadge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';

const MOCK_LISTINGS = [
  { id: 'ol1', title: '3 Bed Apartment Lekki', landlord: 'Adebayo Holdings', price: 1200000, status: 'PENDING_REVIEW', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', date: '2 hours ago' },
  { id: 'ol2', title: '2 Bed Flat VI', landlord: 'Prime Properties', price: 2500000, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', date: '1 day ago' },
  { id: 'ol3', title: 'Studio Ikoyi', landlord: 'Lagos Homes', price: 800000, status: 'PENDING_REVIEW', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', date: '3 hours ago' },
  { id: 'ol4', title: '4 Bed Duplex Ajah', landlord: 'Musa Properties', price: 3500000, status: 'REJECTED', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400', date: '2 days ago' },
];

export default function OfficerListings() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? MOCK_LISTINGS : MOCK_LISTINGS.filter((l) => l.status === filter.replace(' ', '_').toUpperCase());

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Review Listings</h1>
      <FilterTabs filters={['All', 'Pending Review', 'Active', 'Rejected']} active={filter} onChange={setFilter} counts={{ All: 4, 'Pending Review': 2, Active: 1, Rejected: 1 }} />
      <div className="space-y-3">
        {filtered.map((l) => (
          <Card key={l.id} className="flex gap-4">
            <img src={l.image} alt={l.title} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2"><h3 className="font-bold text-sm">{l.title}</h3><StatusBadge status={l.status} /></div>
              <p className="text-xs text-[#666] mt-0.5">by {l.landlord}</p>
              <p className="text-sm font-bold text-[#FFCA08] mt-1">₦{l.price.toLocaleString()}/month</p>
              <p className="text-[10px] text-[#999] mt-0.5">{l.date}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => navigate(`/officer/listing/${l.id}`)} className="px-3 py-1.5 text-xs font-semibold bg-[#F5F5F5] rounded-lg hover:bg-[#E0E0E0] cursor-pointer">Review</button>
              {l.status === 'PENDING_REVIEW' && (
                <>
                  <button className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer"><CheckCircle size={16} className="text-[#4CAF50]" /></button>
                  <button className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 cursor-pointer"><XCircle size={16} className="text-[#F44336]" /></button>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
