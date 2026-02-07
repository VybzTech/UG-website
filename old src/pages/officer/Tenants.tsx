import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import FilterTabs from '@/components/common/FilterTabs';
import Avatar from '@/components/common/Avatar';
import { StatusBadge, TierBadge } from '@/components/ui/Badge';
import { Search, ChevronRight, Briefcase } from 'lucide-react';

const MOCK_TENANTS = [
  { id: 't1', firstName: 'Chidi', lastName: 'Okafor', occupation: 'Software Engineer', email: 'chidi@email.com', tier: 'PRO', status: 'VERIFIED', budget: '₦800K-1.2M' },
  { id: 't2', firstName: 'Amina', lastName: 'Ibrahim', occupation: 'Doctor', email: 'amina@email.com', tier: 'PREMIUM', status: 'VERIFIED', budget: '₦1M-2M' },
  { id: 't3', firstName: 'Emeka', lastName: 'Nwosu', occupation: 'Banker', email: 'emeka@email.com', tier: 'FREE', status: 'PENDING', budget: '₦600K-1M' },
  { id: 't4', firstName: 'Fatima', lastName: 'Bello', occupation: 'Lawyer', email: 'fatima@email.com', tier: 'FREE', status: 'UNVERIFIED', budget: '₦1.5M-3M' },
  { id: 't5', firstName: 'Olusegun', lastName: 'Adeyemi', occupation: 'Accountant', email: 'segun@email.com', tier: 'PRO', status: 'REJECTED', budget: '₦500K-800K' },
];

export default function OfficerTenants() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = MOCK_TENANTS
    .filter((t) => filter === 'All' || t.status === filter.toUpperCase())
    .filter((t) => !search || t.firstName.toLowerCase().includes(search.toLowerCase()) || t.lastName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Manage Tenants</h1>
      <Input placeholder="Search tenants..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <FilterTabs filters={['All', 'Pending', 'Verified', 'Rejected']} active={filter} onChange={setFilter} counts={{ All: 5, Pending: 1, Verified: 2, Rejected: 1 }} />
      <div className="space-y-3">
        {filtered.map((t) => (
          <Card key={t.id} hover onClick={() => navigate(`/officer/tenant/${t.id}`)} className="flex items-center gap-4 cursor-pointer">
            <Avatar firstName={t.firstName} lastName={t.lastName} size="md" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2"><p className="font-bold text-sm">{t.firstName} {t.lastName}</p><TierBadge tier={t.tier} /></div>
              <p className="text-xs text-[#666] flex items-center gap-1"><Briefcase size={10} />{t.occupation}</p>
              <p className="text-[10px] text-[#999]">{t.email} · Budget: {t.budget}</p>
            </div>
            <div className="flex items-center gap-3"><StatusBadge status={t.status} /><ChevronRight size={16} className="text-[#999]" /></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
