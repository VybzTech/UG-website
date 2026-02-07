import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';

export default function Preview() {
  const navigate = useNavigate();
  const { initializeMockData } = useAppStore();

  const handleComplete = () => {
    initializeMockData();
    navigate('/tenant');
  };

  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-600" />
      </div>

      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">You're all set!</h1>
      <p className="text-sm text-[#666] max-w-xs mx-auto mb-8">Your profile has been created. Start exploring properties that match your preferences.</p>

      <div className="bg-[#FAFAFA] rounded-2xl p-6 mb-8 text-left space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#999] uppercase tracking-wide">Role</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">Tenant</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#999] uppercase tracking-wide">Tier</span>
          <span className="text-sm font-semibold text-[#96705B]">Free</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#999] uppercase tracking-wide">Daily Swipes</span>
          <span className="text-sm font-semibold text-[#1A1A1A]">10</span>
        </div>
      </div>

      <Button onClick={handleComplete} fullWidth size="lg">Start Exploring</Button>
    </div>
  );
}
