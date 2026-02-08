import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import Button from '@/components/ui/Button';
import { ArrowLeft, Bed, Bath, Maximize, Building, MapPin, Heart, Star, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const properties = useAppStore((s) => s.properties);
  const [currentImage, setCurrentImage] = useState(0);

  const property = properties.find((p) => p.id === id) || properties[0];
  if (!property) return <div className="p-6 text-center text-[#666]">Property not found</div>;

  const images = property.images?.length ? property.images : [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  ];

  const amenities = property.amenities?.length ? property.amenities : ['WiFi', 'Parking', 'Security', 'AC', 'Generator'];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Image Carousel */}
      <div className="relative h-72 md:h-96 bg-[#F5F5F5]">
        <img src={images[currentImage]} alt={property.title} className="w-full h-full object-cover" />
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md cursor-pointer"><ArrowLeft size={20} /></button>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md cursor-pointer"><Heart size={20} className="text-[#F44336]" /></button>
        {/* Image dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentImage(i)} className={`w-2 h-2 rounded-full cursor-pointer ${i === currentImage ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Title & Price */}
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A1A]">{property.title}</h1>
          <div className="flex items-center gap-2 mt-1 text-[#666]"><MapPin size={14} /><span className="text-sm">{property.address}, {property.city}</span></div>
          <p className="text-2xl font-bold text-[#FFCA08] mt-3">₦{(property.priceMonthly || 0).toLocaleString()}<span className="text-sm text-[#999] font-normal">/month</span></p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Bed, label: 'Beds', value: property.beds || 3 },
            { icon: Bath, label: 'Baths', value: property.baths || 2 },
            { icon: Maximize, label: 'Sqft', value: property.squareFeet || 1200 },
            { icon: Building, label: 'Floor', value: property.floor || 2 },
          ].map((s) => (
            <div key={s.label} className="bg-[#F5F5F5] rounded-xl p-3 text-center">
              <s.icon size={18} className="mx-auto text-[#666] mb-1" />
              <p className="text-lg font-bold text-[#1A1A1A]">{s.value}</p>
              <p className="text-[10px] text-[#999]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div>
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {amenities.map((a) => (
              <span key={a} className="px-3 py-1.5 bg-[#FFCA08]/10 text-[#1A1A1A] text-xs font-medium rounded-full">{a}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Description</h3>
          <p className="text-sm text-[#666] leading-relaxed">{property.description || 'Beautiful modern apartment in a prime location with excellent amenities and 24/7 security. Perfect for professionals and families looking for comfortable living.'}</p>
        </div>

        {/* Landlord Card */}
        <div className="bg-[#F5F5F5] rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#FFCA08] flex items-center justify-center text-[#1A1A1A] font-bold text-lg">LL</div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5"><span className="font-bold text-[#1A1A1A]">Property Owner</span><CheckCircle size={14} className="text-[#4CAF50]" /></div>
              <div className="flex items-center gap-1 mt-0.5"><Star size={12} className="text-[#FFCA08]" fill="#FFCA08" /><span className="text-xs text-[#666]">4.8 (23 reviews)</span></div>
              <p className="text-xs text-[#999] mt-0.5">Usually responds within 2 hours</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" className="flex-1"><Phone size={14} />Call</Button>
            <Button size="sm" className="flex-1"><MessageSquare size={14} />Chat</Button>
          </div>
        </div>

        {/* Action */}
        <Button fullWidth size="lg" onClick={() => navigate('/tenant')}>
          <Heart size={18} /> I'm Interested
        </Button>
      </div>
    </div>
  );
}
