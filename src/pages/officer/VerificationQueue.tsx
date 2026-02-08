import Card from '@/components/ui/Card';
import Avatar from '@/components/common/Avatar';
import { StatusBadge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QUEUE = [
  { id: 'v1', name: 'Emeka Eze', type: 'Landlord', doc: 'NIN + CAC', submitted: '2 hours ago', avatar: '' },
  { id: 'v2', name: 'Chidi Okafor', type: 'Tenant', doc: 'NIN + Employment', submitted: '5 hours ago', avatar: '' },
  { id: 'v3', name: 'Ngozi Obi', type: 'Landlord', doc: 'BVN + Address', submitted: '1 day ago', avatar: '' },
  { id: 'v4', name: 'Ibrahim Musa', type: 'Tenant', doc: 'NIN', submitted: '1 day ago', avatar: '' },
];

export default function VerificationQueue() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Verification Queue ({QUEUE.length})</h1></div>
      {QUEUE.map((v) => (
        <Card key={v.id} className="flex items-center gap-4">
          <Avatar firstName={v.name.split(' ')[0]} lastName={v.name.split(' ')[1]} size="md" />
          <div className="flex-1">
            <p className="font-bold text-sm">{v.name}</p>
            <p className="text-xs text-[#666]">{v.type} · Documents: {v.doc}</p>
            <p className="text-[10px] text-[#999]">Submitted {v.submitted}</p>
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
