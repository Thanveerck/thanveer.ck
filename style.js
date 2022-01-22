const navigation = function () {
const burger = document.querySelector('.burger-btn');
const navbar = document.querySelector('nav');
const close = document.querySelector('.close-btn');

burger.addEventListener('click', () =>{
    navbar.classList.add('open-nav');
});

close.addEventListener('click' , () =>{
    navbar.classList.remove('open-nav')
})

    
}


navigation();