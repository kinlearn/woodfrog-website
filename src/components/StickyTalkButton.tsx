import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import ContactForm from './ContactUs';
import gsap from 'gsap';

const StickyTalkButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeout = useRef<NodeJS.Timeout | null>(null);
  const pulseTimeout = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Check for dark mode and mobile
  useEffect(() => {
    // Check for dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    const darkModeHandler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', darkModeHandler);
    
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      darkModeQuery.removeEventListener('change', darkModeHandler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const hideButton = () => {
    if (!isAnimating.current && buttonRef.current) {
      isAnimating.current = true;
      gsap.to(buttonRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          isAnimating.current = false;
        }
      });
    }
  };
  
  const showButton = () => {
    if (!isAnimating.current && buttonRef.current) {
      isAnimating.current = true;
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          isAnimating.current = false;
          
          // Reset inactivity timers
          resetInactivityTimers();
        }
      });
    }
  };
  
  const reduceOpacity = () => {
    if (!isAnimating.current && buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: 0.6,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };
  
  const startPulseAnimation = () => {
    if (buttonRef.current) {
      // Stop any existing animations
      gsap.killTweensOf(buttonRef.current, "scale");
      
      // Create a gentle pulse animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  };
  
  const stopPulseAnimation = () => {
    if (buttonRef.current) {
      gsap.killTweensOf(buttonRef.current, "scale");
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };
  
  const resetInactivityTimers = () => {
    // Clear existing timeouts
    if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
    if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    
    // Stop pulse animation if it's running
    stopPulseAnimation();
    
    // Reset opacity to full
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 0.3
      });
    }
    
    // Set new timeouts
    inactivityTimeout.current = setTimeout(() => {
      reduceOpacity();
    }, 5000); // 5 seconds
    
    pulseTimeout.current = setTimeout(() => {
      startPulseAnimation();
    }, 10000); // 10 seconds
  };
  
  useEffect(() => {
    // Set initial state
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { y: 0, opacity: 1, scale: 1 });
    }
    
    // Initialize inactivity timers
    resetInactivityTimers();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolling up or down
      const isScrollingUp = currentScrollY < lastScrollY.current;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // If scrolling down more than a threshold, hide the button
      if (!isScrollingUp && currentScrollY > 100 && currentScrollY - lastScrollY.current > 10) {
        hideButton();
      }
      
      // If scrolling up, show the button
      if (isScrollingUp) {
        showButton();
      }
      
      // Set a new timeout - if scrolling stops, show the button after 1 second
      scrollTimeout.current = setTimeout(() => {
        showButton();
      }, 1000);
      
      lastScrollY.current = currentScrollY;
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Handle user interaction
    const handleUserActivity = () => {
      if (buttonRef.current) {
        // Make button fully visible when user interacts with the page
        showButton();
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (inactivityTimeout.current) clearTimeout(inactivityTimeout.current);
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
      
      // Kill any running GSAP animations
      if (buttonRef.current) {
        gsap.killTweensOf(buttonRef.current);
      }
    };
  }, []); // Empty dependency array since we're using refs
  
  const showModal = () => {
    // Reset animations and show modal
    stopPulseAnimation();
    setIsModalVisible(true);
  };
  
  // Determine button position based on device type
  const buttonPosition = isMobile ? {
    bottom: '60px', // Higher position on mobile to avoid keyboard
    right: '20px'   // Slightly closer to edge on mobile
  } : {
    bottom: '30px',
    right: '30px'
  };
  
  // Determine button styles based on dark/light mode
  const buttonStyle = {
    padding: '0 25px',
    height: '50px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: isDarkMode 
      ? '0 4px 12px rgba(255, 255, 255, 0.15)' 
      : '0 4px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: isDarkMode ? '#1668dc' : '#1890ff',
    borderColor: isDarkMode ? '#1668dc' : '#1890ff'
  };
  
  return (
    <>
      <div
        ref={buttonRef}
        style={{
          position: 'fixed',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          ...buttonPosition,
          transformOrigin: 'center'
        }}
        onMouseEnter={() => {
          // Reset opacity and stop pulse when user hovers
          if (buttonRef.current) {
            gsap.to(buttonRef.current, { opacity: 1, duration: 0.3 });
          }
          stopPulseAnimation();
        }}
        onMouseLeave={() => {
          // Restart inactivity timers when user stops hovering
          resetInactivityTimers();
        }}
      >
        <Button
          type="primary"
          shape="round"
          size="large"
          icon={<MessageOutlined />}
          onClick={showModal}
          style={buttonStyle}
        >
          Let's Talk!
        </Button>
      </div>

      <ContactForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default StickyTalkButton;