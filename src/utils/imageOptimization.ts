export const getOptimizedImageSrc = (src: string): string => {
  return src;
};

export const preloadImage = (src: string): void => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
};

export const lazyLoadImage = (
  element: HTMLImageElement,
  src: string,
  placeholder?: string
): void => {
  if (placeholder) {
    element.src = placeholder;
  }
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.src = src;
          observer.unobserve(element);
        }
      });
    });
    
    observer.observe(element);
  } else {
    element.src = src;
  }
};