import React, { useEffect, useRef } from 'react';

export default function AnimatedGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 60;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;

      // Draw vertical lines
      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height);
        const opacity = 0.03 + Math.sin(x * 0.01 + time * 0.02) * 0.02;
        gradient.addColorStop(0, `rgba(249, 115, 22, 0)`);
        gradient.addColorStop(0.3, `rgba(249, 115, 22, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${opacity * 1.5})`);
        gradient.addColorStop(0.7, `rgba(249, 115, 22, ${opacity})`);
        gradient.addColorStop(1, `rgba(249, 115, 22, 0)`);
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
        const opacity = 0.03 + Math.cos(y * 0.01 + time * 0.015) * 0.02;
        gradient.addColorStop(0, `rgba(249, 115, 22, 0)`);
        gradient.addColorStop(0.2, `rgba(249, 115, 22, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${opacity * 1.5})`);
        gradient.addColorStop(0.8, `rgba(249, 115, 22, ${opacity})`);
        gradient.addColorStop(1, `rgba(249, 115, 22, 0)`);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw glowing intersection points
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        for (let y = offsetY; y < canvas.height; y += gridSize) {
          const pulse = Math.sin(time * 0.05 + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          const size = 1.5 + pulse * 1;
          const opacity = 0.1 + pulse * 0.15;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
          gradient.addColorStop(0, `rgba(245, 158, 11, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(249, 115, 22, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(249, 115, 22, 0)`);
          
          ctx.beginPath();
          ctx.arc(x, y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      // Draw random glowing particles
      for (let i = 0; i < 15; i++) {
        const px = ((Math.sin(time * 0.01 + i * 1.5) + 1) / 2) * canvas.width;
        const py = ((Math.cos(time * 0.008 + i * 2) + 1) / 2) * canvas.height;
        const size = 2 + Math.sin(time * 0.05 + i) * 1;
        
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 8);
        gradient.addColorStop(0, `rgba(245, 158, 11, 0.3)`);
        gradient.addColorStop(0.3, `rgba(249, 115, 22, 0.15)`);
        gradient.addColorStop(1, `rgba(249, 115, 22, 0)`);
        
        ctx.beginPath();
        ctx.arc(px, py, size * 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      time++;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resize();
    window.addEventListener('resize', resize);
    drawGrid();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
