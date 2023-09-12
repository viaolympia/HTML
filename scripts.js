document.addEventListener('DOMContentLoaded', function () {
    
    const links = document.querySelectorAll('a');
    const boxes = document.querySelectorAll('.box');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

           
            boxes.forEach((box) => {
                box.classList.remove('highlighted');
            });

           
            const targetId = link.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);
            if (targetBox) {
                targetBox.classList.add('highlighted');
            }
        });
    });

    $(document).ready(function () {
        $('.gallery-section').slick({
            slidesToShow: 3, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 3000, 
            arrows: false, 
        });
    });
    $(document).ready(function () {
      
        $('a[href="#gallery-section"]').click(function () {
            
            $('html, body').animate({
                scrollTop: $('#gallery-section').offset().top
            }, 1000); 
            return false; 
        });
    });

});