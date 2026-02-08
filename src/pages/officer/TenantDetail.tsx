import { useParams, useNavigate } from 'react-router-dom';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { StatusBadge, TierBadge } from '@/components/ui/Badge';
import { ArrowLeft, Mail, Phone, Briefcase, MapPin, CheckCircle, XCircle } from 'lucide-react';

export default function TenantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = { firstName: 'Chidi', lastName: 'Okafor', occupation: 'Software Engineer', company: 'TechCo', email: 'chidi@email.com', phone: '+234 801 555 1234', tier: 'PRO', status: 'PENDING', budget: '₦800K-1.2M', locations: ['Lekki', 'VI'], bio: 'Young professional seeking a modern apartment.' };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>
      <Card className="flex items-start gap-4">
        <Avatar firstName={t.firstName} lastName={t.lastName} size="lg" border />
        <div>
          <div className="flex items-center gap-2"><h2 className="text-xl font-bold">{t.firstName} {t.lastName}</h2><TierBadge tier={t.tier} /><StatusBadge status={t.status} /></div>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-[#666]">
            <span className="flex items-center gap-1"><Briefcase size={12} />{t.occupation} at {t.company}</span>
            <span className="flex items-center gap-1"><Mail size={12} />{t.email}</span>
            <span className="flex items-center gap-1"><Phone size={12} />{t.phone}</span>
          </div>
        </div>
      </Card>
      <Card><h3 className="text-sm font-bold mb-2">About</h3><p className="text-sm text-[#666]">{t.bio}</p></Card>
      <Card>
        <h3 className="text-sm font-bold mb-2">Preferences</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-[#666]">Budget</span><span className="font-medium">{t.budget}</span></div>
          <div className="flex justify-between"><span className="text-[#666]">Locations</span><span className="font-medium">{t.locations.join(', ')}</span></div>
        </div>
      </Card>
      {t.status === 'PENDING' && (
        <div className="flex gap-3">
          <Button variant="outline" size="lg" className="flex-1"><XCircle size={16} /> Reject</Button>
          <Button size="lg" className="flex-1" onClick={() => navigate('/officer/tenants')}><CheckCircle size={16} /> Approve</Button>
        </div>
      )}
    </div>
  );
}
