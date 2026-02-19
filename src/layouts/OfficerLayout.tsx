import { Outlet } from 'react-router-dom';
import ugLogo from '@/assets/images/ug-logo.png';

export default function OfficerLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[#F9F2C0] flex flex-col">
      <div className="flex items-center gap-2 p-4">
       {/* TODO: REPLACE WITH EXISITNG COMPONENTS */}
        <img src={ugLogo} alt="Urban Gravity" className="w-9 h-9 object-contain" />
        <span className="font-hubot font-bold text-lg text-secondary">
          Urban<span className="text-primary">Gravity</span>
        </span>
      </div>
       {/* TODO: INCLUDE NAVBAR */}
       {/* TODO: REPLACE WITH MAIN COMPONENTS FROM NAVBAR */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
