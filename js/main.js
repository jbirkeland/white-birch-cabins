var submitButton = document.querySelector('.submit-icon')

submitButton.addEventListener('click', function() {
    console.log('clicky!!!');
    document.querySelector('form')
        .classList
        .toggle('submit-open');
});

var closeButton = document.querySelector('.close-icon')

closeButton.addEventListener('click', function() {
    console.log('close it');
    document.querySelector('form')
        .classList
        .toggle('submit-icon');
});