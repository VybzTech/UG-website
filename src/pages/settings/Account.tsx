import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function Account() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john@email.com');
  const [phone, setPhone] = useState('+234 801 234 5678');

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer"><ArrowLeft size={20} /></button><h1 className="text-xl font-bold">Account Settings</h1></div>
      <Card className="space-y-4">
        <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Button fullWidth>Save Changes</Button>
      </Card>
    </div>
  );
}
