import Card from '@/components/ui/Card';
import { ArrowLeft, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ACTIONS = [
  { officer: 'Officer Admin', action: 'Approved landlord verification', target: 'Adebayo Holdings', time: '5 min ago' },
  { officer: 'Officer Admin', action: 'Rejected listing', target: '4 Bed Duplex Ajah', time: '1 hour ago' },
  { officer: 'Officer Admin', action: 'Approved upgrade request', target: 'Chidi Okafor (FREE → PRO)', time: '2 hours ago' },
  { officer: 'Officer Admin', action: 'Approved listing', target: '2 Bed Flat VI', time: '3 hours ago' },
  { officer: 'Officer Admin', action: 'Rejected landlord verification', target: 'Ibrahim Musa', time: '5 hours ago' },
  { officer: 'Officer Admin', action: 'Approved tenant verification', target: 'Amina Ibrahim', time: '1 day ago' },
];

export default function AuditTrail() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Audit Trail</h1></div>
      <Card className="!p-0">
        {ACTIONS.map((a, i) => (
          <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i < ACTIONS.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center mt-0.5"><Clock size={14} className="text-[#999]" /></div>
            <div className="flex-1"><p className="text-sm"><span className="font-bold">{a.officer}</span> {a.action}: <span className="font-medium">{a.target}</span></p><p className="text-[10px] text-[#999]">{a.time}</p></div>
          </div>
        ))}
      </Card>
    </div>
  );
}
