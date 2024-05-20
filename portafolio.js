
// Función de escritura del título y del subtítulo

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('typing-title');
    const subtitle = document.getElementById('typing-subtitle');

    typeEffect(title, 'Pool Piña');
    typeEffect(subtitle, 'Bienvenido a mi Portafolio', 100);
});

function typeEffect(element, text, delay = 150) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}





document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    function showSkill(index) {
        const skillWidth = document.querySelector('.skill').clientWidth;
        carousel.style.transform = `translateX(${-index * skillWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carousel.children.length - 1;
        showSkill(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index < carousel.children.length - 1) ? index + 1 : 0;
        showSkill(index);
    });

    // Initialize carousel to show the first skill
    showSkill(index);
});
