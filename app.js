const scaleBtns = document.querySelectorAll('.scaleBtn');

scaleBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        this.style.transform = 'scale(.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200)
    })
})

const burgerClick = document.getElementById('burger-click');

burgerClick.addEventListener('click', function(){
    const showBurger = burgerClick.nextElementSibling;
    showBurger.classList.toggle('show');
    console.log(showBurger)
})
