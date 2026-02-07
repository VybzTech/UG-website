import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import FilterTabs from '@/components/common/FilterTabs';
import Avatar from '@/components/common/Avatar';
import { MessageSquare, Eye } from 'lucide-react';

const MOCK_MATCHES = [
  { id: 't1', name: 'Chidi Okafor', avatar: '', occupation: 'Software Engineer', budget: '₦800K - ₦1.2M', property: '3 Bed Lekki Apt', date: '2 days ago', status: 'Active' },
  { id: 't2', name: 'Amina Ibrahim', avatar: '', occupation: 'Doctor', budget: '₦1M - ₦2M', property: '2 Bed VI Flat', date: '4 days ago', status: 'Active' },
  { id: 't3', name: 'Emeka Nwosu', avatar: '', occupation: 'Banker', budget: '₦600K - ₦1M', property: 'Studio Ikoyi', date: '1 week ago', status: 'New' },
  { id: 't4', name: 'Fatima Bello', avatar: '', occupation: 'Lawyer', budget: '₦1.5M - ₦3M', property: '3 Bed Lekki Apt', date: '2 weeks ago', status: 'Expired' },
];

export default function LandlordMatches() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? MOCK_MATCHES : MOCK_MATCHES.filter((m) => m.status === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Tenant Matches</h1>
      <FilterTabs filters={['All', 'Active', 'New', 'Expired']} active={filter} onChange={setFilter} counts={{ All: 4, Active: 2, New: 1, Expired: 1 }} />
      <div className="space-y-3">
        {filtered.map((m) => (
          <Card key={m.id} className="flex items-center gap-4">
            <Avatar firstName={m.name.split(' ')[0]} lastName={m.name.split(' ')[1]} size="md" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-[#1A1A1A]">{m.name}</p>
              <p className="text-xs text-[#666]">{m.occupation} · {m.budget}</p>
              <p className="text-[10px] text-[#999]">Matched on {m.property} · {m.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-[#FFCA08]/10 hover:bg-[#FFCA08]/20 cursor-pointer"><MessageSquare size={16} className="text-[#E6BF22]" /></button>
              <button onClick={() => navigate(`/landlord/tenant/${m.id}`)} className="p-2 rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] cursor-pointer"><Eye size={16} className="text-[#666]" /></button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
