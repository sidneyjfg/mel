const HoneycombPattern = ({ className = "" }: { className?: string }) => {
  const hexagons = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="relative w-full h-full opacity-10">
        {hexagons.map(i => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${(i % 4) * 25 + (Math.floor(i / 4) % 2) * 12.5}%`,
              top: `${Math.floor(i / 4) * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '4s',
            }}
          >
            <svg width="60" height="52" viewBox="0 0 60 52" className="text-amber-400 fill-current">
              <polygon 
                points="30,2 45,12 45,32 30,42 15,32 15,12" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoneycombPattern;