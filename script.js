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

// Newsletter Popup
const newsletterPopup = document.getElementById('newsletterPopup');
const closePopupButton = document.querySelector('.close-popup');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

// Show popup after 5 seconds
setTimeout(() => {
    newsletterPopup.style.display = 'flex';
}, 5000);

// Close popup when clicking the close button
closePopupButton.addEventListener('click', () => {
    newsletterPopup.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === newsletterPopup) {
        newsletterPopup.style.display = 'none';
    }
});

// Newsletter form submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('newsletterEmail').value.trim();

    if (email === '') {
        newsletterMessage.textContent = 'Please enter a valid email.';
        newsletterMessage.style.color = 'red';
    } else {
        newsletterMessage.textContent = 'Thank you for subscribing!';
        newsletterMessage.style.color = 'green';
        newsletterForm.reset(); // Reset the form
        setTimeout(() => {
            newsletterPopup.style.display = 'none';
        }, 2000); // Hide popup after 2 seconds
    }
});

