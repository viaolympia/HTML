document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо всі посилання для навігації та бокси
    const links = document.querySelectorAll('a');
    const boxes = document.querySelectorAll('.box');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Зупиняємо перехід за посиланням

            // Видаляємо клас підсвічування для всіх боксів
            boxes.forEach((box) => {
                box.classList.remove('highlighted');
            });

            // Отримуємо ідентифікатор з атрибута "data-target" посилання і додаємо клас підсвічування до відповідного боксу
            const targetId = link.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);
            if (targetBox) {
                targetBox.classList.add('highlighted');
            }
        });
    });

    $(document).ready(function () {
        $('.gallery-section').slick({
            slidesToShow: 3, // Кількість відображуваних слайдів
            slidesToScroll: 1, // Кількість прокручуваних слайдів за один раз
            autoplay: true, // Включити автоматичну прокрутку
            autoplaySpeed: 3000, // Швидкість автоматичної прокрутки (у мілісекундах)
            arrows: false, // Вимкнути кнопки "Попередній" і "Наступний"
        });
    });
    $(document).ready(function () {
        // Обробник події натискання кнопки "Gallery"
        $('a[href="#gallery-section"]').click(function () {
            // Прокручуємо сторінку до елемента з ID "gallery-container"
            $('html, body').animate({
                scrollTop: $('#gallery-section').offset().top
            }, 1000); // 1000 мілісекунд (1 секунда) - час анімації прокрутки
            return false; // Відміняємо дійсну адресу посилання
        });
    });

});