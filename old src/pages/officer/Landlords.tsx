import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import FilterTabs from '@/components/common/FilterTabs';
import Avatar from '@/components/common/Avatar';
import { StatusBadge, TierBadge } from '@/components/ui/Badge';
import { Search, ChevronRight, Building } from 'lucide-react';

const MOCK_LANDLORDS = [
  { id: 'll1', firstName: 'Adebayo', lastName: 'Ogundimu', businessName: 'Adebayo Holdings', email: 'adebayo@email.com', tier: 'PRO', status: 'VERIFIED', listings: 6, avatar: '' },
  { id: 'll2', firstName: 'Fatima', lastName: 'Bello', businessName: 'Prime Properties', email: 'fatima@email.com', tier: 'PREMIUM', status: 'VERIFIED', listings: 12, avatar: '' },
  { id: 'll3', firstName: 'Emeka', lastName: 'Eze', businessName: 'Lagos Homes', email: 'emeka@email.com', tier: 'FREE', status: 'PENDING', listings: 2, avatar: '' },
  { id: 'll4', firstName: 'Ngozi', lastName: 'Obi', businessName: 'Obi Estates', email: 'ngozi@email.com', tier: 'FREE', status: 'UNVERIFIED', listings: 0, avatar: '' },
  { id: 'll5', firstName: 'Ibrahim', lastName: 'Musa', businessName: 'Musa Properties', email: 'ibrahim@email.com', tier: 'PRO', status: 'REJECTED', listings: 3, avatar: '' },
];

export default function OfficerLandlords() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = MOCK_LANDLORDS
    .filter((l) => filter === 'All' || l.status === filter.toUpperCase())
    .filter((l) => !search || l.businessName.toLowerCase().includes(search.toLowerCase()) || l.firstName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Manage Landlords</h1>
      <Input placeholder="Search landlords..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <FilterTabs filters={['All', 'Pending', 'Verified', 'Rejected', 'Unverified']} active={filter} onChange={setFilter}
        counts={{ All: 5, Pending: 1, Verified: 2, Rejected: 1, Unverified: 1 }} />
      <div className="space-y-3">
        {filtered.map((l) => (
          <Card key={l.id} hover onClick={() => navigate(`/officer/landlord/${l.id}`)} className="flex items-center gap-4 cursor-pointer">
            <Avatar firstName={l.firstName} lastName={l.lastName} size="md" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2"><p className="font-bold text-sm">{l.firstName} {l.lastName}</p><TierBadge tier={l.tier} /></div>
              <p className="text-xs text-[#666]">{l.businessName}</p>
              <p className="text-[10px] text-[#999]">{l.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <StatusBadge status={l.status} />
                <p className="text-[10px] text-[#999] mt-1 flex items-center gap-1"><Building size={10} />{l.listings} listings</p>
              </div>
              <ChevronRight size={16} className="text-[#999]" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
