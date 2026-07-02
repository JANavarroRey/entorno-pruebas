export function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded via CDN');
    return false;
  }
  
  gsap.registerPlugin(ScrollTrigger);
  return true;
}
