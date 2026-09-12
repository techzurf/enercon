import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const mouse = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch devices (tablets and mobiles)
    const isTouchDevice = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0;
      
    // Respect accessibility settings
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || isReducedMotion) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (isHidden) setIsHidden(false);
    };

    // Smooth tight follow for the glow effect
    const updateFollower = () => {
      // Use 0.3 for a tight follow without lag
      follower.current.x += (mouse.current.x - follower.current.x) * 0.3;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.3;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0) translate(-50%, -50%)`;
      }
      requestRef.current = requestAnimationFrame(updateFollower);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target || !target.closest) return;
      
      // Hide effect over iframes (like YouTube player)
      const isIframe = target.tagName && target.tagName.toLowerCase() === 'iframe';
      if (isIframe) {
        setIsHidden(true);
        setIsHovering(false);
        return;
      }

      // Check for clickable elements and cards
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
      const isInteractiveCard = target.closest('.group, img, video');
      
      let hasPointer = false;
      try {
        hasPointer = window.getComputedStyle(target).cursor === 'pointer';
      } catch (err) {}

      if (isClickable || isInteractiveCard || hasPointer) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', checkHover, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHover);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHidden]);

  if (!isVisible) return null;

  return (
    <div
      ref={followerRef}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[999999] transition-all duration-300 ease-out will-change-transform flex items-center justify-center ${
        isHidden ? 'opacity-0 scale-50' : 'opacity-100'
      } ${
        isHovering 
          ? 'scale-[1.5] bg-enercon-green/20 border-2 border-enercon-green shadow-[0_0_15px_rgba(168,201,0,0.6)]' 
          : 'scale-100 bg-enercon-green/10 border border-enercon-green/50 shadow-[0_0_10px_rgba(168,201,0,0.2)]'
      }`}
    />
  );
}
