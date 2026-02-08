import { useNavigate } from 'react-router-dom';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/ui/Card';
import { TierBadge } from '@/components/ui/Badge';
import { Building, Users, Star, LogOut } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

export default function AgentProfile() {
  const navigate = useNavigate();
  const logout = useAppStore((s) => s.logout);
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="text-center py-8">
        <Avatar firstName="Agent" lastName="User" size="xl" border />
        <h2 className="text-xl font-bold mt-4">Agent User</h2>
        <p className="text-sm text-[#666]">Prime Real Estate Agency</p>
        <div className="mt-2"><TierBadge tier="PRO" /></div>
      </Card>
      <div className="grid grid-cols-3 gap-3">
        {[{ l: 'Listings', v: 8, icon: Building }, { l: 'Matches', v: 12, icon: Users }, { l: 'Rating', v: '4.7', icon: Star }].map((s) => (
          <Card key={s.l} className="text-center py-3"><s.icon size={16} className="mx-auto text-[#FFCA08] mb-1" /><p className="text-xl font-bold">{s.v}</p><p className="text-[10px] text-[#999]">{s.l}</p></Card>
        ))}
      </div>
      <button onClick={() => { logout(); navigate('/login'); }}
        className="flex items-center gap-3 w-full px-4 py-3.5 text-sm font-medium text-[#F44336] bg-white rounded-2xl border border-[#F0F0F0] hover:bg-red-50 cursor-pointer">
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
}
