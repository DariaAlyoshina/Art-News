$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.btn-info').toggleClass('disabled');
    })
})

window.addEventListener('scroll' , e => {
    let navbar = document.getElementById('header').classList
    let active_class = "navbar_scrolled"

    if(scrollY > 150) navbar.add(active_class)
    else navbar.remove(active_class)
})