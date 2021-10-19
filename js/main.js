$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 50,
        items: 3,
        loop: true
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector(".header");
    const headerNavigationLink = document.querySelectorAll(".header__navigation__link");
    const headerNavigationSearchInput = document.querySelector(".header__navigation__search__input");
    const headerNavigationSearchBtn = document.querySelector(".header__navigation__search__btn");
    const headerNocturne = document.querySelector(".header__nocturne");
    const headerTitle = document.querySelector(".header__title");

    header.classList.toggle('sticky', window.scrollY > 0);
    headerNavigationSearchInput.classList.toggle('sticky', window.scrollY > 0);
    headerNavigationSearchBtn.classList.toggle('sticky', window.scrollY > 0);
    headerNocturne.classList.toggle('sticky', window.scrollY > 0);
    headerTitle.classList.toggle('sticky', window.scrollY > 0);

    headerNavigationLink.forEach(link => {
        link.classList.toggle('sticky', window.scrollY > 0);
    });
});