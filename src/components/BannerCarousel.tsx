import React, { useState, useEffect } from 'react';

const banners = [
  'https://i.postimg.cc/WzcmDgvj/httpszupramart-netlify-app-20251003-125734-0000.png',
  'https://i.postimg.cc/GpyNyPy7/402ad6018f12a7e6b6361e8f8f07446c-jpg-760x760q80-jpg.jpg',
  'https://i.postimg.cc/5tCGC5CD/57b7896c287f00994abab861ea5c1a42-jpg-760x760q80-jpg.jpg',
  'https://i.postimg.cc/MGQ4Q0Q3/742e37f2290cbc49cd4ef641f946b3cc-png-760x760q80-png.jpg',
  'https://i.postimg.cc/vmVjV7Vk/a32f722dd4a9d911eba79bc33c53ec19-png-760x760q80-png.jpg',
  'https://i.postimg.cc/YSWVWNWJ/ad713b549ab4395379e1f9885220c791-jpg-760x760q80-jpg-1.jpg',
  'https://i.postimg.cc/Jzgv0YGF/ebd0d179f75caae71921d060bcdbe2c2-jpg-760x760q80-jpg.jpg'
];

export const BannerCarousel: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden px-4 md:px-6 py-4">
      <div className="relative w-full h-48 md:h-80 lg:h-96 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={banner}
              alt={`ZupraMart Banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
