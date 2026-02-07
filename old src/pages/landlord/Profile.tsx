import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import { TierBadge, StatusBadge } from '@/components/ui/Badge';
import { Building, Heart, Users, Star, BarChart3, Plus, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export default function LandlordProfile() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);
  const logout = useAppStore((s) => s.logout);

  const stats = [
    { label: 'Listings', value: 6, icon: <Building size={16} className="text-[#FFCA08]" /> },
    { label: 'Active', value: 4, icon: <Heart size={16} className="text-[#4CAF50]" /> },
    { label: 'Matches', value: 18, icon: <Users size={16} className="text-[#2196F3]" /> },
    { label: 'Rating', value: '4.8', icon: <Star size={16} className="text-[#FF9800]" /> },
  ];

  const actions = [
    { label: 'Analytics', icon: BarChart3, path: '/landlord/analytics' },
    { label: 'Create Listing', icon: Plus, path: '/landlord/create-listing' },
    { label: 'Change Password', icon: Lock, path: '/landlord/change-password' },
    { label: 'Help & Support', icon: HelpCircle, path: '/landlord/support' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="text-center py-8">
        <Avatar src={currentUser?.avatar} firstName={currentUser?.firstName || 'Landlord'} lastName={currentUser?.lastName || 'User'} size="xl" border verified />
        <h2 className="text-xl font-bold mt-4 text-[#1A1A1A]">{currentUser?.firstName || 'Landlord'} {currentUser?.lastName || 'Properties'}</h2>
        <p className="text-sm text-[#666]">Adebayo Properties</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <TierBadge tier={currentUser?.tier || 'FREE'} />
          <StatusBadge status={currentUser?.verificationStatus || 'VERIFIED'} />
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="text-center py-3">
            <div className="flex justify-center mb-1">{s.icon}</div>
            <p className="text-xl font-bold text-[#1A1A1A]">{s.value}</p>
            <p className="text-[10px] text-[#999]">{s.label}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between mb-2"><span className="text-sm font-bold">Profile Completeness</span><span className="text-sm font-bold text-[#4CAF50]">85%</span></div>
        <div className="w-full h-2 bg-[#F5F5F5] rounded-full overflow-hidden"><div className="h-full bg-[#4CAF50] rounded-full" style={{ width: '85%' }} /></div>
      </Card>

      <Card className="!p-0 overflow-hidden">
        {actions.map((a, i) => (
          <button key={a.label} onClick={() => navigate(a.path)}
            className={`flex items-center gap-3 w-full px-4 py-3.5 text-sm font-medium text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors cursor-pointer ${i < actions.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}>
            <div className="p-2 rounded-lg bg-[#FFCA08]/10"><a.icon size={18} className="text-[#E6BF22]" /></div>
            <span className="flex-1 text-left">{a.label}</span>
            <ChevronRight size={16} className="text-[#999]" />
          </button>
        ))}
        <button onClick={() => { logout(); navigate('/login'); }}
          className="flex items-center gap-3 w-full px-4 py-3.5 text-sm font-medium text-[#F44336] hover:bg-red-50 transition-colors cursor-pointer">
          <div className="p-2 rounded-lg bg-red-50"><LogOut size={18} className="text-[#F44336]" /></div>
          <span className="flex-1 text-left">Logout</span>
        </button>
      </Card>
    </div>
  );
}
