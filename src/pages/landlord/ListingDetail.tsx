import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/Badge';
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Eye, Heart, Users, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const listing = {
    id, title: '3 Bedroom Apartment', address: '12 Admiralty Way, Lekki Phase 1', city: 'Lekki', price: 1200000, status: 'ACTIVE',
    beds: 3, baths: 2, sqft: 1200, description: 'Modern 3-bedroom apartment with excellent finishes. Located in a serene environment with 24/7 security.',
    amenities: ['WiFi', 'Parking', 'Security', 'AC', 'Generator'], furnished: true, petFriendly: false,
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
    views: 245, likes: 34, matches: 8, favorites: 12,
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative h-72 md:h-96 bg-[#F5F5F5]">
        <img src={listing.images[currentImage]} alt={listing.title} className="w-full h-full object-cover" />
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md cursor-pointer"><ArrowLeft size={20} /></button>
        <div className="absolute top-4 right-4"><StatusBadge status={listing.status} /></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {listing.images.map((_, i) => <button key={i} onClick={() => setCurrentImage(i)} className={`w-2 h-2 rounded-full cursor-pointer ${i === currentImage ? 'bg-white' : 'bg-white/50'}`} />)}
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">{listing.title}</h1>
          <div className="flex items-center gap-1 mt-1 text-[#666]"><MapPin size={14} /><span className="text-sm">{listing.address}</span></div>
          <p className="text-2xl font-bold text-[#FFCA08] mt-3">₦{listing.price.toLocaleString()}<span className="text-sm text-[#999] font-normal">/month</span></p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[{ icon: Eye, label: 'Views', value: listing.views }, { icon: Heart, label: 'Likes', value: listing.likes }, { icon: Users, label: 'Matches', value: listing.matches }, { icon: Maximize, label: 'Sqft', value: listing.sqft }].map((s) => (
            <Card key={s.label} className="text-center py-3"><s.icon size={16} className="mx-auto text-[#666] mb-1" /><p className="text-lg font-bold">{s.value}</p><p className="text-[10px] text-[#999]">{s.label}</p></Card>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#F5F5F5] rounded-xl p-3 text-center"><Bed size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{listing.beds} Beds</p></div>
          <div className="bg-[#F5F5F5] rounded-xl p-3 text-center"><Bath size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{listing.baths} Baths</p></div>
          <div className="bg-[#F5F5F5] rounded-xl p-3 text-center"><Maximize size={16} className="mx-auto text-[#666] mb-1" /><p className="font-bold">{listing.sqft} sqft</p></div>
        </div>

        <div><h3 className="text-sm font-bold mb-2">Amenities</h3><div className="flex flex-wrap gap-2">{listing.amenities.map((a) => <span key={a} className="px-3 py-1.5 bg-[#FFCA08]/10 text-xs font-medium rounded-full">{a}</span>)}</div></div>
        <div><h3 className="text-sm font-bold mb-2">Description</h3><p className="text-sm text-[#666] leading-relaxed">{listing.description}</p></div>

        <div className="flex gap-3">
          <Button variant="outline" size="lg" className="flex-1" onClick={() => navigate(`/landlord/create-listing`)}><Edit size={16} /> Edit</Button>
          <Button variant="danger" size="lg" className="flex-1"><Trash2 size={16} /> Delete</Button>
        </div>
      </div>
    </div>
  );
}
