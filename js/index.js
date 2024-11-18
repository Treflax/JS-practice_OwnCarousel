/* document.addEventListener('DOMContentLoaded', () => { */
//     const carouselMainImage = document.querySelector('.main-item__img');
//     const carouselTitle = document.querySelector('.main-item__title');
//     const carouselDescription = document.querySelector('.main-item__description');
//     const carouselSideItems = document.querySelectorAll('.carousel__side-item');

//     if (!carouselMainImage || !carouselTitle || !carouselDescription || carouselSideItems.length === 0) {
//         console.error("Не знайдені всі необхідні елементи каруселі.");
//         return;
//     }

//     let currentIndex = 0;
//     const changeInterval = 10000; // Інтервал для автоматичної зміни (10 секунд)
//     let autoChangeInterval;
//     let isHovered = false; // Перемикач для перевірки наведення на елемент
//     let progressComplete = false; // Перевірка чи завершено заповнення прогрес-бару

//     // Функція для додавання прогрес-бару
//     function addProgressBar(item) {
//         let progressBar = item.querySelector('.carousel__side-item__progress-bar');
//         if (!progressBar) {
//             progressBar = document.createElement('div');
//             progressBar.classList.add('side-item__progress-bar');
//             item.querySelector('.side-item__info').appendChild(progressBar);
//         }

//         // Очищення попередніх значень
//         progressBar.style.width = '0%'; 
//         progressBar.style.transition = 'none'; // Вимикаємо анімацію, щоб почати з 0%

//         // Анімація прогрес-бару
//         setTimeout(() => {
//             progressBar.style.transition = `width ${changeInterval}ms linear`; // Включаємо анімацію
//             progressBar.style.width = '100%'; // Запускаємо заповнення прогрес-бару до 100%
//         }, 500); // Маленька затримка перед початком анімації
//     }

//     // Функція для видалення прогрес-барів з неактивних елементів
//     function removeProgressBars() {
//         carouselSideItems.forEach((item) => {
//             if (!item.classList.contains('active')) {
//                 const progressBar = item.querySelector('.side-item__progress-bar');
//                 if (progressBar) {
//                     progressBar.remove();
//                 }
//             }
//         });
//     }

//     // Функція для зміни основного зображення та інформації
//     function changeMainInfo(index) {
//         carouselSideItems.forEach((item, idx) => {
//             item.classList.toggle('active', idx === index);

//             if (idx === index) {
//                 carouselMainImage.style.opacity = 0;
//                 setTimeout(() => {
//                     carouselMainImage.setAttribute('src', item.getAttribute('data-image'));
//                     carouselTitle.textContent = item.getAttribute('data-title');
//                     carouselDescription.textContent = item.getAttribute('data-description');
//                     carouselMainImage.style.opacity = 1;
//                     addProgressBar(item); // Додаємо прогрес-бар для активного елемента
//                 }, 500); // Час на згладжування зміни зображення
//             }
//         });
//         removeProgressBars(); // Видаляємо прогрес-бари з неактивних елементів
//         progressComplete = false; // Скидаємо статус прогрес-бару
//     }

//     // Функція для автоматичної зміни активного елемента
//     function autoChange() {
//         if (!isHovered) {
//             currentIndex = (currentIndex + 1) % carouselSideItems.length; // Циклічна зміна елементів
//             changeMainInfo(currentIndex); // Змінюємо основне зображення
//         }
//     }

//     // Функція для запуску автоматичної зміни
//     function startAutoChange() {
//         clearInterval(autoChangeInterval); // Зупиняємо попередній інтервал
//         autoChangeInterval = setInterval(autoChange, changeInterval); // Створюємо новий інтервал
//     }

//     // Обробники подій для кожного елемента
//     carouselSideItems.forEach((item, idx) => {
//         // Обробник кліку на елемент
//         item.addEventListener('click', () => {
//             clearInterval(autoChangeInterval); // Зупиняємо автоматичну зміну
//             currentIndex = idx;
//             changeMainInfo(idx); // Змінюємо основне зображення
//             startAutoChange(); // Перезапускаємо автоматичну зміну
//         });

//         // Обробник наведення миші
//         item.addEventListener('mouseenter', () => {
//             if (item.classList.contains('active')) {
//                 isHovered = true; // Встановлюємо прапорець про те, що миша наведена
//                 clearInterval(autoChangeInterval); // Зупиняємо автоматичну зміну
//             }
//         });

//         // Обробник відведення миші
//         item.addEventListener('mouseleave', () => {
//             if (item.classList.contains('active')) {
//                 isHovered = false; // Скидаємо прапорець

//                 // Відновлення прогрес-бару після відведення миші
//                 const progressBar = item.querySelector('.side-item__progress-bar');
//                 if (progressBar) {
//                     // Якщо прогрес-бар завершився, перемикаємо на наступний елемент
//                     if (progressComplete) {
//                         autoChange();
//                     } else {
//                         // Якщо прогрес-бар не завершився, то перезапускаємо автоматичну зміну
//                         startAutoChange();
//                     }
//                 }
//             }
//         });
//     });

//     // Ініціалізація першого елемента та автоматичної зміни
//     changeMainInfo(currentIndex); 
//     startAutoChange(); 
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const carouselMainImage = document.querySelector('.main-item__img');
//     const carouselMainTitle = document.querySelector('.main-item__title');
//     const carouselMainDescription = document.querySelector('.main-item__description');
//     const carouselSideItems = document.querySelectorAll('.carousel__side-item');

//     let currentIndex = 0;
//     const changeInterval = 10000; // 10 seconds
//     let isHovered = false;
//     let progressComplete = false;
//     let autoChangeInterval;

//     // Видаляємо прогрес-бари з усіх елементів
//     const removeProgressBars = () => {
//         carouselSideItems.forEach(item => {
//             const progressBar = item.querySelector('.side-item__progress-bar');
//             if (progressBar) {
//                 progressBar.style.transition = 'none'; // Вимикаємо анімацію
//                 progressBar.style.width = '0%'; // Скидаємо ширину
//                 progressBar.remove(); // Видаляємо прогрес-бар
//             }
//         });
//     };

//     // Додаємо прогрес-бар
//     const addProgressBar = (item) => {
//         let progressBar = item.querySelector('.side-item__progress-bar');

//         if (!progressBar) {
//             progressBar = document.createElement('div');
//             progressBar.classList.add('side-item__progress-bar');
//             item.querySelector('.side-item__info').appendChild(progressBar);
//         }

//         // Скидаємо прогрес-бар перед тим, як анімація почнеться
//         progressBar.style.width = '0%';
//         progressBar.style.transition = 'none'; // Вимикаємо анімацію на початку

//         // Затримка перед запуском анімації
//         setTimeout(() => {
//             progressBar.style.transition = `width ${changeInterval}ms linear`;
//             progressBar.style.width = '100%';
//         }, 50); // Невелика затримка для кращого візуального ефекту

//         progressBar.addEventListener('transitionend', () => {
//             progressComplete = true;
//             if (!isHovered) {
//                 autoChange();
//             }
//         });
//     };

//     // Оновлюємо головну інформацію на основі індексу
//     const changeMainInfo = (index) => {
//         // Спочатку видаляємо прогрес-бари з усіх елементів
//         removeProgressBars();

//         carouselSideItems.forEach((item, idx) => {
//             item.classList.toggle('active', idx === index);

//             if (idx === index) {
//                 carouselMainImage.style.opacity = 0;
//                 setTimeout(() => {
//                     // Оновлюємо контент головної частини
//                     carouselMainImage.setAttribute('src', item.getAttribute('data-image'));
//                     carouselMainTitle.textContent = item.getAttribute('data-title');
//                     carouselMainDescription.textContent = item.getAttribute('data-description');
//                     carouselMainImage.style.opacity = 1;

//                     // Додаємо прогрес-бар тільки для активного елемента
//                     addProgressBar(item);
//                 }, 100); // Зменшена затримка для більш плавної зміни
//             }
//         });
//     };

//     // Функція для автоматичної зміни елементів
//     const autoChange = () => {
//         if (!isHovered) {
//             currentIndex = (currentIndex + 1) % carouselSideItems.length;
//             changeMainInfo(currentIndex);
//         }
//     };

//     // Починаємо автоматичну зміну елементів
//     const startAutoChange = () => {
//         clearInterval(autoChangeInterval);
//         autoChangeInterval = setInterval(autoChange, changeInterval);
//     };

//     // Додаємо обробку подій для кожного елемента каруселі
//     carouselSideItems.forEach((item, idx) => {
//         item.addEventListener('click', () => {
//             if (item.classList.contains('active') && currentIndex === idx) return; // Якщо елемент активний, нічого не робимо

//             // Зупиняємо авто зміну
//             clearInterval(autoChangeInterval);
//             currentIndex = idx;
//             changeMainInfo(idx);
//             startAutoChange();
//         });

//         item.addEventListener('mouseenter', () => {
//             if (item.classList.contains('active')) {
//                 isHovered = true;
//                 clearInterval(autoChangeInterval); // Зупиняємо авто зміну при наведенні миші
//             }
//         });

//         item.addEventListener('mouseleave', () => {
//             if (item.classList.contains('active')) {
//                 isHovered = false;
//                 startAutoChange(); // Повертаємо авто зміну при відведенні миші
//             }
//         });
//     });

//     // Оновлюємо інформацію для початкового елемента
//     changeMainInfo(currentIndex);
//     startAutoChange();
// });

/* document.addEventListener('DOMContentLoaded', () => {
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
}); */

document.addEventListener('DOMContentLoaded', () => {
    const carouselMainImage = document.querySelector('.main-item__img')
    const carouselMainTitle = document.querySelector('.main-item__title')
    const carouselMainDescription = document.querySelector('.main-item__description')
    const carouselSideItems = document.querySelectorAll('.carousel__side-item')

    const changeInterval = 10000;
    let autoChangeInterval;
    let isHovered = false;
    let progressComplete = false;
    let currentIndex = 0;

    const changeMainInfo = (index) => {
        carouselSideItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === index)
            if(idx === index) {
                carouselMainImage.style.opacity = 0
                setTimeout(() => {
                    carouselMainImage.setAttribute('src', item.getAttribute('data-image'));
                    carouselMainTitle.textContent = item.getAttribute('data-title');
                    carouselMainDescription.textContent = item.getAttribute('data-description');
                    carouselMainImage.style.opacity = 1;

                    addProgressBar(item)
                }, 100)
            } else (
                removeProgressBar(item)
            )
        })
    }

    const addProgressBar = (item) => {
        let progressBar = item.querySelector('.side-item__progress-bar')

        if(!progressBar) {
            progressBar = document.createElement('div')
            progressBar.classList.add('side-item__progress-bar')
            item.querySelector('.side-item__info').appendChild(progressBar)
        }

        progressBar.style.width = '0%'
        progressBar.style.transition = 'none'

        setTimeout(() => {
            progressBar.style.width = '100%'
            progressBar.style.transition = `width ${changeInterval}ms linear`
        }, 50);

        progressBar.addEventListener('transitionend', () => {
            progressComplete = true
            if(!isHovered) {
                autoChange()
            }
        })
    }

    const removeProgressBar = (item) => {
        const progressBar = item.querySelector('.side-item__progress-bar');
        if(progressBar) {
            progressBar.remove()
        }
    }

    const autoChange = () => {
        if(!isHovered) {
            currentIndex = (currentIndex + 1) % carouselSideItems.length
            changeMainInfo(currentIndex)
        }
    }

    const startAutoChange = () => {
        clearInterval(autoChangeInterval)
        autoChangeInterval = setInterval(autoChange, changeInterval)
    }

    carouselSideItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
            if(item.classList.contains('active') && currentIndex === idx) return
            clearInterval(autoChangeInterval)
            currentIndex = idx
            changeMainInfo(idx)
            startAutoChange()
        })

        item.addEventListener('mouseenter', () => {
            if(item.classList.contains('active')) {
                isHovered = true
                clearInterval(autoChangeInterval)
            }
        })

        item.addEventListener('mouseleave', () => {
            isHovered = false
            const progressBar = item.querySelector('.side-item__progress-bar');
            if(progressBar && progressComplete) {
                autoChange()
            } else {
                startAutoChange
            }
        })
    })
    changeMainInfo(currentIndex)
    startAutoChange()
})

