// Ждем, пока страница полностью загрузится, после чего выполняем код
$(function () {

    // Получаем объекты секции "intro" и шапки сайта
    let intro = $("#intro");
    let header = $("#header");
    // Получаем высоту шапки сайта и секции "intro" сразу после загрузки страницы
    let headerH = header.innerHeight(); // метод который высчитывает высоту любого <div> который указан в переменной.
    let introH = intro.innerHeight();


    // Header class on scroll
    // =============================================================

    headerScroll();

    $(window).on("scroll resize", function () {
        headerScroll();
    });

    // Функция отслеживает события прокрутки страницы и изменения размеров окна (resize)
    function headerScroll() {
        // При каждом событии прокрутки или изменения размеров окна, обновляем высоту шапки и секции "intro"
        headerH = header.innerHeight(); // метод который высчитывает высоту любого <div> который указан в переменной.
        introH = intro.innerHeight();

        // Получаем текущую позицию прокрутки страницы
        let scrollTop = $(this).scrollTop();

        // Если позиция прокрутки больше или равна разнице между высотой секции "intro" и шапки, добавляем класс для темного фона шапки
        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
        } else {
            // В противном случае, удаляем класс для темного фона шапки
            header.removeClass("header--dark");
        }
    }

    // Smooth Scroll to section
    // =============================================================
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500);
    });
});


// ScrollSpy


