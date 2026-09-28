import React from 'react';

export interface OptimizedPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
}

// Set of chat files that actually have AVIF and WebP counterparts generated in public/assets/chat/
const CHAT_AVIF_AVAILABLE = new Set([
  'chat_evidence_01',
  'chat_evidence_02',
  'chat_evidence_03',
  'chat_evidence_04',
  'chat_kebutuhan_01',
  'chat_kebutuhan_02',
  'chat_kebutuhan_03',
  'chat_kebutuhan_04',
]);

/**
 * OptimizedPicture renders a responsive <picture> element prioritizing AVIF,
 * falling back to WebP, and finally using the original asset (PNG or SVG)
 * as universal fallback.
 *
 * Supports native lazy loading and async decoding by default to prevent
 * downloading non-critical offscreen images on initial page load.
 */
export const OptimizedPicture: React.FC<OptimizedPictureProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  ...props
}) => {
  // Smartphone chat evidence gallery assets
  if (src.startsWith('/assets/chat/') && /\.(svg|avif|webp|png)$/.test(src)) {
    const basePath = src.replace(/\.(svg|avif|webp|png)$/, '');
    const fileName = basePath.split('/').pop() || '';
    const svgSrc = `${basePath}.svg`;

    // Only output <source> tags for formats that actually exist on disk,
    // preventing modern browsers (Chrome/Firefox/Safari) from requesting 404 AVIF files
    if (CHAT_AVIF_AVAILABLE.has(fileName)) {
      const avifSrc = `${basePath}.avif`;
      const webpSrc = `${basePath}.webp`;

      return (
        <picture className="contents">
          <source srcSet={avifSrc} type="image/avif" />
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={svgSrc}
            alt={alt}
            className={className}
            loading={loading}
            decoding={decoding}
            {...props}
          />
        </picture>
      );
    }

    // Direct pristine SVG delivery for all authentic vector chat mockups
    return (
      <img
        src={svgSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    );
  }

  // PADDS screenshots or root evidence assets
  const isPaddsRaster =
    (src.startsWith('/assets/padds/') || src.includes('file_00000000cd2c82078f7d285de6dc39ec')) &&
    /\.(png|avif|webp|svg)$/.test(src);

  if (isPaddsRaster) {
    const basePath = src.replace(/\.(png|avif|webp|svg)$/, '');
    const avifSrc = `${basePath}.avif`;
    const webpSrc = `${basePath}.webp`;
    const pngSrc = `${basePath}.png`;

    return (
      <picture className="contents">
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={pngSrc}
          alt={alt}
          className={className}
          loading={loading}
          decoding={decoding}
          {...props}
        />
      </picture>
    );
  }

  // Fallback direct image tag
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      {...props}
    />
  );
};
