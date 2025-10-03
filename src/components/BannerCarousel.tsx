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
    <section className="w-full overflow-hidden">
      <div className="relative w-full h-40 md:h-64">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
