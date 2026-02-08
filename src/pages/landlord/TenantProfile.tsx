import { useParams, useNavigate } from 'react-router-dom';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowLeft, Briefcase, MapPin, DollarSign, CheckCircle, MessageSquare } from 'lucide-react';

export default function TenantProfileView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tenant = { id, name: 'Chidi Okafor', age: 28, occupation: 'Software Engineer', company: 'TechCo Nigeria', income: '₦500K+', budgetMin: 800000, budgetMax: 1200000, locations: ['Lekki', 'Victoria Island'], amenities: ['WiFi', 'Parking', 'Security'], verified: true, bio: 'Young professional looking for a comfortable apartment close to work. Non-smoker, no pets.' };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>

      <Card className="text-center py-6">
        <Avatar firstName="Chidi" lastName="Okafor" size="xl" border verified={tenant.verified} />
        <h2 className="text-xl font-bold mt-3">{tenant.name}, {tenant.age}</h2>
        <div className="flex items-center justify-center gap-1 mt-1"><Briefcase size={14} className="text-[#666]" /><span className="text-sm text-[#666]">{tenant.occupation} at {tenant.company}</span></div>
        {tenant.verified && <div className="flex items-center justify-center gap-1 mt-1"><CheckCircle size={14} className="text-[#4CAF50]" /><span className="text-xs text-[#4CAF50]">Verified Tenant</span></div>}
      </Card>

      <Card>
        <h3 className="text-sm font-bold mb-3">About</h3>
        <p className="text-sm text-[#666]">{tenant.bio}</p>
      </Card>

      <Card>
        <h3 className="text-sm font-bold mb-3">Rental Preferences</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-[#666]"><DollarSign size={14} className="inline" /> Budget</span><span className="font-medium">₦{tenant.budgetMin.toLocaleString()} - ₦{tenant.budgetMax.toLocaleString()}</span></div>
          <div className="flex justify-between"><span className="text-[#666]"><MapPin size={14} className="inline" /> Locations</span><span className="font-medium">{tenant.locations.join(', ')}</span></div>
        </div>
        <div className="mt-3"><span className="text-xs text-[#666]">Must-have:</span><div className="flex flex-wrap gap-1 mt-1">{tenant.amenities.map((a) => <span key={a} className="px-2 py-0.5 bg-[#FFCA08]/10 text-[10px] font-medium rounded-full">{a}</span>)}</div></div>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" size="lg" className="flex-1" onClick={() => navigate(-1)}>Decline</Button>
        <Button size="lg" className="flex-1"><MessageSquare size={16} /> Accept & Chat</Button>
      </div>
    </div>
  );
}
