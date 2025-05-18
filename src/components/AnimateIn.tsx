import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  animation: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimateIn({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  className = '',
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity',
    'slide-up': 'opacity-0 translate-y-8 transition-all',
    'scale-in': 'opacity-0 scale-95 transition-all',
  };

  const styles = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'scale-in': 'opacity-100 scale-100',
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''} ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
}