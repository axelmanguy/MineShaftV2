import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const MINE_LAYERS = [
  {
    depth: 0,
    image: '/mine_entrance.jpg',
    text: 'Entrée de la mine - 1873'
  },
  {
    depth: 1,
    image: '/depth2.jpg',
    text: 'Les tunnles superieurs'
  },
  {
    depth: 2,
    image: '/finaldepth.jpg',
    text: 'Le vieux filon'
  },
  {
    depth: 3,
    image: '/depth3.jpg',
    text: 'Le fond'
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