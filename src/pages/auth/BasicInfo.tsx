import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function BasicInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1">Complete your profile</h1>
      <p className="text-sm text-[#666] mb-6">Tell us a bit about yourself</p>

      <div className="flex justify-center mb-6">
        <button className="w-24 h-24 rounded-full bg-[#F5F5F5] border-2 border-dashed border-[#E0E0E0] flex items-center justify-center hover:border-[#FFCA08] transition-colors cursor-pointer">
          <Camera size={28} className="text-[#999]" />
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <Input label="First Name" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input label="Last Name" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input label="Date of Birth" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

        <div>
          <label className="block text-sm font-medium text-[#666] mb-2">Gender</label>
          <div className="flex flex-wrap gap-2">
            {genders.map((g) => (
              <button key={g} onClick={() => setGender(g)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  gender === g ? 'bg-[#FFCA08] text-[#1A1A1A]' : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'
                }`}>{g}</button>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={() => navigate('/preview')} fullWidth size="lg">Continue</Button>
    </div>
  );
}
