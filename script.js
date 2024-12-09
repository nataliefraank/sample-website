// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
        formMessage.style.color = 'green';
        contactForm.reset(); // Reset the form fields
    }
});
