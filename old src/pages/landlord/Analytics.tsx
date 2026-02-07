import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import { ArrowLeft, Eye, Heart, Users, TrendingUp, BarChart3 } from 'lucide-react';

export default function Analytics() {
  const navigate = useNavigate();
  const stats = [
    { label: 'Total Views', value: '1,254', change: '+12.5%', icon: Eye, color: '#2196F3' },
    { label: 'Total Likes', value: '89', change: '+8.3%', icon: Heart, color: '#F44336' },
    { label: 'Total Matches', value: '18', change: '+15.2%', icon: Users, color: '#4CAF50' },
    { label: 'Conversion Rate', value: '14.3%', change: '+2.1%', icon: TrendingUp, color: '#FF9800' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>
        <h1 className="text-xl font-bold text-[#1A1A1A]">Analytics</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex items-center gap-4">
            <div className="p-3 rounded-xl" style={{ backgroundColor: `${s.color}15` }}><s.icon size={22} style={{ color: s.color }} /></div>
            <div>
              <p className="text-2xl font-bold text-[#1A1A1A]">{s.value}</p>
              <p className="text-xs text-[#666]">{s.label}</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-[#4CAF50]">{s.change}</span>
          </Card>
        ))}
      </div>

      <Card className="h-64 flex items-center justify-center">
        <div className="text-center text-[#999]">
          <BarChart3 size={40} className="mx-auto mb-2" />
          <p className="text-sm">Analytics chart coming soon</p>
        </div>
      </Card>
    </div>
  );
}
