document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);

  // Calcula ancho total del track (ancho + margen de cada slide)
  const trackWidth = slides.reduce((sum, slide) => {
    const style = getComputedStyle(slide);
    return sum
      + slide.getBoundingClientRect().width
      + parseFloat(style.marginRight);
  }, 0);

  let offset = 0;
  const speed = 0.3; // píxeles por frame; baja el valor para hacerlo más lento

  function autoScroll() {
    offset += speed;
    if (offset >= trackWidth) offset = 0;
    track.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(autoScroll);
  }

  requestAnimationFrame(autoScroll);
});
