"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const LogoLoop = ({ items = [], speed = 1, direction = 'left' }) => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (containerRef.current && items.length > 0) {
      setContentWidth(containerRef.current.scrollWidth / 2);
      setIsReady(true);
    }
  }, [items]);

  useAnimationFrame(() => {
    if (!isReady || contentWidth <= 0) return;
    
    let move = x.get();
    if (direction === 'left') {
      move -= speed;
      if (move <= -contentWidth) {
        move = 0;
      }
    } else {
      move += speed;
      if (move >= contentWidth) {
        move = 0;
      }
    }
    x.set(move);
  });

  if (!items.length) return null;

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full py-2">
      <div ref={containerRef} className="whitespace-nowrap">
        <motion.div className="inline-flex gap-4" style={{ x }}>
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-4">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoLoop;