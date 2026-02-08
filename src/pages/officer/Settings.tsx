import Card from '@/components/ui/Card';
import Toggle from '@/components/ui/Toggle';
import { useState } from 'react';

export default function OfficerSettings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [autoAssign, setAutoAssign] = useState(false);
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-bold text-[#1A1A1A]">Settings</h1>
      <Card className="space-y-5">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Notifications</h3>
        <Toggle label="Email Notifications" checked={emailNotifs} onChange={setEmailNotifs} />
        <Toggle label="Push Notifications" checked={pushNotifs} onChange={setPushNotifs} />
      </Card>
      <Card className="space-y-5">
        <h3 className="text-sm font-bold text-[#1A1A1A]">Review Settings</h3>
        <Toggle label="Auto-assign verifications" checked={autoAssign} onChange={setAutoAssign} />
      </Card>
    </div>
  );
}
