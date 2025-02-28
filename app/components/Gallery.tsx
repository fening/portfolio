'use client'

import { useState } from 'react'
import Image from 'next/image'

type GalleryProps = {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main large image */}
      <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        {images[selectedImage].title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <h4 className="text-lg font-medium">{images[selectedImage].title}</h4>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-video rounded-md overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all
              ${selectedImage === index ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'}`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
