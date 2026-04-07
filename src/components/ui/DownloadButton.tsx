import React from 'react';

import AppStoreBadge from '@/assets/images/apps/App-store-Logo.svg';
import GooglePlayBadge from '@/assets/images/apps/Google_Play_Store.svg';
import OptimizedImage from './OptimizedImage';

export type DownloadButtonSize = 'sm' | 'md' | 'lg';
export type DownloadButtonLayout = 'row' | 'column';

interface DownloadButtonProps {
  size?: DownloadButtonSize;
  layout?: DownloadButtonLayout;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  className?: string;
}

const sizeMap: Record<DownloadButtonSize, { width: number; height: number }> = {
  sm: { width: 110, height: 36 },
  md: { width: 140, height: 46 },
  lg: { width: 170, height: 56 },
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
  size = 'md',
  layout = 'row',
  appStoreUrl = '#',
  googlePlayUrl = '#',
  className = '',
}) => {
  const { width, height } = sizeMap[size];

  const badgeStyle: React.CSSProperties = {
    objectFit: 'contain',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    display: 'block',
  };

  const handleEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
    e.currentTarget.style.opacity = '0.85';
  };

  const handleLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.opacity = '1';
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: layout === 'column' ? 'column' : 'row',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
        <OptimizedImage
          src={AppStoreBadge}
          alt="Download on the App Store"
          width={width}
          height={height}
          style={badgeStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}

        />
      </a>
      <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
        <OptimizedImage
          src={GooglePlayBadge}
          alt="Get it on Google Play"
          width={width}
          height={height}
          style={badgeStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          
        />
      </a>
    </div>
  );
};

export default DownloadButton;