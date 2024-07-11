document.addEventListener('scroll', function() {
    const section2 = document.getElementById('section2');
    const sectionPosition = section2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section2.style.opacity = '1';
        section2.style.transform = 'translateY(0)';
    }
});
document.addEventListener('scroll', function() {
    const section4 = document.getElementById('section4');
    const sectionPosition = section4.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section4.style.opacity = '1';
        section4.style.transform = 'translateY(0)';
    }
});

document.addEventListener('scroll', function() {
    const section6 = document.getElementById('section6');
    const sectionPosition = section6.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section6.style.opacity = '1';
        section6.style.transform = 'translateY(0)';
    }
});
document.addEventListener('scroll', function() {
    const section7 = document.getElementById('section7');
    const sectionPosition = section7.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        section7.style.opacity = '1';
        section7.style.transform = 'translateY(0)';
    }
});