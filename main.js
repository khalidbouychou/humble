document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll (simple Intersection Observer)
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible if it only animates once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'visible' class if you want animation to re-trigger on scroll back
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // Auto-play Carousel (Skills Icons)
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    // Calculate total width of one set of items to determine scroll distance
    const itemWidth = carouselItems[0].offsetWidth + (parseFloat(getComputedStyle(carouselItems[0]).paddingLeft) * 2);
    const totalItems = carouselItems.length / 2; // We duplicated the items
    const scrollDistance = itemWidth * totalItems;

    // This CSS animation already handles the auto-play.
    // If you need more complex JS control (pause on hover, navigation buttons),
    // you would implement setInterval and clearInterval here, adjusting `transformX`
    // of the `carouselTrack`. For the current CSS-based autoplay, this JS is minimal.
    console.log("Carousel animation controlled via CSS.");

    // Simple form submission (for demonstration, a backend is needed for actual email sending)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            alert('Thank you for your message! This is a demo. A real backend is needed to send emails.');

            // In a real application, you would send this data to a server:
            // const formData = new FormData(contactForm);
            // fetch('/your-backend-endpoint', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     alert('Message sent successfully!');
            //     contactForm.reset();
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     alert('There was an error sending your message.');
            // });
        });
    }
});