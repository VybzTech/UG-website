import Card from '@/components/ui/Card';
import { ArrowLeft, Bell, CheckCircle, FileText, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NOTIFS = [
  { icon: CheckCircle, title: 'New verification submitted', desc: 'Emeka Eze submitted verification documents', time: '5 min ago', read: false },
  { icon: FileText, title: 'New listing for review', desc: '3 Bed Apartment Lekki by Adebayo Holdings', time: '12 min ago', read: false },
  { icon: TrendingUp, title: 'Upgrade request', desc: 'Chidi Okafor requested upgrade to PRO', time: '1 hour ago', read: true },
  { icon: CheckCircle, title: 'Verification completed', desc: 'Lagos Homes Ltd verification approved', time: '2 hours ago', read: true },
];

export default function Notifications() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Notifications</h1></div>
      {NOTIFS.map((n, i) => (
        <Card key={i} className={`flex items-start gap-3 ${!n.read ? 'bg-[#FFCA08]/5 border-[#FFCA08]/30' : ''}`}>
          <div className={`p-2 rounded-lg ${!n.read ? 'bg-[#FFCA08]/10' : 'bg-[#F5F5F5]'}`}><n.icon size={18} className={!n.read ? 'text-[#E6BF22]' : 'text-[#999]'} /></div>
          <div className="flex-1"><p className="font-bold text-sm">{n.title}</p><p className="text-xs text-[#666]">{n.desc}</p><p className="text-[10px] text-[#999] mt-0.5">{n.time}</p></div>
          {!n.read && <div className="w-2 h-2 rounded-full bg-[#FFCA08] mt-2" />}
        </Card>
      ))}
    </div>
  );
}
