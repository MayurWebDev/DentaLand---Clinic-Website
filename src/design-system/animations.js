export const animations = {
  // Framer Motion presets
  fadeIn: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
  
  fadeInUp: (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
  }),
  
  fadeInLeft: (delay = 0) => ({
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
  }),
  
  fadeInRight: (delay = 0) => ({
    initial: { opacity: 0, x: 25 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
  }),
  
  scaleUp: (delay = 0) => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }
  }),
  
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  },
  
  tapPulse: {
    whileTap: { scale: 0.98 },
    whileHover: { scale: 1.01 }
  }
};
