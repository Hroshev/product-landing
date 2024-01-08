var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
    //   centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const menuItems = document.querySelectorAll("#menu a");

hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    const _this = e.currentTarget;

    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
    } else {
        menu.classList.add("show-menu");
    }
});

menuItems.forEach(function (item, idx) {
    item.addEventListener("click", function (e) {
        menu.classList.remove("show-menu");
    });
});
