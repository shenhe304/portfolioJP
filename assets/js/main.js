// スクロールアニメーション
document.addEventListener('DOMContentLoaded', function() {
    // 表示時に要素を徐々に表示するアニメーション
    const fadeElements = document.querySelectorAll('.p-works__contents, .p-thinking__contents');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});