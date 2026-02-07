import { useParams, useNavigate } from 'react-router-dom';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowLeft, Star, CheckCircle, Clock, Building, Phone, MessageSquare } from 'lucide-react';

export default function LandlordProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>

      <Card className="text-center py-6">
        <Avatar firstName="Adebayo" lastName="Properties" size="xl" border verified />
        <h2 className="text-xl font-bold mt-3 text-[#1A1A1A]">Adebayo Properties</h2>
        <div className="flex items-center justify-center gap-1 mt-1"><CheckCircle size={14} className="text-[#4CAF50]" /><span className="text-xs text-[#4CAF50] font-medium">Verified Landlord</span></div>
        <div className="flex items-center justify-center gap-1 mt-1"><Star size={14} className="text-[#FFCA08]" fill="#FFCA08" /><span className="text-sm font-bold">4.8</span><span className="text-xs text-[#999]">(23 reviews)</span></div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {[{ label: 'Listings', value: 6, icon: Building }, { label: 'Response Rate', value: '95%', icon: Clock }, { label: 'Rating', value: '4.8', icon: Star }].map((s) => (
          <Card key={s.label} className="text-center py-3">
            <s.icon size={16} className="mx-auto mb-1 text-[#FFCA08]" />
            <p className="text-lg font-bold text-[#1A1A1A]">{s.value}</p>
            <p className="text-[10px] text-[#999]">{s.label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">About</h3>
        <p className="text-sm text-[#666]">Professional property management company with over 5 years of experience in Lagos real estate. We provide quality homes in premium locations.</p>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" size="lg" className="flex-1"><Phone size={16} /> Call</Button>
        <Button size="lg" className="flex-1"><MessageSquare size={16} /> Message</Button>
      </div>
    </div>
  );
}
