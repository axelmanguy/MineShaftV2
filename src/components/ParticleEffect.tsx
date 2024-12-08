import React, { useEffect, useRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const ParticleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles: Array<{
      x: number;
      y: number;
      speedY: number;
      speedX: number;
      size: number;
      opacity: number;
      life: number;
    }> = [];
    
    let animationFrameId: number;
    
    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        speedY: Math.random() * 1 + 0.2, // Slower upward movement
        speedX: (Math.random() - 0.5) * 0.3, // Gentler horizontal drift
        size: Math.random() * 2 + 0.5, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Lower opacity
        life: 1.0
      });
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Start particles earlier and keep them visible during enigmas
      if (scrollPosition > window.innerHeight * 6) {
        if (particles.length < 100) { // More particles
          for (let i = 0; i < 3; i++) {
            createParticle();
          }
        }
        
        particles.forEach((particle, index) => {
          particle.y -= particle.speedY;
          particle.x += particle.speedX;
          particle.life -= 0.005; // Slower fade
          particle.opacity = particle.life * 0.3;
          
          ctx.fillStyle = `rgba(100, 90, 90, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          if (particle.life <= 0) particles.splice(index, 1);
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollPosition]);
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-20" />;
};