import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import ugLogo from '@/assets/images/ug-logo.png';
import {
  LayoutDashboard,
  Search,
  Heart,
  Home,
  User,
  Users,
  Building2,
  ListChecks,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

const ROLE_NAV: Record<string, { label: string; path: string; icon: React.ReactNode }[]> = {
  TENANT: [
    { label: 'Explore', path: '/tenant', icon: <Search size={20} /> },
    { label: 'Homes', path: '/tenant/homes', icon: <Heart size={20} /> },
    { label: 'Profile', path: '/tenant/profile', icon: <User size={20} /> },
  ],
  LANDLORD: [
    { label: 'Explore', path: '/landlord', icon: <Search size={20} /> },
    { label: 'Matches', path: '/landlord/matches', icon: <Heart size={20} /> },
    { label: 'Listings', path: '/landlord/listings', icon: <Home size={20} /> },
    { label: 'Profile', path: '/landlord/profile', icon: <User size={20} /> },
  ],
  AGENT: [
    { label: 'Explore', path: '/agent', icon: <Search size={20} /> },
    { label: 'Listings', path: '/agent/listings', icon: <Home size={20} /> },
    { label: 'Profile', path: '/agent/profile', icon: <User size={20} /> },
  ],
  OFFICER: [
    { label: 'Dashboard', path: '/officer', icon: <LayoutDashboard size={20} /> },
    { label: 'Landlords', path: '/officer/landlords', icon: <Building2 size={20} /> },
    { label: 'Tenants', path: '/officer/tenants', icon: <Users size={20} /> },
    { label: 'Listings', path: '/officer/listings', icon: <ListChecks size={20} /> },
    { label: 'Settings', path: '/officer/settings', icon: <Settings size={20} /> },
  ],
};

export default function AppLayout() {
  const currentUser = useAppStore((s) => s.currentUser);
  const logout = useAppStore((s) => s.logout);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role = currentUser?.primaryRole || 'TENANT';
  const navItems = ROLE_NAV[role] || ROLE_NAV.TENANT;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-bg-secondary">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-border transform transition-transform duration-200 lg:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 p-5 border-b border-border">
            <img src={ugLogo} alt="UG" className="w-9 h-9 object-contain" />
            <span className="font-hubot font-bold text-lg text-secondary">
              Urban<span className="text-primary">Gravity</span>
            </span>
          </div>

          {/* User info */}
          <div className="px-5 py-4 border-b border-border-light">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-sm">
                {currentUser?.firstName?.[0] || 'U'}
                {currentUser?.lastName?.[0] || 'G'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-hubot font-semibold text-sm text-text-primary truncate">
                  {currentUser?.firstName || 'User'} {currentUser?.lastName || ''}
                </p>
                <p className="text-xs text-text-tertiary capitalize">{role.toLowerCase()}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === `/${role.toLowerCase()}`}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-hubot font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary-dark'
                      : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-border-light">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-hubot font-medium text-error hover:bg-error/10 w-full transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        {/* Mobile bottom tab bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-primary/20 rounded-t-2xl">
          <div className="flex items-center justify-around py-2 px-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === `/${role.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[10px] font-hubot font-medium transition-colors ${
                    isActive ? 'text-primary-dark' : 'text-text-tertiary'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pb-20 lg:pb-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
