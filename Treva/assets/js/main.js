!(function ($) {
    "Use Strict"



    //Stick on top on scroll
    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
                $("#header").css("top", "0");
            }

            else {
                $("#header").css("top", "10px");
            }
        })
    })

    $(document).ready(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
                $("#header").css("background", "#03062f");
            }

            else {
                $(".clr-ch").css("color", "#fff");
            }
        })
    })

    //Product Gallery
    let btnAdd = document.querySelector('#add');
    let btnSubtract = document.querySelector('#subtract');
    let input = document.querySelector('input');

    btnAdd.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
    });

    btnSubtract.addEventListener('click', () => {
        input.value = parseInt(input.value) - 1;
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 2000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);