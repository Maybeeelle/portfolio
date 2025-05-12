import { useState, useEffect, useRef } from 'react';

export default function Bubbles() {
  const canvasRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  
  // Create a bubble generator on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // No initial bubbles - only create them when clicking options
    
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (isPaused) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each bubble
      const updatedBubbles = bubbles.map(bubble => {
        // Move the bubble
        bubble.y -= bubble.speed;
        bubble.x += Math.sin(bubble.angle) * 0.5;
        bubble.angle += 0.01;
        
        // If bubble is off-screen, remove it (don't replace)
        if (bubble.y < -bubble.size * 2) {
          return null; // Mark for removal
        }
        
        // Draw the bubble
        drawBubble(ctx, bubble);
        return bubble;
      }).filter(bubble => bubble !== null); // Remove any null bubbles
      
      setBubbles(updatedBubbles);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bubbles, isPaused]);
  
  
  // Draw a bubble
  const drawBubble = (ctx:any, bubble:any) => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color.replace(')', `, ${bubble.opacity})`);
    ctx.fill();
    
    // Add shine effect
    ctx.beginPath();
    ctx.arc(bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, bubble.size * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity + 0.2})`;
    ctx.fill();
    
    // Add second smaller shine
    ctx.beginPath();
    ctx.arc(bubble.x + bubble.size * 0.1, bubble.y - bubble.size * 0.1, bubble.size * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity + 0.1})`;
    ctx.fill();
    
    // Add subtle outline
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity + 0.2})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  };
  
  // Get random pastel color
  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 100%, 75%`; // End parenthesis added when opacity is added
  };
  
  // Create bubbles at option button positions - will be called from parent component
  const createBubblesAtPosition = (x, y, color) => {
    if (isPaused) {
      setIsPaused(false);
    }
    
    // Create multiple bubbles in a cluster
    const newBubbles = [];
    const bubbleCount = Math.floor(Math.random() * 3) + 3; // 3-5 bubbles per click
    
    for (let i = 0; i < bubbleCount; i++) {
      // Add slight randomness to position
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = (Math.random() - 0.5) * 40;
      
      // Get color based on the option color
      const bubbleColor = color || getRandomPastelColor();
      
      newBubbles.push({
        x: x + offsetX,
        y: y + offsetY,
        size: Math.random() * 25 + 15, // Size between 15-40px
        speed: Math.random() * 1.5 + 1, // Speed between 1-2.5
        color: bubbleColor,
        opacity: Math.random() * 0.6 + 0.2, // Opacity between 0.2-0.8
        angle: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01
      });
    }
    
    setBubbles(prevBubbles => [...prevBubbles, ...newBubbles]);
  };
  
  // Pause animation on spacebar
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.code === 'Space') {
        setIsPaused(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  // Expose the createBubblesAtPosition method
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.createBubblesAtPosition = createBubblesAtPosition;
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        delete window.createBubblesAtPosition;
      }
    };
  }, [isPaused]);
  
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
      
      {isPaused && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow-md text-gray-700 text-sm z-20">
          Paused - Press spacebar to resume
        </div>
      )}
    </div>
  );
}