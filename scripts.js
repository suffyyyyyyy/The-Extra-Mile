let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Check if slides exist
if (slides.length > 0) {
    // Show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Change slide function
    function changeSlide(step) {
        currentSlideIndex = (currentSlideIndex + step + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Auto-start the slideshow
    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Add hover listeners to pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseover', stopAutoSlide);
    slideshowContainer.addEventListener('mouseout', startAutoSlide);

    // Initialize slideshow
    showSlide(currentSlideIndex);
    startAutoSlide();
}





