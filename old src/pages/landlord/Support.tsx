import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import { ArrowLeft, Mail, Phone, MessageSquare, FileText, Shield, HelpCircle } from 'lucide-react';

export default function Support() {
  const navigate = useNavigate();
  const items = [
    { icon: HelpCircle, label: 'FAQ', desc: 'Common questions answered' },
    { icon: MessageSquare, label: 'Live Chat', desc: 'Chat with our support team' },
    { icon: Mail, label: 'Email', desc: 'support@urbangravity.com' },
    { icon: Phone, label: 'Call Us', desc: '+234 800 000 0000' },
    { icon: Shield, label: 'Safety Tips', desc: 'Stay safe while renting' },
    { icon: FileText, label: 'Terms', desc: 'Terms of service' },
  ];
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Help & Support</h1></div>
      <div className="space-y-3">{items.map((item) => (
        <Card key={item.label} hover className="flex items-center gap-4 cursor-pointer">
          <div className="p-3 rounded-xl bg-[#FFCA08]/10"><item.icon size={20} className="text-[#E6BF22]" /></div>
          <div><p className="font-bold text-sm">{item.label}</p><p className="text-xs text-[#666]">{item.desc}</p></div>
        </Card>
      ))}</div>
    </div>
  );
}
