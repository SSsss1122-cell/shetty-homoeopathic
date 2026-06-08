"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = null,
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);
  const [imageErrors, setImageErrors] = useState({});

  // Default testimonials data - 7 testimonials
  const defaultTestimonials = [
    {
      id: 1,
      name: "Mahesh Kumar",
      emoji: "⚕️",
      image: "/homo/s1.jpeg",
      year: "3rd year BHMS",
      rating: 5,
      text: "I have started to explore myself after joining here in many ways as I have newly found that I have leadership qualities to manage any task given to me. I have gained more confidence to express myself without hesitation than before."
    },
    {
      id: 2,
      name: "Rahul",
      emoji: "🌿",
      image: "/homo/s2.jpeg",
      year: "3rd year BHMS",
      rating: 5,
      text: "I'm glad that I chose Shetty Homoeopathic Medical College as my college of choice as I stay at the boys hostel on the campus it's very good with all the facilities and secure."
    },
    {
      id: 3,
      name: "Nagesh",
      emoji: "🍃",
      image: "/homo/s3.jpeg",
      year: "1st year BHMS",
      rating: 5,
      text: "Good environment to learn with excellent teaching faculty as their care and attention to each and every student is same. Regular tests and exams are conducted as it helps me finding better me everyday."
    },
    {
      id: 4,
      name: "Nilkant",
      emoji: "🌱",
      image: "/homo/s4.jpeg",
      year: "1st year BHMS",
      rating: 5,
      text: "Extracurricular activities and Sports are also given equal importance as Curriculum. Both indoor and outdoor sports are given importance and the support from our management for sports is incredible."
    },
    {
      id: 5,
      name: "sharanu ",
      emoji: "🌸",
      image: "/homo/s5.jpeg",
      year: "2nd year BHMS",
      rating: 5,
      text: "The faculty members are very supportive and knowledgeable. The practical exposure in the hospital has helped me gain confidence in treating patients. I am grateful for the holistic education I'm receiving here."
    },
    {
      id: 6,
      name: "Amit Patel",
      emoji: "🌺",
      image: "/homo/s6.png",
      year: "4th year BHMS",
      rating: 5,
      text: "The clinical training at Shetty Hospital is exceptional. We get hands-on experience under expert guidance. The infrastructure and library facilities are world-class. Proud to be a part of this institution."
    },
    {
      id: 7,
      name: "nikhil Verma",
      emoji: "🌼",
      image: "/homo/s7.png",
      year: "2nd year BHMS",
      rating: 5,
      text: "The campus environment is very conducive to learning. The management encourages extracurricular activities along with academics. The hostel facilities are excellent and secure for boys and girls."
    }
  ];

  // Use provided items or default testimonials
  const testimonialItems = items || defaultTestimonials.map(t => ({
    id: t.id,
    name: t.name,
    emoji: t.emoji,
    image: t.image,
    year: t.year,
    rating: t.rating,
    text: t.text,
    displayText: `${t.emoji} ${t.name} - ${t.year} ${'⭐'.repeat(t.rating)}`,
    customRender: () => (
      <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-emerald-100 hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-3 ring-white shadow-lg flex-shrink-0">
            {!imageErrors[t.id] ? (
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
                onError={() => setImageErrors(prev => ({ ...prev, [t.id]: true }))}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-xl sm:text-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                {t.emoji}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">{t.name}</p>
            <div className="flex gap-0.5 sm:gap-1 mt-1">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-emerald-500 text-xs sm:text-sm">★</span>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">{t.year}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm italic">
          &ldquo;{t.text}&rdquo;
        </p>
        <div className="flex items-center justify-end mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-emerald-100">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>
    )
  }));

  const handleItemMouseEnter = useCallback(index => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item, index) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  const handleScroll = useCallback(e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = e => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.min(prev + 1, testimonialItems.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < testimonialItems.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(testimonialItems[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testimonialItems, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  // Function to render item content - supports customRender or default displayText
  const renderItemContent = (item) => {
    if (item.customRender) {
      return item.customRender();
    }
    // Default render
    return (
      <div className={`p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg ${itemClassName}`}>
        <p className="text-white m-0 font-medium">{item.displayText || item}</p>
      </div>
    );
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[500px] overflow-y-auto p-2 sm:p-4 ${
          displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-emerald-400 [&::-webkit-scrollbar-thumb]:rounded-[4px]'
            : 'scrollbar-hide'
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: '#10b981 #e5e7eb'
        }}
      >
        {testimonialItems.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={index * 0.05}
            index={index}
            onMouseEnter={() => handleItemMouseEnter(index)}
            onClick={() => handleItemClick(item, index)}
          >
            <div className={`transition-all duration-300 ${selectedIndex === index ? 'ring-2 ring-emerald-500 shadow-lg rounded-xl' : ''}`}>
              {renderItemContent(item)}
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-white to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;