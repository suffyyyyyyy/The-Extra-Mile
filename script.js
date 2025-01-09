document.addEventListener('DOMContentLoaded', () => {
  
  // Dropdown Menu Toggle Functionality
  const dropdownLink = document.querySelector('.nav-links .dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const arrow = dropdownLink.querySelector('.arrow');

  // Toggle dropdown menu on click
  dropdownLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const isMenuVisible = dropdownMenu.style.display === 'block';

    // Toggle the dropdown menu visibility
    dropdownMenu.style.display = isMenuVisible ? 'none' : 'block';

    // Toggle the arrow direction
    arrow.textContent = isMenuVisible ? '▼' : '▲';
  });

  // Close dropdown menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!dropdownLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
      arrow.textContent = '▼'; // Reset arrow direction
    }
  });

  // Smooth Scroll for "Top 10 Side Hustles" links
  const smoothScrollLinks = document.querySelectorAll('.dropdown-menu a');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();  // Prevent dropdown from closing immediately on link click
      const targetId = link.getAttribute('href').substring(1); // Get the section ID (e.g., #freelance-writing)
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust scroll position
          behavior: 'smooth'
        });
      }

      // Optional: Close the dropdown menu after clicking a link
      dropdownMenu.style.display = 'none';
      arrow.textContent = '▼'; // Reset arrow direction
    });
  });

  // Handle the "Get Started" button click for redirecting to the Freelance Opportunities page
  const getStartedButtons = document.querySelectorAll('.opportunity-box .btn');

  getStartedButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Redirect to the Freelance Opportunities page (adjust the URL as necessary)
      window.location.href = 'freelance-opportunities.html'; // Adjust the URL if necessary
    });
  });

});

