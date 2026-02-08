import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import { Users, Building2, ListChecks, Shield, TrendingUp, FileCheck, BarChart3, ArrowUpRight, Clock } from 'lucide-react';

const STATS = [
  { label: 'Total Tenants', value: '1,247', change: '+12.5%', icon: Users, color: '#2196F3' },
  { label: 'Total Landlords', value: '389', change: '+8.3%', icon: Building2, color: '#4CAF50' },
  { label: 'Active Listings', value: '856', change: '+15.2%', icon: ListChecks, color: '#FF9800' },
  { label: 'Pending Verifications', value: '23', change: '', icon: Shield, color: '#F44336' },
  { label: 'Pending Listings', value: '15', change: '', icon: FileCheck, color: '#9C27B0' },
  { label: 'Total Matches', value: '3,450', change: '+22.1%', icon: TrendingUp, color: '#00BCD4' },
];

const ACTIVITY = [
  { type: 'verification', user: 'Adebayo Holdings', action: 'submitted verification documents', time: '5 min ago' },
  { type: 'listing', user: 'Prime Properties', action: 'created a new listing', time: '12 min ago' },
  { type: 'upgrade', user: 'Chidi Okafor', action: 'requested upgrade to PRO', time: '1 hour ago' },
  { type: 'verification', user: 'Lagos Homes Ltd', action: 'verification approved', time: '2 hours ago' },
  { type: 'listing', user: 'Amina Ibrahim', action: 'listing approved', time: '3 hours ago' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#333] rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, Officer</h1>
        <p className="text-white/70 text-sm mt-1">You have <span className="text-[#FFCA08] font-bold">23 pending verifications</span> and <span className="text-[#FFCA08] font-bold">15 listings</span> to review.</p>
        <div className="flex gap-3 mt-4">
          <button onClick={() => navigate('/officer/verification-queue')} className="px-4 py-2 bg-[#FFCA08] text-[#1A1A1A] rounded-xl text-sm font-bold cursor-pointer hover:bg-[#E6BF22]">Review Verifications</button>
          <button onClick={() => navigate('/officer/listings')} className="px-4 py-2 bg-white/10 text-white rounded-xl text-sm font-bold cursor-pointer hover:bg-white/20">Review Listings</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STATS.map((s) => (
          <Card key={s.label} className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${s.color}15` }}><s.icon size={20} style={{ color: s.color }} /></div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-[#1A1A1A]">{s.value}</p>
              <p className="text-xs text-[#666]">{s.label}</p>
              {s.change && <span className="text-[10px] font-semibold text-[#4CAF50]">{s.change} <ArrowUpRight size={10} className="inline" /></span>}
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Verification Queue', icon: Shield, path: '/officer/verification-queue', count: 23 },
          { label: 'Upgrade Requests', icon: TrendingUp, path: '/officer/upgrade-requests', count: 7 },
          { label: 'Analytics', icon: BarChart3, path: '/officer/analytics', count: 0 },
        ].map((a) => (
          <Card key={a.label} hover onClick={() => navigate(a.path)} className="text-center py-5 cursor-pointer">
            <div className="relative inline-flex">
              <a.icon size={24} className="text-[#FFCA08] mx-auto" />
              {a.count > 0 && <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#F44336] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{a.count}</span>}
            </div>
            <p className="text-sm font-bold mt-2 text-[#1A1A1A]">{a.label}</p>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {ACTIVITY.map((a, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-[#F0F0F0] last:border-0">
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"><Clock size={14} className="text-[#999]" /></div>
              <div className="flex-1"><p className="text-sm"><span className="font-bold text-[#1A1A1A]">{a.user}</span> <span className="text-[#666]">{a.action}</span></p><p className="text-[10px] text-[#999]">{a.time}</p></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
