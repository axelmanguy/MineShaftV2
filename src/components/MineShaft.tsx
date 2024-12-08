import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const MINE_LAYERS = [
  {
    depth: 0,
    image: 'https://images.unsplash.com/photo-1582507175976-6105f4d3899b?auto=format&fit=crop&w=1920',
    text: 'Mine Entrance - 1873'
  },
  {
    depth: 1,
    image: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?auto=format&fit=crop&w=1920',
    text: 'Upper Tunnels'
  },
  {
    depth: 2,
    image: 'https://images.unsplash.com/photo-1544594376-0c8comad2819?auto=format&fit=crop&w=1920',
    text: 'Deep Shaft'
  },
  {
    depth: 3,
    image: 'https://images.unsplash.com/photo-1595833053591-27e82255d7e4?auto=format&fit=crop&w=1920',
    text: 'The Core'
  }
];

export const MineShaft: React.FC = () => {
  const scrollPosition = useScrollPosition();
  
  return (
    <div className="relative w-full">
      {MINE_LAYERS.map((layer, index) => (
        <div
          key={index}
          className="mine-section relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${layer.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <h2 className="text-4xl text-white font-bold tracking-wider drop-shadow-lg">
            {layer.text}
          </h2>
        </div>
      ))}
    </div>
  );
};