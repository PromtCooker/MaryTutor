// ===== script.js - ОБЩИЕ СКРИПТЫ ДЛЯ ВСЕХ СТРАНИЦ =====

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mobileNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Закрытие меню при клике на ссылку
        const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Плавная прокрутка для внутренних ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаем пустые ссылки
            if (href === '#' || href === '#!') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Автозапуск видео (если есть на странице)
    const autoplayVideo = document.getElementById('autoplay-video');
    if (autoplayVideo) {
        setTimeout(function() {
            const video = document.querySelector('#autoplay-video video');
            if (video) {
                video.play().catch(function(error) {
                    console.log('Автозапуск видео заблокирован:', error);
                    // Показываем кнопку запуска
                    const button = document.createElement('button');
                    button.className = 'btn mt-2';
                    button.textContent = '▶ Начать просмотр видео';
                    button.onclick = function() {
                        video.play();
                        button.style.display = 'none';
                    };
                    autoplayVideo.appendChild(button);
                });
            }
        }, 2000);
    }
});
