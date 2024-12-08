import React, { useEffect, useRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const FlameLight: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    const animate = () => {
      if (lightRef.current) {
        const randomX = (Math.random() - 0.5) * 8;
        const randomY = (Math.random() - 0.5) * 8;
        lightRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  const opacity = Math.min((scrollPosition / (window.innerHeight * 4)) * 0.8, 0.8);
  
  return (
    <div 
      ref={lightRef}
      className="fixed bottom-10 left-10 pointer-events-none z-20"
      style={{
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle at center, 
          rgba(255, 147, 41, ${opacity}) 0%, 
          rgba(255, 147, 41, ${opacity * 0.6}) 30%, 
          rgba(255, 147, 41, 0) 70%)`,
        filter: 'blur(2px)'
      }}
    />
  );
};