import Card from '@/components/ui/Card';
import { ArrowLeft, Users, Building2, TrendingUp, BarChart3, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OfficerAnalytics() {
  const navigate = useNavigate();
  const stats = [
    { label: 'New Tenants (30d)', value: '156', change: '+12.5%', color: '#2196F3' },
    { label: 'New Landlords (30d)', value: '34', change: '+8.3%', color: '#4CAF50' },
    { label: 'New Listings (30d)', value: '89', change: '+15.2%', color: '#FF9800' },
    { label: 'New Matches (30d)', value: '234', change: '+22.1%', color: '#9C27B0' },
    { label: 'Verifications (30d)', value: '67', change: '+5.8%', color: '#00BCD4' },
    { label: 'Revenue (30d)', value: '₦2.4M', change: '+18.7%', color: '#E91E63' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Platform Analytics</h1></div>
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Card key={s.label}><p className="text-xs text-[#666]">{s.label}</p><p className="text-2xl font-bold mt-1" style={{ color: s.color }}>{s.value}</p><span className="text-[10px] font-semibold text-[#4CAF50]">{s.change} <ArrowUpRight size={10} className="inline" /></span></Card>
        ))}
      </div>
      <Card className="h-64 flex items-center justify-center"><div className="text-center text-[#999]"><BarChart3 size={40} className="mx-auto mb-2" /><p className="text-sm">Charts coming soon</p></div></Card>
    </div>
  );
}
