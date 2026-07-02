export function renderTicker(theme = 'dark') {
  // theme can be 'dark', 'burgundy', or 'gold'
  const themeClass = theme === 'dark' ? '' : `theme-${theme}`;
  
  const p1 = "PASTEL DE CARNE MURCIANO";
  const p2 = "HONRAMOS LA TRADICIÓN";
  const p3 = "REINVENTAMOS EL SABOR";
  const separator = '<span class="ticker-separator"></span>';
  
  // Create a long string of repeating text to ensure seamless scrolling
  const repeatedText = Array(6).fill(`${p1} ${separator} ${p2} ${separator} ${p3} ${separator}`).join(' ');

  return `
    <div class="ticker-section ${themeClass}">
      <div class="ticker-track">
        <div class="ticker-item">${repeatedText}</div>
        <div class="ticker-item">${repeatedText}</div>
      </div>
    </div>
  `;
}

export function initTickers() {
  // If GSAP is available via CDN, we use it for better performance
  if (typeof gsap !== 'undefined') {
    const tracks = document.querySelectorAll('.ticker-track');
    
    tracks.forEach(track => {
      // Calculate width of one item to know how far to translate
      const item = track.querySelector('.ticker-item');
      if (!item) return;
      
      // We want to translate exactly the width of one item (50% of the track)
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 80, /* Slowed down significantly */
        repeat: -1
      });
    });
  }
}
