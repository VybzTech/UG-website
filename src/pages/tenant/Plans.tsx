import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowLeft, Check, X } from 'lucide-react';

const PLANS = [
  { tier: 'FREE', price: 0, label: 'Free', color: '#96705B', features: [
    { name: '10 daily swipes', included: true }, { name: 'Basic search', included: true }, { name: 'View likes', included: false }, { name: 'Boost profile', included: false }, { name: 'Priority support', included: false }
  ]},
  { tier: 'PRO', price: 4950, label: 'Pro', color: '#FFD43B', popular: true, features: [
    { name: '50 daily swipes', included: true }, { name: 'Advanced filters', included: true }, { name: 'View likes', included: true }, { name: 'Boost profile', included: true }, { name: 'Priority support', included: false }
  ]},
  { tier: 'PREMIUM', price: 38250, label: 'Premium', color: '#6665DD', features: [
    { name: 'Unlimited swipes', included: true }, { name: 'All filters', included: true }, { name: 'View likes', included: true }, { name: 'Boost profile', included: true }, { name: 'Dedicated support', included: true }
  ]},
];

export default function Plans() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('PRO');

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button>
        <h1 className="text-xl font-bold text-[#1A1A1A]">Subscription Plans</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <Card key={plan.tier} hover className={`relative ${selected === plan.tier ? 'ring-2' : ''}`}
            style={{ borderColor: selected === plan.tier ? plan.color : undefined, boxShadow: selected === plan.tier ? `0 0 0 2px ${plan.color}40` : undefined }}
            onClick={() => setSelected(plan.tier)}>
            {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#FFD43B] text-[#1A1A1A] text-[10px] font-bold rounded-full">POPULAR</span>}
            <div className="text-center mb-4 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: plan.color }}>{plan.label}</span>
              <p className="text-3xl font-bold text-[#1A1A1A] mt-1">{plan.price === 0 ? 'Free' : `₦${plan.price.toLocaleString()}`}</p>
              {plan.price > 0 && <p className="text-xs text-[#999]">/month</p>}
            </div>
            <div className="space-y-2">
              {plan.features.map((f) => (
                <div key={f.name} className="flex items-center gap-2 text-sm">
                  {f.included ? <Check size={14} className="text-[#4CAF50]" /> : <X size={14} className="text-[#999]" />}
                  <span className={f.included ? 'text-[#1A1A1A]' : 'text-[#999]'}>{f.name}</span>
                </div>
              ))}
            </div>
            <Button fullWidth size="sm" variant={selected === plan.tier ? 'primary' : 'outline'} className="mt-4">
              {plan.tier === 'FREE' ? 'Current Plan' : 'Upgrade'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
