'use client';

import { useEffect, useRef, useState } from 'react';

export default function LazyMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="bg-white p-2 rounded-sm shadow-sm h-[300px] overflow-hidden">
      {isLoaded ? (
        <iframe
          title="Standort Maler Bachmann"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=Maler+Bachmann,+Sihlquai+240,+8005+Z%C3%BCrich&t=&z=17&ie=UTF8&iwloc=&output=embed"
          style={{ filter: 'grayscale(0.5)' }}
          loading="lazy"
        ></iframe>
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <p className="text-gray-500">Karte wird geladen...</p>
        </div>
      )}
    </div>
  );
}
