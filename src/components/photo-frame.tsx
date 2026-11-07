import { useState } from 'react';
import { Image } from 'lucide-react';

interface PhotoFrameProps {
  src?: string;
  alt: string;
  caption: string;
  className?: string;
}

/** Supply a local public/ image URL to replace the reserved photo area. */
export function PhotoFrame({ src, alt, caption, className = '' }: PhotoFrameProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const hasImage = src && failedSrc !== src;

  return (
    <figure className={`photo-frame ${className}`}>
      <div className="photo-window">
        {hasImage ? (
          <img src={src} alt={alt} onError={() => setFailedSrc(src)} />
        ) : (
          <div className="photo-placeholder" role="img" aria-label={`Espaço reservado: ${alt}`}>
            <Image size={28} strokeWidth={1} aria-hidden="true" />
            <span>{alt}</span>
          </div>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
