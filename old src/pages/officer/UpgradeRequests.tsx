import Card from '@/components/ui/Card';
import Avatar from '@/components/common/Avatar';
import { TierBadge } from '@/components/ui/Badge';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const REQUESTS = [
  { id: 'u1', name: 'Chidi Okafor', role: 'Tenant', from: 'FREE', to: 'PRO', amount: '₦4,950', date: '1 hour ago' },
  { id: 'u2', name: 'Adebayo Holdings', role: 'Landlord', from: 'PRO', to: 'PREMIUM', amount: '₦38,250', date: '3 hours ago' },
  { id: 'u3', name: 'Fatima Bello', role: 'Tenant', from: 'FREE', to: 'PREMIUM', amount: '₦38,250', date: '1 day ago' },
];

export default function UpgradeRequests() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Upgrade Requests ({REQUESTS.length})</h1></div>
      {REQUESTS.map((r) => (
        <Card key={r.id} className="flex items-center gap-4">
          <Avatar firstName={r.name.split(' ')[0]} lastName={r.name.split(' ')[1]} size="md" />
          <div className="flex-1">
            <p className="font-bold text-sm">{r.name}</p>
            <div className="flex items-center gap-2 mt-1"><TierBadge tier={r.from} /><ArrowRight size={12} className="text-[#999]" /><TierBadge tier={r.to} /></div>
            <p className="text-[10px] text-[#999] mt-0.5">{r.role} · {r.amount} · {r.date}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer"><CheckCircle size={18} className="text-[#4CAF50]" /></button>
            <button className="p-2 rounded-lg bg-red-50 hover:bg-red-100 cursor-pointer"><XCircle size={18} className="text-[#F44336]" /></button>
          </div>
        </Card>
      ))}
    </div>
  );
}
