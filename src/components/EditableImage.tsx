import React from 'react';

interface EditableImageProps {
  storageKey?: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  containerClassName?: string;
  compact?: boolean;
  buttonPosition?: 'top-right' | 'bottom-right' | 'top-left';
  aspectRatioClass?: string;
  children?: React.ReactNode;
  loading?: 'lazy' | 'eager';
}

export const EditableImage: React.FC<EditableImageProps> = ({
  storageKey,
  defaultSrc,
  alt,
  className = '',
  imgClassName = '',
  containerClassName = '',
  aspectRatioClass = '',
  children,
  loading = 'lazy',
}) => {
  const currentSrc = React.useMemo(() => {
    if (!storageKey) return defaultSrc;
    try {
      const saved = localStorage.getItem(`custom_img_${storageKey}`);
      return saved || defaultSrc;
    } catch {
      return defaultSrc;
    }
  }, [storageKey, defaultSrc]);

  return (
    <div
      className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName} ${className}`}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full ${imgClassName}`}
        referrerPolicy="no-referrer"
        loading={loading}
        decoding="async"
        style={{
          imageRendering: '-webkit-optimize-contrast' as React.CSSProperties['imageRendering'],
        }}
      />
      {children}
    </div>
  );
};
