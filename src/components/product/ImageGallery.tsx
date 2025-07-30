// components/ImageGallery.tsx
import { useState } from 'react';

interface Product {
  name: string;
  images: string[];
  discount: number;
}

interface ImageGalleryProps {
  product: Product;
}

export default function ImageGallery({ product }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square bg-white rounded-lg border overflow-hidden">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain p-8 w-full h-full"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Thumbnail Images */}
        <div className="flex space-x-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-colors ${
                selectedImage === index ? "border-green-600" : "border-gray-200"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                width={80}
                height={80}
                className="object-contain p-2 w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
  );
}