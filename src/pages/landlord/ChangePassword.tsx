import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Change Password</h1></div>
      <Card className="space-y-4">
        <Input label="Current Password" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="Enter current password" />
        <Input label="New Password" type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="Enter new password" />
        <Input label="Confirm Password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm new password" />
        <Button fullWidth onClick={() => navigate(-1)}>Update Password</Button>
      </Card>
    </div>
  );
}
