import EmptyState from '@/components/common/EmptyState';
import { useNavigate } from 'react-router-dom';

export default function LandlordChat() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-bold text-[#1A1A1A] mb-6">Messages</h1>
      <EmptyState icon="💬" title="No Messages Yet" message="Start chatting with matched tenants." actionLabel="View Matches" onAction={() => navigate('/landlord/matches')} />
    </div>
  );
}
