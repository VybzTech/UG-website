import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import Toggle from '@/components/ui/Toggle';
import { ArrowLeft, Upload, X } from 'lucide-react';

const LOCATIONS = ['Lekki', 'Victoria Island', 'Ikoyi', 'Ikeja', 'Surulere', 'Yaba', 'Ajah', 'Gbagada', 'Maryland', 'Magodo'];
const AMENITIES = ['WiFi', 'Gym', 'Parking', 'Security', 'Pool', 'Garden', 'Laundry', 'AC', 'Elevator', 'Generator'];
const BUILDING_TYPES = ['Apartment', 'Flat', 'Duplex', 'Bungalow', 'Studio', 'Penthouse', 'Terrace'];

export default function CreateListing() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [beds, setBeds] = useState(2);
  const [baths, setBaths] = useState(1);
  const [sqft, setSqft] = useState('');
  const [buildingType, setBuildingType] = useState('Apartment');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [furnished, setFurnished] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const toggleAmenity = (a: string) => setAmenities((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
      setImages((prev) => [...prev, ...newImages].slice(0, 6));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>
        <h1 className="text-xl font-bold text-[#1A1A1A]">Create Listing</h1>
      </div>

      {/* Basic Info */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Basic Information</h3>
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. 3 Bedroom Apartment in Lekki" />
        <div>
          <label className="block text-sm font-medium text-[#666] mb-1.5">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your property..."
            className="w-full px-4 py-3 bg-white border border-[#E0E0E0] rounded-xl text-sm text-[#1A1A1A] placeholder:text-[#999] outline-none focus:border-[#FFCA08] min-h-[100px] resize-none" />
        </div>
      </Card>

      {/* Location */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Location</h3>
        <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street address" />
        <div>
          <label className="block text-sm font-medium text-[#666] mb-2">City / Area</label>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <button key={loc} onClick={() => setCity(loc)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${city === loc ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666]'}`}>{loc}</button>
            ))}
          </div>
        </div>
      </Card>

      {/* Details */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Property Details</h3>
        <Input label="Monthly Rent (₦)" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g. 1200000" />
        <div>
          <label className="block text-sm font-medium text-[#666] mb-2">Bedrooms</label>
          <div className="flex gap-2">{[1, 2, 3, 4, 5, 6].map((n) => (
            <button key={n} onClick={() => setBeds(n)} className={`w-12 h-12 rounded-xl font-bold text-sm cursor-pointer ${n === beds ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666]'}`}>{n}</button>
          ))}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#666] mb-2">Bathrooms</label>
          <div className="flex gap-2">{[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => setBaths(n)} className={`w-12 h-12 rounded-xl font-bold text-sm cursor-pointer ${n === baths ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666]'}`}>{n}</button>
          ))}</div>
        </div>
        <Input label="Square Feet" type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} placeholder="e.g. 1200" />
        <div>
          <label className="block text-sm font-medium text-[#666] mb-2">Building Type</label>
          <div className="flex flex-wrap gap-2">{BUILDING_TYPES.map((t) => (
            <button key={t} onClick={() => setBuildingType(t)} className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${buildingType === t ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666]'}`}>{t}</button>
          ))}</div>
        </div>
      </Card>

      {/* Amenities */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Amenities</h3>
        <div className="flex flex-wrap gap-2">
          {AMENITIES.map((a) => (
            <button key={a} onClick={() => toggleAmenity(a)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${amenities.includes(a) ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666]'}`}>{a}</button>
          ))}
        </div>
      </Card>

      {/* Images */}
      <Card className="space-y-4">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Photos ({images.length}/6)</h3>
        <div className="flex flex-wrap gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative w-24 h-24 rounded-xl overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover" />
              <button onClick={() => setImages((prev) => prev.filter((_, idx) => idx !== i))}
                className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"><X size={12} className="text-white" /></button>
            </div>
          ))}
          {images.length < 6 && (
            <label className="w-24 h-24 rounded-xl border-2 border-dashed border-[#E0E0E0] flex flex-col items-center justify-center cursor-pointer hover:border-[#FFCA08] transition-colors">
              <Upload size={20} className="text-[#999]" />
              <span className="text-[10px] text-[#999] mt-1">Add Photo</span>
              <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
            </label>
          )}
        </div>
      </Card>

      {/* Toggles */}
      <Card className="space-y-4">
        <Toggle label="Furnished" checked={furnished} onChange={setFurnished} />
        <Toggle label="Pet Friendly" checked={petFriendly} onChange={setPetFriendly} />
      </Card>

      <Button fullWidth size="lg" onClick={() => navigate('/landlord/listings')}>Submit for Review</Button>
    </div>
  );
}
