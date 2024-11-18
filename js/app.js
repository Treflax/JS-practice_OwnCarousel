document.addEventListener('DOMContentLoaded', () => {
    const carouselMainImage = document.querySelector('.main-item__img');
    const carouselMainTitle = document.querySelector('.main-item__title');
    const carouselMainDescription = document.querySelector('.main-item__description');
    const carouselSideItems = document.querySelectorAll('.carousel__side-item');

    let currentIndex = 0;
    const changeInterval = 10000; // 10 seconds
    let isHovered = false;
    let progressComplete = false;
    let autoChangeInterval;

    // Оновлення головного контенту
    const changeMainInfo = (index) => {
        carouselSideItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
            if (idx === index) {
                carouselMainImage.style.opacity = 0;
                setTimeout(() => {
                    // Оновлюємо контент головної частини
                    carouselMainImage.setAttribute('src', item.getAttribute('data-image'));
                    carouselMainTitle.textContent = item.getAttribute('data-title');
                    carouselMainDescription.textContent = item.getAttribute('data-description');
                    carouselMainImage.style.opacity = 1;

                    // Додаємо прогрес-бар тільки для активного елемента
                    addProgressBar(item);
                }, 100); // Затримка для плавної зміни
            } else {
                removeProgressBar(item); // Видаляємо прогрес-бар для неактивних елементів
            }
        });
    };

    // Видалення прогрес-бару
    const removeProgressBar = (item) => {
        const progressBar = item.querySelector('.side-item__progress-bar');
        if (progressBar) {
            progressBar.remove();
        }
    };

    // Додавання прогрес-бару
    const addProgressBar = (item) => {
        let progressBar = item.querySelector('.side-item__progress-bar');

        // Якщо прогрес-бар не існує, створюємо його
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.classList.add('side-item__progress-bar');
            item.querySelector('.side-item__info').appendChild(progressBar);
        }

        // Встановлюємо стартові значення прогрес-бару
        progressBar.style.width = '0%';
        progressBar.style.transition = 'none';

        // Затримка перед початком анімації
        setTimeout(() => {
            progressBar.style.transition = `width ${changeInterval}ms linear`;
            progressBar.style.width = '100%';
        }, 50); // Невелика затримка для кращого візуального ефекту

        progressBar.addEventListener('transitionend', () => {
            progressComplete = true;
            if (!isHovered) {
                autoChange();
            }
        });
    };

    // Автоматичне перемикання слайдів
    const autoChange = () => {
        if (!isHovered) {
            currentIndex = (currentIndex + 1) % carouselSideItems.length;
            changeMainInfo(currentIndex);
        }
    };

    // Початок автоматичної зміни елементів
    const startAutoChange = () => {
        clearInterval(autoChangeInterval);
        autoChangeInterval = setInterval(autoChange, changeInterval);
    };

    // Обробка подій для елементів каруселі
    carouselSideItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active') && currentIndex === idx) return; // Якщо елемент активний, нічого не робимо

            // Зупиняємо автоматичну зміну
            clearInterval(autoChangeInterval);
            currentIndex = idx;
            changeMainInfo(idx);
            startAutoChange();
        });

        item.addEventListener('mouseenter', () => {
            if (item.classList.contains('active')) {
                isHovered = true;
                clearInterval(autoChangeInterval); // Зупиняємо автоматичну зміну
            }
        });

        item.addEventListener('mouseleave', () => {
            if (item.classList.contains('active')) {
                isHovered = false; // Скидаємо прапорець, що миша більше не наведена

                // Відновлення автоматичної зміни або перемикання, якщо прогрес-бар завершився
                const progressBar = item.querySelector('.side-item__progress-bar');
                if (progressBar && progressComplete) {
                    autoChange(); // Якщо прогрес-бар завершився, змінюємо слайд
                } else {
                    startAutoChange(); // Якщо прогрес-бар ще не завершився, просто відновлюємо автоматичну зміну
                }
            }
        });
    });

    // Оновлення початкового елемента
    changeMainInfo(currentIndex);
    startAutoChange();
});