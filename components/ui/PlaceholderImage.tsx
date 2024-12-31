'use client';

import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "custom";
  width?: number;
  height?: number;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "video",
  width,
  height
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-w-1 aspect-h-1",
    video: "aspect-w-16 aspect-h-9",
    custom: ""
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 rounded-lg ${aspectRatioClasses[aspectRatio]} ${className}`}
         style={aspectRatio === "custom" ? { width, height } : {}}>
      {(isLoading || imageError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              {imageError ? "Failed to load image" : "Loading..."}
            </p>
          </div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default PlaceholderImage;