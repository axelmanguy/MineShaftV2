import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const Elevator: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const darkness = Math.min((scrollPosition / window.innerHeight) * 100, 95);
  
  return (
    <div 
      className="fixed inset-0 transition-all duration-300"
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${darkness}%)`,
        pointerEvents: 'none'
      }}
    >
      <div className="elevator-doors fixed inset-0 flex">
        <div className={`h-full w-1/2 bg-zinc-800 transition-transform duration-1000 ${scrollPosition < 100 ? 'translate-x-0' : '-translate-x-full'}`} />
        <div className={`h-full w-1/2 bg-zinc-800 transition-transform duration-1000 ${scrollPosition < 100 ? 'translate-x-0' : 'translate-x-full'}`} />
      </div>
    </div>
  );
};