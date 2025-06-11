import { useEffect, useState } from 'react';

interface Bee {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
}

const FloatingBees = () => {
  const [bees, setBees] = useState<Bee[]>([]);

  useEffect(() => {
    // Initialize bees
    const initialBees: Bee[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: 0.8 + Math.random() * 0.4,
      rotation: Math.random() * 360,
    }));

    setBees(initialBees);

    const animateBees = () => {
      setBees(prevBees => 
        prevBees.map(bee => {
          let newX = bee.x + bee.vx;
          let newY = bee.y + bee.vy;
          let newVx = bee.vx;
          let newVy = bee.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return {
            ...bee,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: bee.rotation + 2,
          };
        })
      );
    };

    const interval = setInterval(animateBees, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {bees.map(bee => (
        <div
          key={bee.id}
          className="absolute transition-all duration-75 ease-linear"
          style={{
            left: `${bee.x}px`,
            top: `${bee.y}px`,
            transform: `scale(${bee.size}) rotate(${bee.rotation}deg)`,
          }}
        >
          {/* Bee Body */}
          <div className="relative">
            {/* Wings */}
            <div className="absolute -top-1 -left-1">
              <div className="w-3 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDuration: '0.1s' }}></div>
              <div className="w-2 h-1 bg-white/40 rounded-full ml-1 -mt-1 animate-pulse" style={{ animationDuration: '0.1s', animationDelay: '0.05s' }}></div>
            </div>
            
            {/* Body */}
            <div className="w-4 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full relative">
              {/* Stripes */}
              <div className="absolute inset-0 flex items-center justify-center space-x-0.5">
                <div className="w-0.5 h-full bg-black/60 rounded-full"></div>
                <div className="w-0.5 h-full bg-black/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Trail */}
            <div className="absolute top-1 -right-2 w-8 h-0.5 bg-gradient-to-r from-yellow-300/40 to-transparent rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingBees;