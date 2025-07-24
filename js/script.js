document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Função para atualizar slides
  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Atualiza indicadores
    indicators.forEach((ind, index) => {
      ind.classList.toggle('active', index === currentIndex);
    });
  }

  // Event listeners para as setas
  nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  // Event listeners para os indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlide();
    });
  });
});