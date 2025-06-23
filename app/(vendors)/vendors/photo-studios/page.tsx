'use client';
// This page is for displaying photo studios with ratings and images

import React, { useRef } from 'react';
import Image from 'next/image';

type Studio = {
  id: number;
  name: string;
  rating: number; // 0 to 10
  location: string;
  imageUrl: string;
};

const studios: Studio[] = [
  {
    id: 1,
    name: 'Luxe Photography',
    rating: 9.8,
    location: 'New York, NY',
    imageUrl: 'https://picsum.photos/id/1011/600/400',
  },
  {
    id: 2,
    name: 'Golden Hour Studio',
    rating: 9.4,
    location: 'Los Angeles, CA',
    imageUrl: 'https://picsum.photos/id/1012/600/400',
  },
  {
    id: 3,
    name: 'Crystal Lens',
    rating: 9.2,
    location: 'San Francisco, CA',
    imageUrl: 'https://picsum.photos/id/1019/600/400',
  },
  {
    id: 4,
    name: 'Focus Point',
    rating: 9.1,
    location: 'Seattle, WA',
    imageUrl: 'https://picsum.photos/id/1020/600/400',
  },
  {
    id: 5,
    name: 'Shutter Magic',
    rating: 9.0,
    location: 'Boston, MA',
    imageUrl: 'https://picsum.photos/id/1021/600/400',
  },
  {
    id: 6,
    name: 'Pixel Perfect',
    rating: 8.6,
    location: 'Chicago, IL',
    imageUrl: 'https://picsum.photos/id/1013/600/400',
  },
  {
    id: 7,
    name: 'Flashpoint Photos',
    rating: 7.9,
    location: 'Miami, FL',
    imageUrl: 'https://picsum.photos/id/1015/600/400',
  },
  {
    id: 8,
    name: 'Shutter Studio',
    rating: 6.8,
    location: 'Austin, TX',
    imageUrl: 'https://picsum.photos/id/1016/600/400',
  },
  {
    id: 9,
    name: 'Lenscape',
    rating: 6.4,
    location: 'Denver, CO',
    imageUrl: 'https://picsum.photos/id/1024/600/400',
  },
  {
    id: 10,
    name: 'Frame & Focus',
    rating: 5.9,
    location: 'Portland, OR',
    imageUrl: 'https://picsum.photos/id/1025/600/400',
  },
];

function StarRating({ rating }: { rating: number }) {
  const stars = (rating / 10) * 5;
  const fullStars = Math.floor(stars);
  const halfStar = stars - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5 text-yellow-400" aria-label={`Rating: ${rating} out of 10`}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#half-grad)" d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
        </svg>
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-5 h-5 stroke-yellow-400 stroke-1 fill-transparent"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
          </svg>
        ))}
    </div>
  );
}

export default function PhotoStudiosPage() {
  const topRated = studios.filter((s) => s.rating >= 9);
  const others = studios.filter((s) => s.rating < 9);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
      <h1 className="text-4xl font-extrabold mb-10 text-purple-700 tracking-wide">Photo Studios</h1>

      {/* Top Rated with horizontal scroll */}
      <section className="mb-16 relative">
        <h2 className="text-2xl font-semibold mb-6 border-b-4 border-purple-600 inline-block pb-1">
          Top Rated Studios
        </h2>

        {/* Scroll container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            aria-label="Scroll left"
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-purple-100 transition"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-10"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {topRated.map(({ id, name, rating, location, imageUrl }) => (
              <div
                key={id}
                className="min-w-[280px] rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer bg-white scroll-snap-align-start"
                tabIndex={0}
                aria-label={`${name}, located in ${location}, rating ${rating} out of 10`}
              >
                <div className="relative w-[280px] h-40">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                    priority={false}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{name}</h3>
                  <p className="text-gray-600 mb-2">{location}</p>
                  <StarRating rating={rating} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-white rounded-full shadow-md p-2 hover:bg-purple-100 transition"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Other Studios - grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b-4 border-gray-300 inline-block pb-1">
          Other Studios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {others.map(({ id, name, rating, location, imageUrl }) => (
            <div
              key={id}
              className="rounded-xl shadow-md overflow-hidden border border-gray-300 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer bg-white"
              tabIndex={0}
              aria-label={`${name}, located in ${location}, rating ${rating} out of 10`}
            >
              <div className="relative w-full h-56">
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                <p className="text-gray-600 mb-3">{location}</p>
                <StarRating rating={rating} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
