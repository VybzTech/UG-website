import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Heart, X, Star, Undo2, SlidersHorizontal } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useSwipeStore } from '@/store/useSwipeStore';
import ScreenHeader from '@/components/common/ScreenHeader';

export default function TenantExplore() {
  const navigate = useNavigate();
  const properties = useAppStore((s) => s.properties);
  const { currentIndex, recordSwipe, undoLastSwipe, isPropertySwiped } = useSwipeStore();

  // Filter out already-swiped properties
  const availableProperties = properties.filter((p) => !isPropertySwiped(p.id));
  const currentProperty = availableProperties[0];

  const handleSwipe = useCallback(
    (action: 'LIKE' | 'DISLIKE' | 'FAVORITE') => {
      if (!currentProperty) return;
      recordSwipe(currentProperty.id, action);
    },
    [currentProperty, recordSwipe],
  );

  const handleUndo = useCallback(() => {
    undoLastSwipe();
  }, [undoLastSwipe]);

  if (!currentProperty) {
    return (
      <div className="p-6">
        <ScreenHeader
          firstText="Explore"
          secondText=" Properties"
          action={{ icon: SlidersHorizontal, onClick: () => navigate('/tenant/preferences') }}
        />
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">🎉</span>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">All Caught Up!</h2>
          <p className="text-[#666] max-w-sm mb-6">
            You've seen all available properties. Check back later for new listings.
          </p>
          <button
            onClick={() => useSwipeStore.getState().resetSwipes()}
            className="px-6 py-3 bg-[#FFCA08] text-[#1A1A1A] rounded-xl font-semibold cursor-pointer hover:bg-[#E6BF22] transition-colors"
          >
            Reset & Browse Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <ScreenHeader
        firstText="Explore"
        secondText=" Properties"
        action={{ icon: SlidersHorizontal, onClick: () => navigate('/tenant/preferences') }}
      />

      {/* Swipe count */}
      <p className="text-sm text-[#666] text-center mb-4">
        {availableProperties.length} properties remaining
      </p>

      {/* Card Stack */}
      <div className="relative h-[500px] mb-6">
        <AnimatePresence>
          {availableProperties.slice(0, 2).map((property, i) => (
            <SwipeCard
              key={property.id}
              property={property}
              isTop={i === 0}
              onSwipe={handleSwipe}
              onViewDetail={() => navigate(`/tenant/property/${property.id}`)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleUndo}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-[#b1836a] text-white hover:scale-105 transition-all cursor-pointer"
        >
          <Undo2 size={18} />
        </button>
        <button
          onClick={() => handleSwipe('DISLIKE')}
          className="w-[68px] h-[68px] rounded-full bg-white border border-[#E0E0E0] shadow-lg flex items-center justify-center text-[#F44336] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <X size={28} />
        </button>
        <button
          onClick={() => handleSwipe('FAVORITE')}
          className="w-[84px] h-[84px] rounded-full bg-[#FFCA08] shadow-xl flex items-center justify-center text-[#1A1A1A] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Star size={32} fill="currentColor" />
        </button>
        <button
          onClick={() => handleSwipe('LIKE')}
          className="w-[68px] h-[68px] rounded-full bg-white border border-[#E0E0E0] shadow-lg flex items-center justify-center text-[#4CAF50] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Heart size={28} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SwipeCard                                                         */
/* ------------------------------------------------------------------ */

function SwipeCard({
  property,
  isTop,
  onSwipe,
  onViewDetail,
}: {
  property: any;
  isTop: boolean;
  onSwipe: (a: 'LIKE' | 'DISLIKE' | 'FAVORITE') => void;
  onViewDetail: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 120) onSwipe('LIKE');
    else if (info.offset.x < -120) onSwipe('DISLIKE');
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, rotate, zIndex: isTop ? 10 : 0 }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      initial={isTop ? { scale: 1 } : { scale: 0.95 }}
      animate={isTop ? { scale: 1 } : { scale: 0.95 }}
      exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
    >
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white"
        onClick={isTop ? onViewDetail : undefined}
      >
        {/* Image */}
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover"
        />

        {/* LIKE overlay */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-8 left-8 border-4 border-[#4CAF50] rounded-xl px-4 py-2 -rotate-12"
        >
          <span className="text-[#4CAF50] text-3xl font-extrabold">LIKE</span>
        </motion.div>

        {/* NOPE overlay */}
        <motion.div
          style={{ opacity: nopeOpacity }}
          className="absolute top-8 right-8 border-4 border-[#F44336] rounded-xl px-4 py-2 rotate-12"
        >
          <span className="text-[#F44336] text-3xl font-extrabold">NOPE</span>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#FFCA08] font-extrabold text-2xl">
              {property.price >= 1_000_000
                ? `\u20A6${(property.price / 1_000_000).toFixed(1)}M`
                : `\u20A6${(property.price / 1_000).toFixed(0)}K`}
            </span>
            <span className="text-white/70 text-sm">/year</span>
          </div>
          <h3 className="text-lg font-bold mb-1">{property.name}</h3>
          <div className="flex items-center gap-1 text-white/80 text-sm mb-2">
            <MapPin size={14} />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1">
              <Bed size={14} /> {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath size={14} /> {property.bathrooms} Baths
            </span>
          </div>
          {property.landlord?.verified && (
            <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Landlord
            </span>
          )}
          <p className="mt-2 text-xs text-white/50">Tap for details</p>
        </div>
      </div>
    </motion.div>
  );
}
