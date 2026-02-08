import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';

const LOCATIONS = ['Lekki', 'Victoria Island', 'Ikoyi', 'Ikeja', 'Surulere', 'Yaba', 'Ajah', 'Gbagada', 'Maryland', 'Magodo'];
const AMENITIES = ['WiFi', 'Gym', 'Parking', 'Security', 'Pool', 'Garden', 'Laundry', 'AC', 'Elevator', 'Generator'];

export default function Preferences() {
  const navigate = useNavigate();
  const [minBudget, setMinBudget] = useState('500000');
  const [maxBudget, setMaxBudget] = useState('1500000');
  const [bedrooms, setBedrooms] = useState(2);
  const [locations, setLocations] = useState<string[]>(['Lekki', 'Victoria Island']);
  const [amenities, setAmenities] = useState<string[]>(['WiFi', 'Parking', 'Security']);

  const toggleItem = (list: string[], item: string, setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((l) => l !== item) : [...list, item]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>
        <h1 className="text-xl font-bold text-[#1A1A1A]">Rental Preferences</h1>
      </div>

      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Budget Range</h3>
        <div className="grid grid-cols-2 gap-3">
          <Input label="Minimum (₦)" type="number" value={minBudget} onChange={(e) => setMinBudget(e.target.value)} />
          <Input label="Maximum (₦)" type="number" value={maxBudget} onChange={(e) => setMaxBudget(e.target.value)} />
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Bedrooms</h3>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button key={n} onClick={() => setBedrooms(n)}
              className={`w-12 h-12 rounded-xl font-bold text-sm transition-colors cursor-pointer ${n === bedrooms ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'}`}>{n}</button>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Preferred Locations</h3>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <button key={loc} onClick={() => toggleItem(locations, loc, setLocations)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${locations.includes(loc) ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'}`}>{loc}</button>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-3">Must-have Amenities</h3>
        <div className="flex flex-wrap gap-2">
          {AMENITIES.map((am) => (
            <button key={am} onClick={() => toggleItem(amenities, am, setAmenities)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${amenities.includes(am) ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'}`}>{am}</button>
          ))}
        </div>
      </Card>

      <Button fullWidth size="lg" onClick={() => navigate('/tenant/profile')}>Save Preferences</Button>
    </div>
  );
}
