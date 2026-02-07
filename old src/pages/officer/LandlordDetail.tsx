import { useParams, useNavigate } from 'react-router-dom';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { StatusBadge, TierBadge } from '@/components/ui/Badge';
import { ArrowLeft, Building, Mail, Phone, MapPin, Calendar, CheckCircle, XCircle } from 'lucide-react';

export default function LandlordDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const landlord = {
    id, firstName: 'Adebayo', lastName: 'Ogundimu', businessName: 'Adebayo Holdings', businessReg: 'RC-123456',
    email: 'adebayo@email.com', phone: '+234 801 234 5678', address: '15 Admiralty Way, Lekki Phase 1', city: 'Lagos',
    tier: 'PRO', status: 'PENDING', listings: 6, active: 4, matches: 18, rating: 4.8, joined: 'Jan 2024',
    bio: 'Professional property management company with over 5 years of experience in Lagos real estate.',
    docs: { nin: { verified: true }, bvn: { verified: true }, cac: { verified: false }, address: { verified: false } },
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>

      <Card className="flex items-start gap-4">
        <Avatar firstName={landlord.firstName} lastName={landlord.lastName} size="lg" border />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{landlord.firstName} {landlord.lastName}</h2>
            <TierBadge tier={landlord.tier} />
            <StatusBadge status={landlord.status} />
          </div>
          <p className="text-sm text-[#666]">{landlord.businessName} · {landlord.businessReg}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#666]">
            <span className="flex items-center gap-1"><Mail size={12} />{landlord.email}</span>
            <span className="flex items-center gap-1"><Phone size={12} />{landlord.phone}</span>
            <span className="flex items-center gap-1"><MapPin size={12} />{landlord.city}</span>
            <span className="flex items-center gap-1"><Calendar size={12} />Joined {landlord.joined}</span>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-3">
        {[{ l: 'Listings', v: landlord.listings }, { l: 'Active', v: landlord.active }, { l: 'Matches', v: landlord.matches }, { l: 'Rating', v: landlord.rating }].map((s) => (
          <Card key={s.l} className="text-center py-3"><p className="text-xl font-bold">{s.v}</p><p className="text-[10px] text-[#999]">{s.l}</p></Card>
        ))}
      </div>

      <Card>
        <h3 className="text-sm font-bold mb-2">About</h3>
        <p className="text-sm text-[#666]">{landlord.bio}</p>
      </Card>

      <Card>
        <h3 className="text-sm font-bold mb-3">Verification Documents</h3>
        <div className="space-y-3">
          {Object.entries(landlord.docs).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between py-2 border-b border-[#F0F0F0] last:border-0">
              <span className="text-sm capitalize">{key === 'nin' ? 'NIN' : key === 'bvn' ? 'BVN' : key === 'cac' ? 'CAC Registration' : 'Address Proof'}</span>
              {val.verified ? <span className="flex items-center gap-1 text-xs text-[#4CAF50]"><CheckCircle size={14} />Verified</span> : <span className="flex items-center gap-1 text-xs text-[#999]"><XCircle size={14} />Not verified</span>}
            </div>
          ))}
        </div>
      </Card>

      {landlord.status === 'PENDING' && (
        <div className="flex gap-3">
          <Button variant="outline" size="lg" className="flex-1"><XCircle size={16} /> Reject</Button>
          <Button size="lg" className="flex-1" onClick={() => navigate('/officer/landlords')}><CheckCircle size={16} /> Approve</Button>
        </div>
      )}
    </div>
  );
}
