import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only disable on mobile devices that strictly lack mouse hover capability
    const isMobileTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isMobileTouchOnly) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Position and scale states
    const pos = { x: -100, y: -100 };
    const scale = { val: 0 };
    const sizeScale = { val: 1.0 }; // 1.0 = 36px, 1.6 = 58px (interactive), 2.5 = 90px (hero headline)

    let isVisible = false;

    // Render function
    const render = () => {
      if (!cursor) return;
      const s = scale.val * sizeScale.val;
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${s})`;
      cursor.style.opacity = scale.val > 0.01 ? 1 : 0;
    };

    // GSAP quickTo setters for ultra-smooth 60/120fps interpolation
    const xTo = gsap.quickTo(pos, 'x', {
      duration: prefersReduced ? 0 : 0.28,
      ease: 'power3.out',
      onUpdate: render,
    });

    const yTo = gsap.quickTo(pos, 'y', {
      duration: prefersReduced ? 0 : 0.28,
      ease: 'power3.out',
      onUpdate: render,
    });

    const onMouseMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        pos.x = e.clientX;
        pos.y = e.clientY;
        gsap.to(scale, {
          val: 1,
          duration: prefersReduced ? 0 : 0.35,
          ease: 'power3.out',
          onUpdate: render,
        });
      }

      xTo(e.clientX);
      yTo(e.clientY);

      // Detect element underneath the cursor
      const target = e.target;
      const isHeadline = target?.closest('.hero-headline-wrap') || target?.closest('.hero-headline');
      const isInteractive =
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.closest('.service-row') ||
        target?.closest('.interactive');

      if (isHeadline) {
        // Expand to large spotlight circle (~90px diameter) over the hero headline words
        gsap.to(sizeScale, {
          val: 2.5,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
          onUpdate: render,
        });
      } else if (isInteractive) {
        // Expand to medium interactive circle (~58px diameter) over clickable elements
        gsap.to(sizeScale, {
          val: 1.6,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto',
          onUpdate: render,
        });
      } else {
        // Default resting circular cursor (~36px diameter)
        gsap.to(sizeScale, {
          val: 1.0,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: 'auto',
          onUpdate: render,
        });
      }
    };

    const onMouseEnter = (e) => {
      isVisible = true;
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(scale, {
        val: 1,
        duration: prefersReduced ? 0 : 0.35,
        ease: 'power3.out',
        onUpdate: render,
      });
    };

    const onMouseLeave = () => {
      isVisible = false;
      gsap.to(scale, {
        val: 0,
        duration: prefersReduced ? 0 : 0.3,
        ease: 'power3.out',
        onUpdate: render,
      });
      gsap.to(sizeScale, {
        val: 1.0,
        duration: 0.2,
        overwrite: 'auto',
        onUpdate: render,
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      gsap.killTweensOf(pos);
      gsap.killTweensOf(scale);
      gsap.killTweensOf(sizeScale);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="global-custom-cursor"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--text-primary)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(0)',
        willChange: 'transform, opacity',
        opacity: 0,
      }}
    />
  );
}
