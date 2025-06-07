document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button--right');
  const prevButton = document.querySelector('.carousel__button--left');

  // Calculamos ancho de slide (incluyendo margen derecho)
  const slideStyle = getComputedStyle(slides[0]);
  const slideWidth = slides[0].getBoundingClientRect().width
                      + parseFloat(slideStyle.marginRight);

  let currentIndex = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });
});
