import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/Badge';
import { ArrowLeft, Bed, Bath, Maximize, MapPin, CheckCircle, XCircle } from 'lucide-react';

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const l = { title: '3 Bed Apartment', address: 'Lekki Phase 1', landlord: 'Adebayo Holdings', price: 1200000, status: 'PENDING_REVIEW', beds: 3, baths: 2, sqft: 1200, amenities: ['WiFi', 'Parking', 'Security', 'AC'], description: 'Modern apartment with excellent finishes.', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800' };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative h-72 bg-[#F5F5F5]"><img src={l.image} alt={l.title} className="w-full h-full object-cover" /><button onClick={() => navigate(-1)} className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md cursor-pointer"><ArrowLeft size={20} /></button><div className="absolute top-4 right-4"><StatusBadge status={l.status} /></div></div>
      <div className="p-6 space-y-6">
        <div><h1 className="text-2xl font-bold">{l.title}</h1><p className="text-sm text-[#666] flex items-center gap-1 mt-1"><MapPin size={14} />{l.address}</p><p className="text-sm text-[#999] mt-0.5">by {l.landlord}</p><p className="text-2xl font-bold text-[#FFCA08] mt-3">₦{l.price.toLocaleString()}/month</p></div>
        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center py-3"><Bed size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{l.beds} Beds</p></Card>
          <Card className="text-center py-3"><Bath size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{l.baths} Baths</p></Card>
          <Card className="text-center py-3"><Maximize size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{l.sqft} sqft</p></Card>
        </div>
        <div><h3 className="text-sm font-bold mb-2">Amenities</h3><div className="flex flex-wrap gap-2">{l.amenities.map((a) => <span key={a} className="px-3 py-1.5 bg-[#FFCA08]/10 text-xs font-medium rounded-full">{a}</span>)}</div></div>
        <div><h3 className="text-sm font-bold mb-2">Description</h3><p className="text-sm text-[#666]">{l.description}</p></div>
        {l.status === 'PENDING_REVIEW' && (
          <div className="flex gap-3">
            <Button variant="outline" size="lg" className="flex-1"><XCircle size={16} /> Reject</Button>
            <Button size="lg" className="flex-1" onClick={() => navigate('/officer/listings')}><CheckCircle size={16} /> Approve</Button>
          </div>
        )}
      </div>
    </div>
  );
}
