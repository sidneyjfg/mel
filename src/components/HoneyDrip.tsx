import { useEffect, useState } from 'react';

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const HoneyDrip = ({ className = "" }: { className?: string }) => {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const initialDrops: Drop[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      size: 0.5 + Math.random() * 0.5,
    }));

    setDrops(initialDrops);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute top-0"
          style={{
            left: `${drop.x}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {/* Honey Drop */}
          <div 
            className="honey-drop"
            style={{
              transform: `scale(${drop.size})`,
            }}
          >
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-full relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent animate-pulse"></div>
              
              {/* Drop bottom */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoneyDrip;