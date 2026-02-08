import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Heart, Star, Trash2 } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useSwipeStore } from '@/store/useSwipeStore';
import ScreenHeader from '@/components/common/ScreenHeader';
import FilterTabs from '@/components/common/FilterTabs';
import EmptyState from '@/components/common/EmptyState';
import Card from '@/components/ui/Card';

const TABS = ['All Likes', 'Favorites'];

export default function TenantHomes() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const properties = useAppStore((s) => s.properties);
  const { likes, favorites } = useSwipeStore();

  const likedProperties = properties.filter((p) => likes.includes(p.id));
  const favoritedProperties = properties.filter((p) => favorites.includes(p.id));
  const allSaved = [...new Map([...likedProperties, ...favoritedProperties].map((p) => [p.id, p])).values()];

  const displayed = activeTab === 'Favorites' ? favoritedProperties : allSaved;

  const counts: Record<string, number> = {
    'All Likes': allSaved.length,
    Favorites: favoritedProperties.length,
  };

  return (
    <div className="p-6">
      <ScreenHeader firstText="My" secondText=" Homes" />

      <div className="mb-6">
        <FilterTabs filters={TABS} active={activeTab} onChange={setActiveTab} counts={counts} />
      </div>

      {displayed.length === 0 ? (
        <EmptyState
          icon={activeTab === 'Favorites' ? '⭐' : '💛'}
          title={activeTab === 'Favorites' ? 'No Favorites Yet' : 'No Liked Properties'}
          message="Start swiping to save properties you love. They will appear here."
          actionLabel="Start Exploring"
          onAction={() => navigate('/tenant/explore')}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onClick={() => navigate(`/tenant/property/${property.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PropertyCard                                                      */
/* ------------------------------------------------------------------ */

function PropertyCard({
  property,
  isFavorite,
  onClick,
}: {
  property: any;
  isFavorite: boolean;
  onClick: () => void;
}) {
  return (
    <Card hover className="!p-0 overflow-hidden" onClick={onClick}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {/* Favorite badge */}
        {isFavorite && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFCA08] flex items-center justify-center shadow-md">
            <Star size={14} fill="#1A1A1A" className="text-[#1A1A1A]" />
          </div>
        )}
        {/* Price tag */}
        <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-bold">
          {property.price >= 1_000_000
            ? `\u20A6${(property.price / 1_000_000).toFixed(1)}M`
            : `\u20A6${(property.price / 1_000).toFixed(0)}K`}
          <span className="text-white/60 text-xs font-normal">/yr</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-[#1A1A1A] mb-1 truncate">{property.name}</h3>
        <div className="flex items-center gap-1 text-[#666] text-xs mb-3">
          <MapPin size={12} />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#999] mb-3">
          <span className="flex items-center gap-1">
            <Bed size={12} /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={12} /> {property.bathrooms}
          </span>
          <span>{property.squareFeet} sqft</span>
        </div>

        {/* Landlord */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F0F0F0]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#FFCA08] flex items-center justify-center text-[10px] font-bold text-[#1A1A1A]">
              {property.landlord?.name?.[0] || 'L'}
            </div>
            <span className="text-xs text-[#666] truncate max-w-[120px]">
              {property.landlord?.name}
            </span>
          </div>
          {property.landlord?.verified && (
            <span className="text-[10px] text-[#4CAF50] font-medium flex items-center gap-0.5">
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
              Verified
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
