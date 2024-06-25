document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav ul');
    const cta = document.querySelectorAll('.cta');

    // Smooth scroll for all links with class 'cta'
    cta.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sticky header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('sticky');
        } else {
            document.querySelector('header').classList.remove('sticky');
        }
    });
});
