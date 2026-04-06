import React from 'react'
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';

const fontWeightMap: Record<FontWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

/**
 * NumberImage Component
 * Renders a number (or any text) with an image clipped inside the letterforms.
 * Uses the Hubot font family for consistent typography.
 *
 * @example
 * <NumberImage value={2} imageUrl="https://example.com/texture.jpg" />
 * <NumberImage value={42} imageUrl="/bg.png" size={200} fontWeight="extrabold" />
 * <NumberImage value={7} imageUrl="https://..." size={300} imagePosition="center top" />
 */
export interface NumberImageProps {
  /** The number (or string) to display */
  value: number | string;
  /** URL of the image to use as fill */
  imageUrl: string;
  /** Font size in px. Defaults to 160 */
  size?: number;
  /** Font weight. Defaults to 'extrabold' */
  fontWeight?: FontWeight;
  /** CSS background-position for the image. Defaults to 'center' */
  imagePosition?: string;
  /** CSS background-size for the image. Defaults to 'cover' */
  imageSize?: string;
  /** Optional drop shadow for depth. Defaults to true */
  dropShadow?: boolean;
  /** Optional extra className */
  className?: string;
  /** Optional extra style */
  style?: React.CSSProperties;
}

export const NumberImage: React.FC<NumberImageProps> = ({
  value,
  imageUrl,
  size = 160,
  fontWeight = 'extrabold',
  imagePosition = 'center',
  imageSize = 'cover',
  dropShadow = true,
  className = '',
  style,
}) => {
  return (
    <span
      className={`font-hubot ${className}`}
      style={{
        display: 'inline-block',
        fontSize: `${size}px`,
        fontWeight: fontWeightMap[fontWeight],
        lineHeight: 1,

        /* Image clipped inside the text */
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: imageSize,
        backgroundPosition: imagePosition,
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',

        /* Optional depth shadow */
        filter: dropShadow
          ? 'drop-shadow(0 4px 16px rgba(0,0,0,0.35))'
          : undefined,

        /* Prevent layout weirdness */
        userSelect: 'none',

        ...style,
      }}
    >
      {value}
    </span>
  );
};

export default NumberImage;
