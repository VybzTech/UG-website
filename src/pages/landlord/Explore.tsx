import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Heart, X, Star } from 'lucide-react';
import ScreenHeader from '@/components/common/ScreenHeader';
import EmptyState from '@/components/common/EmptyState';
import { useLandlordStore } from '@/store/useLandlordStore';
import { useAppStore } from '@/store/useAppStore';
import type { TenantProfile } from '@/types/profiles';

const MOCK_TENANTS: TenantProfile[] = [
  {
    id: 'mt1', supabaseId: 'sub_mt1', email: 'adeola@example.com', phone: '+234 801 111 2222',
    firstName: 'Adeola', lastName: 'Balogun', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    gender: 'FEMALE', role: 'TENANT', roles: ['TENANT'], primaryRole: 'TENANT',
    profileStatus: 'VERIFIED', verificationStatus: 'VERIFIED', bio: 'Marketing professional seeking a comfortable home.',
    preferredLocation: 'Lekki', tier: 'PRO', createdAt: '2024-01-10', age: 27, occupation: 'Marketing Manager',
    company: 'Pulse Nigeria', income: 650000, incomeVerified: true, verified: true,
    budgetMin: 1000000, budgetMax: 3000000, preferredLocations: ['Lekki', 'Victoria Island'],
    preferredBedrooms: 2, preferredAmenities: ['WiFi', 'AC', 'Security'], totalLikes: 8, totalMatches: 3, rating: 4.7, responseRate: 92,
  },
  {
    id: 'mt2', supabaseId: 'sub_mt2', email: 'chidi@example.com', phone: '+234 802 333 4444',
    firstName: 'Chidi', lastName: 'Nnamdi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    gender: 'MALE', role: 'TENANT', roles: ['TENANT'], primaryRole: 'TENANT',
    profileStatus: 'VERIFIED', verificationStatus: 'VERIFIED', bio: 'Software developer looking for a quiet workspace-friendly apartment.',
    preferredLocation: 'Yaba', tier: 'FREE', createdAt: '2024-02-05', age: 31, occupation: 'Software Developer',
    company: 'Andela', income: 900000, incomeVerified: true, verified: true,
    budgetMin: 800000, budgetMax: 2500000, preferredLocations: ['Yaba', 'Surulere', 'Gbagada'],
    preferredBedrooms: 2, preferredAmenities: ['WiFi', 'Generator', 'Parking'], totalLikes: 14, totalMatches: 5, rating: 4.5, responseRate: 88,
  },
  {
    id: 'mt3', supabaseId: 'sub_mt3', email: 'kemi@example.com', phone: '+234 803 555 6666',
    firstName: 'Kemi', lastName: 'Adeyemi', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    gender: 'FEMALE', role: 'TENANT', roles: ['TENANT'], primaryRole: 'TENANT',
    profileStatus: 'VERIFIED', verificationStatus: 'VERIFIED', bio: 'Doctor seeking a premium apartment close to the hospital.',
    preferredLocation: 'Ikoyi', tier: 'PREMIUM', createdAt: '2024-01-20', age: 34, occupation: 'Medical Doctor',
    company: 'Lagos University Teaching Hospital', income: 1200000, incomeVerified: true, verified: true,
    budgetMin: 2000000, budgetMax: 6000000, preferredLocations: ['Ikoyi', 'Victoria Island', 'Lekki'],
    preferredBedrooms: 3, preferredAmenities: ['WiFi', 'AC', 'Pool', 'Gym', 'Security'], totalLikes: 22, totalMatches: 8, rating: 4.9, responseRate: 95,
  },
  {
    id: 'mt4', supabaseId: 'sub_mt4', email: 'tunde@example.com', phone: '+234 804 777 8888',
    firstName: 'Tunde', lastName: 'Bakare', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    gender: 'MALE', role: 'TENANT', roles: ['TENANT'], primaryRole: 'TENANT',
    profileStatus: 'PENDING', verificationStatus: 'PENDING', bio: 'Young entrepreneur looking for a vibrant neighbourhood.',
    preferredLocation: 'Ikeja', tier: 'FREE', createdAt: '2024-03-01', age: 25, occupation: 'Entrepreneur',
    company: 'Self-employed', income: 400000, incomeVerified: false, verified: false,
    budgetMin: 500000, budgetMax: 1200000, preferredLocations: ['Ikeja', 'Maryland', 'Ogba'],
    preferredBedrooms: 1, preferredAmenities: ['WiFi', 'Security'], totalLikes: 3, totalMatches: 1, rating: 4.2, responseRate: 70,
  },
  {
    id: 'mt5', supabaseId: 'sub_mt5', email: 'ngozi@example.com', phone: '+234 805 999 0000',
    firstName: 'Ngozi', lastName: 'Okafor', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400',
    gender: 'FEMALE', role: 'TENANT', roles: ['TENANT'], primaryRole: 'TENANT',
    profileStatus: 'VERIFIED', verificationStatus: 'VERIFIED', bio: 'Banker relocating to Lagos mainland for work.',
    preferredLocation: 'Surulere', tier: 'PRO', createdAt: '2024-02-15', age: 29, occupation: 'Investment Banker',
    company: 'GTBank', income: 1500000, incomeVerified: true, verified: true,
    budgetMin: 1500000, budgetMax: 4000000, preferredLocations: ['Surulere', 'Yaba', 'Ikoyi'],
    preferredBedrooms: 2, preferredAmenities: ['WiFi', 'AC', 'Gym', 'Parking'], totalLikes: 18, totalMatches: 6, rating: 4.8, responseRate: 96,
  },
];

function formatBudget(amount: number): string {
  if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M`;
  if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K`;
  return amount.toString();
}

function TenantSwipeCard({ tenant, onSwipe, isTop }: { tenant: TenantProfile; onSwipe: (action: 'LIKE' | 'DISLIKE' | 'FAVORITE') => void; isTop: boolean }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-20, 0, 20]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  function handleDragEnd(_: unknown, info: { offset: { x: number }; velocity: { x: number } }) {
    const threshold = 120;
    if (info.offset.x > threshold || info.velocity.x > 500) {
      onSwipe('LIKE');
    } else if (info.offset.x < -threshold || info.velocity.x < -500) {
      onSwipe('DISLIKE');
    }
  }

  if (!isTop) {
    return (
      <motion.div className="absolute inset-0 rounded-3xl overflow-hidden bg-white shadow-lg border border-[#F0F0F0]" style={{ scale: 0.95, y: 10 }}>
        <div className="h-full bg-gradient-to-b from-gray-100 to-gray-50" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 rounded-3xl overflow-hidden bg-white shadow-xl border border-[#F0F0F0] cursor-grab active:cursor-grabbing"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Like/Nope overlays */}
      <motion.div className="absolute top-6 left-6 z-20 border-4 border-green-500 rounded-lg px-4 py-1 -rotate-12" style={{ opacity: likeOpacity }}>
        <span className="text-green-500 font-black text-2xl">ACCEPT</span>
      </motion.div>
      <motion.div className="absolute top-6 right-6 z-20 border-4 border-red-500 rounded-lg px-4 py-1 rotate-12" style={{ opacity: nopeOpacity }}>
        <span className="text-red-500 font-black text-2xl">DECLINE</span>
      </motion.div>

      {/* Tenant photo */}
      <div className="relative h-[55%] bg-gradient-to-br from-[#FFCA08]/20 to-[#1A1A1A]/5">
        {tenant.avatar ? (
          <img src={tenant.avatar} alt={tenant.firstName} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FFCA08]/10">
            <span className="text-7xl font-bold text-[#FFCA08]">{tenant.firstName[0]}{tenant.lastName[0]}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
        <div className="absolute bottom-4 left-5 right-5">
          <div className="flex items-center gap-2">
            <h2 className="text-white text-2xl font-bold">{tenant.firstName} {tenant.lastName}</h2>
            {tenant.age && <span className="text-white/80 text-lg">{tenant.age}</span>}
            {tenant.verified && (
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tenant info */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-[#666]">
          <Briefcase size={16} />
          <span className="text-sm font-medium">{tenant.occupation}</span>
          {tenant.company && <span className="text-xs text-[#999]">at {tenant.company}</span>}
        </div>

        <div className="flex items-center gap-2 text-[#666]">
          <DollarSign size={16} />
          <span className="text-sm font-medium">
            Budget: NGN {formatBudget(tenant.budgetMin || 0)} - {formatBudget(tenant.budgetMax || 0)}/yr
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#666]">
          <MapPin size={16} />
          <span className="text-sm">{tenant.preferredLocations?.join(', ') || tenant.preferredLocation}</span>
        </div>

        {tenant.preferredAmenities && tenant.preferredAmenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tenant.preferredAmenities.slice(0, 5).map((a) => (
              <span key={a} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#FFCA08]/10 text-[#1A1A1A]">{a}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function LandlordExplore() {
  const { myListings } = useLandlordStore();
  const { initializeMockData } = useAppStore();
  const [tenants, setTenants] = useState<TenantProfile[]>(MOCK_TENANTS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasListings = myListings.length > 0;

  useEffect(() => {
    initializeMockData();
  }, [initializeMockData]);

  // Even without real listings, let the user browse mock tenants for demo purposes
  const showSwiper = true;

  function handleSwipe(action: 'LIKE' | 'DISLIKE' | 'FAVORITE') {
    setCurrentIndex((prev) => prev + 1);
  }

  const visibleTenants = tenants.slice(currentIndex, currentIndex + 2);
  const allSwiped = currentIndex >= tenants.length;

  if (!hasListings && !showSwiper) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        <ScreenHeader firstText="Browse " secondText="Tenants" />
        <EmptyState
          icon="🏠"
          title="Create your first listing to start browsing tenants"
          message="Add a property listing to begin matching with potential tenants."
          actionLabel="Create Listing"
          onAction={() => window.location.href = '/landlord/create-listing'}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <ScreenHeader firstText="Browse " secondText="Tenants" />

      {!hasListings && (
        <div className="mx-4 mb-3 p-3 bg-[#FFCA08]/10 border border-[#FFCA08]/30 rounded-xl">
          <p className="text-xs text-[#1A1A1A] font-medium">Create your first listing to start browsing tenants. Showing demo tenants for now.</p>
        </div>
      )}

      {allSwiped ? (
        <EmptyState
          icon="🎉"
          title="You've seen all tenants"
          message="Check back later for new tenant profiles. We'll notify you when there are new matches!"
        />
      ) : (
        <>
          {/* Swipe card area */}
          <div className="relative mx-4 h-[520px]">
            <AnimatePresence>
              {visibleTenants.map((tenant, i) => (
                <TenantSwipeCard
                  key={tenant.id}
                  tenant={tenant}
                  onSwipe={handleSwipe}
                  isTop={i === 0}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-5 mt-6 pb-6">
            <button
              onClick={() => handleSwipe('DISLIKE')}
              className="w-16 h-16 rounded-full bg-white border border-[#E0E0E0] shadow-lg flex items-center justify-center text-[#F44336] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <X size={28} />
            </button>
            <button
              onClick={() => handleSwipe('FAVORITE')}
              className="w-20 h-20 rounded-full bg-[#FFCA08] shadow-xl flex items-center justify-center text-[#1A1A1A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Star size={32} fill="currentColor" />
            </button>
            <button
              onClick={() => handleSwipe('LIKE')}
              className="w-16 h-16 rounded-full bg-white border border-[#E0E0E0] shadow-lg flex items-center justify-center text-[#4CAF50] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Heart size={28} fill="currentColor" />
            </button>
          </div>

          {/* Progress */}
          <div className="text-center pb-4">
            <span className="text-xs text-[#999]">{currentIndex + 1} of {tenants.length} tenants</span>
          </div>
        </>
      )}
    </div>
  );
}
