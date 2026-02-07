import Card from '@/components/ui/Card';
import { MapPin, Bed, Bath } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PROPERTIES = [
  { id: '1', title: '3 Bed Apartment Lekki', price: 1200000, location: 'Lekki Phase 1', beds: 3, baths: 2, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
  { id: '2', title: '2 Bed Flat VI', price: 2500000, location: 'Victoria Island', beds: 2, baths: 2, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
  { id: '3', title: 'Studio Ikoyi', price: 800000, location: 'Ikoyi', beds: 1, baths: 1, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400' },
  { id: '4', title: '4 Bed Duplex Ajah', price: 3500000, location: 'Ajah', beds: 4, baths: 3, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400' },
];

export default function AgentExplore() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Browse Properties</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {PROPERTIES.map((p) => (
          <Card key={p.id} hover className="!p-0 overflow-hidden cursor-pointer">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-sm">{p.title}</h3>
              <p className="text-xs text-[#666] flex items-center gap-1 mt-0.5"><MapPin size={12} />{p.location}</p>
              <p className="text-lg font-bold text-[#FFCA08] mt-2">₦{p.price.toLocaleString()}/mo</p>
              <div className="flex gap-3 mt-2 text-xs text-[#666]"><span className="flex items-center gap-1"><Bed size={12} />{p.beds}</span><span className="flex items-center gap-1"><Bath size={12} />{p.baths}</span></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
