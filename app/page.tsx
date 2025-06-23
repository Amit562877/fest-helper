'use client';
import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const getMockData = (category) => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `${category} Vendor ${i + 1}`,
    rating: (Math.random() * 5).toFixed(1),
    likes: Math.floor(Math.random() * 1000),
    image: `https://picsum.photos/300/200?random=${category}-${i}`,
  }));
};

const Section = ({ title, data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-16 px-4 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 drop-shadow">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full shadow">
            <ChevronLeftIcon className="w-5 h-5 text-purple-700" />
          </button>
          <button onClick={() => scroll('right')} className="p-2 bg-purple-100 hover:bg-purple-200 rounded-full shadow">
            <ChevronRightIcon className="w-5 h-5 text-purple-700" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-[240px] max-w-[260px] bg-white rounded-3xl shadow-lg border border-purple-100 p-4 flex-shrink-0 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="rounded-2xl overflow-hidden mb-3">
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>⭐ {item.rating}</span>
                <span>❤️ {item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="py-10 px-4 sm:px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-purple-700 mb-16 drop-shadow-xl">
          Discover the Best for Your Fest ✨
        </h1>
        <Section title="Top Rated Photo Studios" data={getMockData('studio')} />
        <Section title="Top Rated Caterers" data={getMockData('catering')} />
        <Section title="Top Rated Decorators" data={getMockData('decor')} />
        <Section title="Most Liked DJs" data={getMockData('dj')} />
      </div>
    </div>
  );
};

export default Dashboard;
