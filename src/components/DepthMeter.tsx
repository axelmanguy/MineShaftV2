import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const DepthMeter: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const depthInMeters = Math.floor(scrollPosition / 50); // 50px = 1 meter

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg z-40">
      <div className="text-sm opacity-70">Current Depth</div>
      <div className="text-2xl font-bold">{depthInMeters}m</div>
    </div>
  );
};