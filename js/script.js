$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.btn__info').toggleClass('disabled');
    })
})