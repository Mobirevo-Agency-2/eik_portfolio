import React from 'react';

interface IconProps {
  className?: string;
}

// Truck Driving Icon (24x24 grid)
export const TruckDrivingIcon: React.FC<IconProps> = ({ className = "w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Truck cabin and trailer */}
    <rect x="1" y="4" width="13" height="12" rx="1.5" />
    <path d="M14 8h4.5l3.5 4v4h-8V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
    <line x1="8" y1="18.5" x2="15" y2="18.5" />
    <line x1="1" y1="18.5" x2="3" y2="18.5" />
    <path d="M14 12h4" />
  </svg>
);

// Forklift Operation Icon (24x24 grid)
export const ForkliftIcon: React.FC<IconProps> = ({ className = "w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Mast and forks */}
    <path d="M19 3v13h4" />
    <path d="M19 12h3" />
    {/* Forklift chassis & cabin */}
    <path d="M3 16V9a2 2 0 0 1 2-2h4l4 4v5" />
    <path d="M13 16H3" />
    <path d="M7 7v4h4" />
    {/* Wheels */}
    <circle cx="6" cy="18" r="2" />
    <circle cx="15" cy="18" r="2" />
    {/* Load on fork */}
    <rect x="20" y="6" width="3" height="5" rx="0.5" />
  </svg>
);

// Crane Operation Icon (24x24 grid)
export const CraneIcon: React.FC<IconProps> = ({ className = "w-9 h-9 sm:w-10 sm:h-10 text-[#3b82f6]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Crane vertical tower */}
    <path d="M4 22V5" />
    {/* Crane horizontal jib boom */}
    <path d="M2 5h19l-4 4H4" />
    {/* Counter-jib and ballast */}
    <rect x="1" y="5.5" width="2.5" height="4" rx="0.5" />
    {/* Cable & Trolley */}
    <path d="M15 5v7" />
    {/* Hook */}
    <path d="M15 12c-1 0-1.5 1-1.5 2a1.5 1.5 0 0 0 3 0c0-1-.5-2-1.5-2z" />
    {/* Base support truss */}
    <path d="M1 22h8" />
    <path d="M4 14l3 8" />
    <path d="M4 9l5 9" />
  </svg>
);
