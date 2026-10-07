import React from 'react';

export const FlightArtSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[560px] animate-slow-pulse text-accent"
        style={{ color: 'var(--accent)' }}
      >
        <defs>
          <pattern id="flightGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.1" />
            <circle cx="0" cy="0" r="1" fill="currentColor" fillOpacity="0.25" />
          </pattern>
          <linearGradient id="flightPathGrad" x1="50" y1="420" x2="520" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Coordinate Reference Grid */}
        <rect width="600" height="500" fill="url(#flightGrid)" opacity="0.6" />

        {/* Telemetry Axis Lines & Flight Path Arc */}
        <path
          d="M 50 420 C 140 410, 180 320, 260 270 C 340 220, 420 180, 520 110"
          stroke="url(#flightPathGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Test Points / Waypoint Markers */}
        <g opacity="0.35">
          <circle cx="150" cy="360" r="3" fill="currentColor" />
          <circle cx="150" cy="360" r="8" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
          <text x="162" y="364" fontSize="9" fontFamily="monospace" fill="currentColor" letterSpacing="0.08em">TP-01 [SYSID]</text>

          <circle cx="260" cy="270" r="3" fill="currentColor" />
          <circle cx="260" cy="270" r="8" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
          <text x="272" y="274" fontSize="9" fontFamily="monospace" fill="currentColor" letterSpacing="0.08em">TP-02 [STAB]</text>

          <circle cx="430" cy="170" r="3" fill="currentColor" />
          <circle cx="430" cy="170" r="8" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
          <text x="442" y="174" fontSize="9" fontFamily="monospace" fill="currentColor" letterSpacing="0.08em">TP-03 [ENV-EXP]</text>
        </g>

        {/* Quadcopter Wireframe Silhouette (Left-Center) */}
        <g transform="translate(110, 140)" stroke="currentColor" strokeWidth="1.2" opacity="0.3" fill="none">
          {/* Central Avionics Hub */}
          <rect x="-20" y="-20" width="40" height="40" rx="6" stroke="currentColor" />
          <circle cx="0" cy="0" r="7" stroke="currentColor" strokeWidth="0.8" />
          <path d="M -5 0 L 5 0 M 0 -5 L 0 5" stroke="currentColor" strokeWidth="0.75" />

          {/* Motor Arms */}
          <line x1="-14" y1="-14" x2="-55" y2="-55" stroke="currentColor" />
          <line x1="14" y1="-14" x2="55" y2="-55" stroke="currentColor" />
          <line x1="-14" y1="14" x2="-55" y2="55" stroke="currentColor" />
          <line x1="14" y1="14" x2="55" y2="55" stroke="currentColor" />

          {/* Rotors / Motor Pods */}
          <circle cx="-55" cy="-55" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="-55" cy="-55" r="4" fill="currentColor" fillOpacity="0.4" />

          <circle cx="55" cy="-55" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="55" cy="-55" r="4" fill="currentColor" fillOpacity="0.4" />

          <circle cx="-55" cy="55" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="-55" cy="55" r="4" fill="currentColor" fillOpacity="0.4" />

          <circle cx="55" cy="55" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="55" cy="55" r="4" fill="currentColor" fillOpacity="0.4" />

          {/* Orientation Arrow */}
          <path d="M 0 -24 L -4 -16 L 4 -16 Z" fill="currentColor" />
        </g>

        {/* Fixed-Wing UAV Wireframe Silhouette (Right-Center) */}
        <g transform="translate(420, 290) rotate(-15)" stroke="currentColor" strokeWidth="1.2" opacity="0.32" fill="none">
          {/* Fuselage */}
          <path
            d="M 0 -85 C 6 -60, 8 20, 5 70 C 3 85, -3 85, -5 70 C -8 20, -6 -60, 0 -85 Z"
            stroke="currentColor"
          />
          {/* Main Wing */}
          <path
            d="M 0 -25 L 140 10 L 135 24 L 6 3 L -6 3 L -135 24 L -140 10 Z"
            stroke="currentColor"
          />
          {/* Ailerons / Control Surfaces */}
          <line x1="60" y1="16" x2="130" y2="23" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="-60" y1="16" x2="-130" y2="23" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* V-Tail / Horizontal Stabiliser */}
          <path
            d="M 0 65 L 45 80 L 40 88 L 0 74 L -40 88 L -45 80 Z"
            stroke="currentColor"
          />

          {/* Center of Gravity (CG) Marker */}
          <circle cx="0" cy="-6" r="6" stroke="currentColor" strokeWidth="0.8" />
          <path d="M -6 -6 A 6 6 0 0 1 0 0 L 0 -6 Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M 0 -6 A 6 6 0 0 1 6 0 L 0 0 Z" fill="none" />
          <path d="M 0 0 A 6 6 0 0 1 -6 0 L 0 -6 Z" fill="currentColor" fillOpacity="0.5" />
          <text x="10" y="-3" fontSize="8" fontFamily="monospace" fill="currentColor">CG</text>
        </g>

        {/* Coordinate Callouts */}
        <g opacity="0.25" fontSize="8" fontFamily="monospace" fill="currentColor">
          <text x="30" y="475">ALT: 120m AGL</text>
          <text x="140" y="475">TAS: 18.4 m/s</text>
          <text x="250" y="475">Q: 0.198 kPa</text>
          <text x="470" y="475">LAT: 12.97° N</text>
        </g>
      </svg>
    </div>
  );
};

