import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import FilterTabs from '@/components/common/FilterTabs';
import EmptyState from '@/components/common/EmptyState';
import Avatar from '@/components/common/Avatar';
import { useState } from 'react';
import { MessageSquare, Eye } from 'lucide-react';

const MOCK_MATCHES = [
  { id: '1', landlordName: 'Adebayo Holdings', landlordAvatar: '', propertyTitle: '3 Bed Apartment Lekki', matchedAt: '2 days ago', status: 'ACTIVE' },
  { id: '2', landlordName: 'Prime Properties', landlordAvatar: '', propertyTitle: '2 Bed Flat Victoria Island', matchedAt: '5 days ago', status: 'ACTIVE' },
  { id: '3', landlordName: 'Lagos Homes Ltd', landlordAvatar: '', propertyTitle: 'Studio Apartment Ikoyi', matchedAt: '1 week ago', status: 'EXPIRED' },
];

export default function TenantMatches() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Active', 'New', 'Expired'];
  const matches = filter === 'All' ? MOCK_MATCHES : MOCK_MATCHES.filter((m) => m.status === filter.toUpperCase());

  if (MOCK_MATCHES.length === 0) return <EmptyState icon="💘" title="No Matches Yet" message="Keep swiping to find your perfect match!" actionLabel="Explore" onAction={() => navigate('/tenant')} />;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Your Matches</h1>
      <FilterTabs filters={filters} active={filter} onChange={setFilter} counts={{ All: 3, Active: 2, New: 0, Expired: 1 }} />
      <div className="space-y-3">
        {matches.map((m) => (
          <Card key={m.id} hover className="flex items-center gap-4">
            <Avatar firstName={m.landlordName.split(' ')[0]} lastName={m.landlordName.split(' ')[1]} size="md" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-[#1A1A1A] truncate">{m.landlordName}</p>
              <p className="text-xs text-[#666] truncate">{m.propertyTitle}</p>
              <p className="text-[10px] text-[#999] mt-0.5">{m.matchedAt}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] cursor-pointer"><MessageSquare size={16} className="text-[#666]" /></button>
              <button onClick={() => navigate(`/tenant/landlord/${m.id}`)} className="p-2 rounded-lg bg-[#F5F5F5] hover:bg-[#E0E0E0] cursor-pointer"><Eye size={16} className="text-[#666]" /></button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
