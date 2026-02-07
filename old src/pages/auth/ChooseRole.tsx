import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Building2, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';

const roles = [
  { id: 'TENANT', label: 'Tenant', icon: Home, desc: 'Looking for a place to rent', benefits: ['Swipe through properties', 'Get matched with landlords', 'Negotiate rent'] },
  { id: 'LANDLORD', label: 'Landlord', icon: Building2, desc: 'List your properties', benefits: ['List unlimited properties', 'Find verified tenants', 'Manage your rentals'] },
  { id: 'AGENT', label: 'Agent', icon: Briefcase, desc: 'Manage properties for clients', benefits: ['Manage multiple landlords', 'Access tenant pool', 'Earn commissions'] },
];

export default function ChooseRole() {
  const [selected, setSelected] = useState('TENANT');
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1">Choose your role</h1>
      <p className="text-sm text-[#666] mb-6">How will you use Urban Gravity?</p>

      <div className="space-y-3 mb-8">
        {roles.map((role) => (
          <button key={role.id} onClick={() => setSelected(role.id)}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
              selected === role.id ? 'border-[#FFCA08] bg-[#FFF8DC]' : 'border-[#F0F0F0] hover:border-[#E0E0E0]'
            }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${selected === role.id ? 'bg-[#FFCA08]' : 'bg-[#F5F5F5]'}`}>
                <role.icon size={20} className={selected === role.id ? 'text-[#1A1A1A]' : 'text-[#666]'} />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A]">{role.label}</h3>
                <p className="text-xs text-[#999]">{role.desc}</p>
              </div>
            </div>
            {selected === role.id && (
              <ul className="ml-11 space-y-1">
                {role.benefits.map((b) => (
                  <li key={b} className="text-xs text-[#666] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#FFCA08]" />{b}
                  </li>
                ))}
              </ul>
            )}
          </button>
        ))}
      </div>

      <Button onClick={() => navigate('/basic-info')} fullWidth size="lg">Continue as {roles.find(r => r.id === selected)?.label}</Button>
    </div>
  );
}
