import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import { StatusBadge, TierBadge } from '@/components/ui/Badge';
import { Heart, Users, Zap, CreditCard, Shield, Lock, HelpCircle, LogOut, ChevronRight, Settings } from 'lucide-react';

export default function TenantProfile() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);
  const logout = useAppStore((s) => s.logout);

  const stats = [
    { label: 'Likes', value: 24, icon: <Heart size={16} className="text-[#F44336]" /> },
    { label: 'Matches', value: 8, icon: <Users size={16} className="text-[#4CAF50]" /> },
    { label: 'Swipes Today', value: 15, icon: <Zap size={16} className="text-[#FFCA08]" /> },
  ];

  const actions = [
    { label: 'Preferences', icon: Settings, path: '/tenant/preferences' },
    { label: 'Subscription Plans', icon: CreditCard, path: '/tenant/plans' },
    { label: 'Safety Tips', icon: Shield, path: '/tenant/support' },
    { label: 'Change Password', icon: Lock, path: '/tenant/change-password' },
    { label: 'Help & Support', icon: HelpCircle, path: '/tenant/support' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="text-center py-8">
        <Avatar src={currentUser?.avatar} firstName={currentUser?.firstName} lastName={currentUser?.lastName} size="xl" border verified={currentUser?.verificationStatus === 'VERIFIED'} />
        <h2 className="text-xl font-bold mt-4 text-[#1A1A1A]">{currentUser?.firstName} {currentUser?.lastName}</h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <TierBadge tier={currentUser?.tier || 'FREE'} />
          <StatusBadge status={currentUser?.verificationStatus || 'UNVERIFIED'} />
        </div>
        <p className="text-sm text-[#666] mt-2">{currentUser?.email}</p>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <Card key={s.label} className="text-center py-4">
            <div className="flex justify-center mb-1">{s.icon}</div>
            <p className="text-2xl font-bold text-[#1A1A1A]">{s.value}</p>
            <p className="text-xs text-[#999]">{s.label}</p>
          </Card>
        ))}
      </div>

      {/* Profile Completeness */}
      <Card>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-[#1A1A1A]">Profile Completeness</span>
          <span className="text-sm font-bold text-[#4CAF50]">75%</span>
        </div>
        <div className="w-full h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
          <div className="h-full bg-[#4CAF50] rounded-full" style={{ width: '75%' }} />
        </div>
      </Card>

      {/* Rental Preferences */}
      <Card>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#1A1A1A]">Rental Preferences</h3>
          <button onClick={() => navigate('/tenant/preferences')} className="text-xs text-[#FFCA08] font-semibold cursor-pointer">Edit</button>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-[#666]">Budget</span><span className="font-medium">₦500K - ₦1.5M</span></div>
          <div className="flex justify-between"><span className="text-[#666]">Bedrooms</span><span className="font-medium">2-3 beds</span></div>
          <div className="flex justify-between"><span className="text-[#666]">Locations</span><span className="font-medium">Lekki, VI, Ikoyi</span></div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="!p-0 overflow-hidden">
        {actions.map((action, i) => (
          <button key={action.label} onClick={() => navigate(action.path)}
            className={`flex items-center gap-3 w-full px-4 py-3.5 text-sm font-medium text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors cursor-pointer ${i < actions.length - 1 ? 'border-b border-[#F0F0F0]' : ''}`}>
            <div className="p-2 rounded-lg bg-[#FFCA08]/10"><action.icon size={18} className="text-[#E6BF22]" /></div>
            <span className="flex-1 text-left">{action.label}</span>
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
