export function initReveals() {
  if (typeof gsap === 'undefined') return;

  // Generic fade-up for text elements
  const fadeUpElements = document.querySelectorAll('[data-reveal="fade-up"]');
  fadeUpElements.forEach(el => {
    gsap.fromTo(el, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Staggered lists/grids
  const staggerContainers = document.querySelectorAll('[data-reveal="stagger"]');
  staggerContainers.forEach(container => {
    const items = container.querySelectorAll('.stagger-item');
    if (!items.length) return;
    
    gsap.fromTo(items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
}

export function initParallax() {
  if (typeof gsap === 'undefined') return;

  const parallaxImages = document.querySelectorAll('[data-parallax="true"]');
  parallaxImages.forEach(img => {
    const isHero = img.closest('.hero-fullscreen') !== null;
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: isHero ? "top top" : "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}
