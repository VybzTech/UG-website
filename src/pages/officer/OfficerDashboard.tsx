import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  MapPin,
  Home,
  TrendingUp,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  XCircle,
  MoreVertical,
  Filter,
  Download,
  LogOut,
  Menu,
  X,
  DollarSign,
  Star,
  Activity,
  Globe,
  Lock,
  Radio,
} from 'lucide-react';

const OfficerDashboard = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all');
  const [filterModal, setFilterModal] = useState(false);

  // Mock Data
  const dashboardStats = {
    totalUsers: 12450,
    totalListings: 3890,
    activeListings: 2650,
    totalMatches: 5420,
    pendingReviews: 234,
    fraudAlerts: 12,
  };

  const users = [
    {
      id: 1,
      name: 'Kunle Adebayo',
      email: 'kunle@example.com',
      type: 'Landlord',
      tier: 'Pro',
      status: 'active',
      joinDate: '2024-01-15',
      listings: 5,
      verified: true,
    },
    {
      id: 2,
      name: 'Chinedu Okonkwo',
      email: 'chinedu@example.com',
      type: 'Tenant',
      tier: 'Free',
      status: 'active',
      joinDate: '2024-02-01',
      listings: 0,
      verified: false,
    },
    {
      id: 3,
      name: 'Zainab Mohammed',
      email: 'zainab@example.com',
      type: 'Agent',
      tier: 'Premium',
      status: 'suspended',
      joinDate: '2024-01-20',
      listings: 12,
      verified: true,
    },
  ];

  const listings = [
    {
      id: 1,
      title: '2-Bedroom Apartment, Lekki',
      landlord: 'Kunle Adebayo',
      price: 450000,
      status: 'active',
      views: 1234,
      likes: 89,
      matches: 23,
      verified: true,
    },
    {
      id: 2,
      title: '3-Bedroom House, Ikoyi',
      landlord: 'Zainab Mohammed',
      price: 800000,
      status: 'pending',
      views: 456,
      likes: 34,
      matches: 8,
      verified: false,
    },
    {
      id: 3,
      title: 'Studio Apartment, VI',
      landlord: 'John Doe',
      price: 250000,
      status: 'inactive',
      views: 89,
      likes: 5,
      matches: 0,
      verified: true,
    },
  ];

  const regions = [
    {
      id: 1,
      region: 'Lagos',
      lgas: 20,
      users: 5430,
      listings: 1230,
      matches: 2340,
      officer: 'Kunle Adebayo',
    },
    {
      id: 2,
      region: 'Abuja',
      lgas: 6,
      users: 3210,
      listings: 890,
      matches: 1560,
      officer: 'Zainab Mohammed',
    },
    {
      id: 3,
      region: 'Port Harcourt',
      lgas: 3,
      users: 1280,
      listings: 340,
      matches: 680,
      officer: 'Chinedu Okonkwo',
    },
  ];

  const matches = [
    {
      id: 1,
      tenant: 'David Okoye',
      landlord: 'Kunle Adebayo',
      property: '2-Bedroom Apartment',
      status: 'matched',
      rating: 4.8,
      date: '2024-02-15',
    },
    {
      id: 2,
      tenant: 'Mary Smith',
      landlord: 'Zainab Mohammed',
      property: '3-Bedroom House',
      status: 'pending',
      rating: null,
      date: '2024-02-18',
    },
  ];

  const tiers = [
    {
      id: 1,
      name: 'Free',
      price: 0,
      users: 4230,
      features: ['Browse properties', '10 swipes/day', 'Basic profile'],
      color: 'gray',
    },
    {
      id: 2,
      name: 'Pro',
      price: 4950,
      users: 2150,
      features: ['200 swipes/day', 'Favorites', 'Advanced filters'],
      color: 'blue',
    },
    {
      id: 3,
      name: 'Premium',
      price: 38250,
      users: 890,
      features: ['Unlimited swipes', 'Priority support', 'Premium badge'],
      color: 'yellow',
    },
  ];

  const fraudAlerts = [
    {
      id: 1,
      user: 'Suspect User #123',
      type: 'Duplicate Account',
      severity: 'high',
      date: '2024-02-18',
      reason: 'Multiple accounts from same IP',
    },
    {
      id: 2,
      user: 'John Doe',
      type: 'Payment Decline',
      severity: 'medium',
      date: '2024-02-17',
      reason: '3 failed payment attempts',
    },
  ];

  // Sidebar Navigation
  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'listings', label: 'Listings', icon: Home },
    { id: 'regions', label: 'Regions', icon: MapPin },
    { id: 'matches', label: 'Matches', icon: Activity },
    { id: 'tiers', label: 'Tiers', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800',
      matched: 'bg-green-100 text-green-800',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || 'bg-gray-100'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Stat Card Component
  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-lg shadow p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value.toLocaleString()}</p>
        </div>
        <Icon size={32} color={color} className="opacity-20" />
      </div>
    </div>
  );

  // Table Header
  const TableHeader = ({ columns }) => (
    <thead className="bg-gray-50 border-b">
      <tr>
        {columns.map((col) => (
          <th
            key={col}
            className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );

  // Render Modules
  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 text-sm mt-1">Welcome back, Officer Admin</p>
        </div>
        <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={Users}
          label="Total Users"
          value={dashboardStats.totalUsers}
          color="#3B82F6"
        />
        <StatCard
          icon={Home}
          label="Total Listings"
          value={dashboardStats.totalListings}
          color="#10B981"
        />
        <StatCard
          icon={Activity}
          label="Active Listings"
          value={dashboardStats.activeListings}
          color="#8B5CF6"
        />
        <StatCard
          icon={TrendingUp}
          label="Total Matches"
          value={dashboardStats.totalMatches}
          color="#F59E0B"
        />
        <StatCard
          icon={AlertCircle}
          label="Pending Reviews"
          value={dashboardStats.pendingReviews}
          color="#EF4444"
        />
        <StatCard
          icon={Lock}
          label="Fraud Alerts"
          value={dashboardStats.fraudAlerts}
          color="#DC2626"
        />
      </div>

      {/* Charts & Quick Access */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-200">
              <Users size={20} className="text-blue-600" />
              <span className="text-gray-900 font-medium">Verify User KYC</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-200">
              <Home size={20} className="text-green-600" />
              <span className="text-gray-900 font-medium">Review Listings</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-200">
              <AlertCircle size={20} className="text-red-600" />
              <span className="text-gray-900 font-medium">Handle Fraud Alerts</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition border border-gray-200">
              <Activity size={20} className="text-purple-600" />
              <span className="text-gray-900 font-medium">Resolve Disputes</span>
            </button>
          </div>
        </div>

        {/* Recent Fraud Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Alerts</h2>
            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View All</a>
          </div>
          <div className="space-y-3">
            {fraudAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{alert.user}</p>
                  <p className="text-xs text-gray-600">{alert.reason}</p>
                </div>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded">
                  {alert.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
          <Plus size={20} /> Add User
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b">
        {['all', 'tenants', 'landlords', 'agents', 'dummy'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-3 font-semibold transition ${
              selectedTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setFilterModal(true)}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
        >
          <Filter size={20} /> Filter
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
          <Download size={20} /> Export
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <TableHeader columns={['Name', 'Email', 'Type', 'Tier', 'Verified', 'Status', 'Actions']} />
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-600">Joined {user.joinDate}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {user.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{user.tier}</td>
                <td className="px-6 py-4">
                  {user.verified ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : (
                    <XCircle size={20} className="text-gray-300" />
                  )}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={user.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Eye size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Edit size={18} className="text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <MoreVertical size={18} className="text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderListings = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Listings Management</h1>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2">
          <Plus size={20} /> Add Listing
        </button>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-4 border-b overflow-x-auto">
        {['all', 'pending', 'active', 'inactive', 'dummy'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-3 font-semibold transition whitespace-nowrap ${
              selectedTab === tab
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search listings..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
          <Filter size={20} /> Filter
        </button>
      </div>

      {/* Listings Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <TableHeader columns={['Title', 'Landlord', 'Price', 'Status', 'Views', 'Likes', 'Matches', 'Actions']} />
          <tbody className="divide-y">
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-900">{listing.title}</p>
                    <p className="text-xs text-gray-600">
                      {listing.verified ? '✓ Verified' : '⚠ Unverified'}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{listing.landlord}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  ₦{listing.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={listing.status} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{listing.views}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{listing.likes}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{listing.matches}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Eye size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <CheckCircle size={18} className="text-green-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderRegions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Regions & LGAs</h1>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition flex items-center gap-2">
          <Plus size={20} /> Add Region
        </button>
      </div>

      {/* Regions Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {regions.map((region) => (
          <div key={region.id} className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
                <p className="text-sm text-gray-600 mt-1">Officer: {region.officer}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded transition">
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded p-3">
                <p className="text-xs text-gray-600">LGAs</p>
                <p className="text-2xl font-bold text-gray-900">{region.lgas}</p>
              </div>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-xs text-gray-600">Users</p>
                <p className="text-2xl font-bold text-gray-900">{region.users.toLocaleString()}</p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-xs text-gray-600">Listings</p>
                <p className="text-2xl font-bold text-gray-900">{region.listings.toLocaleString()}</p>
              </div>
              <div className="bg-orange-50 rounded p-3">
                <p className="text-xs text-gray-600">Matches</p>
                <p className="text-2xl font-bold text-gray-900">{region.matches.toLocaleString()}</p>
              </div>
            </div>

            <button className="w-full mt-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition">
              Manage LGAs
            </button>
          </div>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Globe size={24} className="text-purple-600" />
          Coverage Map
        </h2>
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <Globe size={48} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600">Map integration coming soon</p>
            <p className="text-sm text-gray-500">Google Maps API will show region coverage</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMatches = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Matches & Recommendations</h1>
      </div>

      {/* Match Tabs */}
      <div className="flex gap-4 border-b">
        {['matches', 'recommendations', 'bonuses'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-3 font-semibold transition ${
              selectedTab === tab
                ? 'border-b-2 border-orange-600 text-orange-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Matches Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <TableHeader columns={['Tenant', 'Landlord', 'Property', 'Status', 'Rating', 'Date', 'Actions']} />
          <tbody className="divide-y">
            {matches.map((match) => (
              <tr key={match.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-semibold text-gray-900">{match.tenant}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{match.landlord}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{match.property}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={match.status} />
                </td>
                <td className="px-6 py-4">
                  {match.rating ? (
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900">{match.rating}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">Not rated</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{match.date}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <Eye size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition">
                      <DollarSign size={18} className="text-green-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTiers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Subscription Tiers</h1>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-white rounded-lg shadow overflow-hidden border-t-4"
            style={{ borderColor: tier.color === 'gray' ? '#9CA3AF' : tier.color === 'blue' ? '#3B82F6' : '#FBBF24' }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {tier.price === 0 ? 'Free' : `₦${tier.price.toLocaleString()}`}
                {tier.price > 0 && <span className="text-lg text-gray-600">/month</span>}
              </p>
              <p className="text-sm text-gray-600 mt-2">{tier.users.toLocaleString()} active users</p>

              <div className="mt-6 space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Manage Tier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tier Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tier Settings & Pricing</h2>

        <div className="space-y-6">
          {tiers.map((tier) => (
            <div key={tier.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">{tier.name} Tier</h3>
                <button className="text-blue-600 font-semibold hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Monthly Price (₦)</label>
                  <input
                    type="number"
                    value={tier.price}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Annual Price (₦)</label>
                  <input
                    type="number"
                    value={tier.price * 12 * 0.9} // 10% discount
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max Features</label>
                  <input
                    type="number"
                    defaultValue={tier.features.length}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Platform Name</label>
              <input
                type="text"
                defaultValue="Urban Gravity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Contact Email</label>
              <input
                type="email"
                defaultValue="support@urbangravity.io"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Support Phone</label>
              <input
                type="tel"
                defaultValue="+2348012345678"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Notification Settings</h2>
          <div className="space-y-4">
            {[
              'Email notifications for new fraud alerts',
              'SMS for critical system issues',
              'Daily summary reports',
              'Weekly analytics briefing',
            ].map((setting, idx) => (
              <label key={idx} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                <span className="text-gray-900">{setting}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lock size={24} />
            Security Settings
          </h2>
          <div className="space-y-4">
            <button className="w-full py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
              Change Password
            </button>
            <button className="w-full py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
              Enable Two-Factor Authentication
            </button>
            <button className="w-full py-3 border-2 border-red-300 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition">
              Clear All Sessions
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Save All Changes
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        } overflow-hidden`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && <h2 className="text-xl font-bold">Urban Gravity</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-8 space-y-2 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                  activeModule === item.id
                    ? 'bg-yellow-500 text-gray-900'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="font-semibold">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-3 right-3">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
            <LogOut size={20} />
            {sidebarOpen && <span className="font-semibold">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow">
          <div className="px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Officer Admin Panel</h1>
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
                <Bell size={24} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
              </button>
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                  OA
                </div>
                {sidebarOpen && (
                  <>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Officer Admin</p>
                      <p className="text-xs text-gray-600">Admin</p>
                    </div>
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {activeModule === 'dashboard' && renderDashboard()}
            {activeModule === 'users' && renderUsers()}
            {activeModule === 'listings' && renderListings()}
            {activeModule === 'regions' && renderRegions()}
            {activeModule === 'matches' && renderMatches()}
            {activeModule === 'tiers' && renderTiers()}
            {activeModule === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;