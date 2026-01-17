// TOGGLE HAMBURGER MENU
function toggleMenu() {
    const menu = document.querySelector('.nav-links');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// CLOSE MENU WHEN LINK CLICKED (MOBILE)
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});

// CONTACT FORM VALIDATION
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill all fields');
        } else {
            alert('Message sent successfully!');
            this.reset();
        }
    });
}
