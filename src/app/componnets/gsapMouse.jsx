"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GsapMouse = () => {
  const followerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      gsap.to(followerRef.current, {
        x: x,
        y: y,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(innerRef.current, {
        x: x,
        y: y,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        style={{
            position: 'fixed',
        top: 0,
        left: 0,
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 80%)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        }}
      ></div>
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1000px',
          height: '1000px',
          borderRadius: '50%',
        //   backgroundColor: 'red',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};

export default GsapMouse;
