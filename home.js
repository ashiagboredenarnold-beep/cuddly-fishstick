function moveSlide(button, step) {
  const container = button.closest(".slider-container");
  const track = container.querySelector(".slider-track");
  const slides = track.children;
  const totalSlides = slides.length;

  let index = track.dataset.index
    ? parseInt(track.dataset.index)
    : 0;

  index += step;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  track.style.transform = `translateX(-${index * 100}%)`;
  track.dataset.index = index;
}

/* AUTO SLIDE FOR BOTH SLIDERS */
document.querySelectorAll(".slider-container").forEach(container => {
  const nextBtn = container.querySelector(".nav-btn.next");

  setInterval(() => {
    moveSlide(nextBtn, 1);
  }, 4000);
});