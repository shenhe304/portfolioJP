function fadeUpOnScroll() {
    const targets = document.querySelectorAll('.js-fadeUp');
    const triggerRatio = 0.7; // 画面の下から30% = 上から70%

    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * triggerRatio) {
            target.classList.add('is-show');
        }
    });
}

window.addEventListener('scroll', fadeUpOnScroll);
window.addEventListener('load', fadeUpOnScroll);