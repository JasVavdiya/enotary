'use client'

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Interactive particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create particles - all white as requested
    const particlesArray: Array<{
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        const baseSize = Math.random() * 4 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        
        // All particles are white
        const color = '#FFFFFF';
        
        particlesArray.push({
          x,
          y,
          size: baseSize,
          baseSize,
          speedX,
          speedY,
          color
        });
      }
    };
    
    createParticles();
    
    // Connect particles with lines when they're close
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Mouse interaction with particles - repel from mouse
    const handleMouseInteraction = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const dx = mousePosition.current.x - particlesArray[i].x;
        const dy = mousePosition.current.y - particlesArray[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Stronger repel effect when mouse is close
        if (distance < 100) {
          const forceX = dx / distance * 2; // Increased force for stronger repel
          const forceY = dy / distance * 2;
          
          particlesArray[i].x -= forceX;
          particlesArray[i].y -= forceY;
          
          // Make particles bigger when mouse is close
          particlesArray[i].size = particlesArray[i].baseSize + (100 - distance) / 10;
        } else {
          // Return to original size
          if (particlesArray[i].size > particlesArray[i].baseSize) {
            particlesArray[i].size -= 0.2;
          }
        }
      }
    };
    
    // Update and draw particles
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;
        particlesArray[i].y += particlesArray[i].speedY;
        
        // Bounce off edges
        if (particlesArray[i].x > canvas.width || particlesArray[i].x < 0) {
          particlesArray[i].speedX = -particlesArray[i].speedX;
        }
        
        if (particlesArray[i].y > canvas.height || particlesArray[i].y < 0) {
          particlesArray[i].speedY = -particlesArray[i].speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(
          particlesArray[i].x,
          particlesArray[i].y,
          particlesArray[i].size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particlesArray[i].color;
        ctx.fill();
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleMouseInteraction();
      updateParticles();
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Merriweather:wght@700;900&family=Montserrat:wght@600;700;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/img1.jpg" // Place your image in the public folder
            alt="Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-[#003366]/80"></div> {/* Overlay to ensure visibility of content */}
        </div>
        
        {/* Interactive particles canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-10"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Content container */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="relative">
            {/* Highlight effect behind heading */}
            <div className="absolute -inset-x-6 inset-y-0 bg-gradient-to-r from-[#003366]/0 via-[#003366]/40 to-[#003366]/0 blur-xl"></div>
            
            {/* Main heading with clip-path effect */}
            <h1 
              className="font-['Merriweather'] font-black text-6xl md:text-7xl lg:text-8xl text-[#F9F9F9] mb-4"
              style={{ 
                textShadow: '0 4px 10px rgba(0,0,0,0.3)', 
                clipPath: 'polygon(0 0, 100% 0, 100% 80%, 95% 100%, 5% 100%, 0 80%)'
              }}
            >
              Get an e-Notary
            </h1>
            
            {/* Digital embellishment */}
            <div className="absolute -top-4 -right-8 text-3xl">
              <span style={{ color: '#FF9933' }}>•</span> {/* Orange */}
              <span style={{ color: '#FFFFFF' }}>•</span> {/* White */}
              <span style={{ color: '#138808' }}>•</span> {/* Green */}
            </div>
            <div className="absolute -bottom-4 -left-8  text-3xl">
              <span style={{ color: '#FF9933' }}>•</span> {/* Orange */}
              <span style={{ color: '#FFFFFF' }}>•</span> {/* White */}
              <span style={{ color: '#138808' }}>•</span> {/* Green */}
            </div>
          </div>
          
          {/* Tagline with no background as requested */}
          <div className="relative mb-12 max-w-3xl">
            <p 
              className="relative font-['Lato'] text-xl md:text-2xl text-[#F9F9F9] px-8 py-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
          </div>
          
          {/* Button container */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-4 bg-[#003366] text-[#F9F9F9] font-['Montserrat'] font-bold rounded-md shadow-lg border-2 border-[#F9F9F9]/20 hover:bg-[#004488] transition-all duration-300 text-lg sm:text-xl"
            >
              Become eNotary Provider
            </button>
            <button 
              className="px-8 py-4 bg-[#003366] text-[#F9F9F9] font-['Montserrat'] font-bold rounded-md shadow-lg border-2 border-[#F9F9F9]/20 hover:bg-[#004488] transition-all duration-300 text-lg sm:text-xl"
            >
              Need eNotary?
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        
        @keyframes float-delay {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default Hero;