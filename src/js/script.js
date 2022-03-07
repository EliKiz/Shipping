
const slider = tns({
    container: '.reviev__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
});

$(document).ready(function(){
    function validateForms(form){
     $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 4,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуста введите свое имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа!!!")
              },
            phone: {
                required: "Пожалуста введите номер телефона",
                minlength: jQuery.validator.format("Введите минимум {0} символа!!!")
            },
            email: {
              required: "Пожалуста введите свой email",
              email: "Пример name@domain.com"
            }
        }
    });
};
validateForms('#consultation-form');
validateForms('#contacts-form');

});
