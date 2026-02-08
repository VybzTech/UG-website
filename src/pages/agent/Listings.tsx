import Card from '@/components/ui/Card';
import EmptyState from '@/components/common/EmptyState';
import { StatusBadge } from '@/components/ui/Badge';
import { MapPin } from 'lucide-react';

const LISTINGS = [
  { id: '1', title: 'Client Property - Lekki', price: 1500000, location: 'Lekki Phase 2', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
  { id: '2', title: 'Client Property - Ikoyi', price: 3000000, location: 'Ikoyi', status: 'PENDING_REVIEW', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
];

export default function AgentListings() {
  if (LISTINGS.length === 0) return <EmptyState icon="🏠" title="No Managed Listings" message="Start managing properties for your clients." />;
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Managed Listings</h1>
      <div className="space-y-3">
        {LISTINGS.map((l) => (
          <Card key={l.id} className="flex gap-4">
            <img src={l.image} alt={l.title} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
            <div className="flex-1"><div className="flex items-center gap-2"><h3 className="font-bold text-sm">{l.title}</h3><StatusBadge status={l.status} /></div><p className="text-xs text-[#666] flex items-center gap-1 mt-0.5"><MapPin size={12} />{l.location}</p><p className="text-lg font-bold text-[#FFCA08] mt-1">₦{l.price.toLocaleString()}/mo</p></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
