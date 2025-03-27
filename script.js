'use strict'

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const sliderDiv = document.getElementById("slider")
let sliderImages = sliderDiv.querySelectorAll('img')
sliderImages.forEach( img => img.onclick = moveSlide )

const slideAnimationTimeout = 1200 // длительность CSS-перехода

function moveSlide(event) {
    event.target.classList.add('move-left')
    setTimeout( movSlideBack, slideAnimationTimeout, 
event.target

 )
}
function movSlideBack(slide) {
    slide.remove() // удаляем слайд
    sliderDiv.prepend(slide) // перемещаем в начало (так как виден при наложении блоков последний)
    slide.classList.remove('move-left') // убираем класс, что бы слайд вернулся на место
}
function moveSlideAuto() {
    sliderImages[sliderImages.length-1].classList.add('move-left')
    setTimeout( movSlideBack, slideAnimationTimeout, sliderImages[sliderImages.length-1] )
    sliderImages = sliderDiv.querySelectorAll('img')
}
setInterval(moveSlideAuto, 3000) 

const minuteMilliseconds = 1000 * 60
const hourMilliseconds = minuteMilliseconds * 60
const dayMilliseconds = hourMilliseconds * 24

const startSaleTime = 1743448283000
const endSaleTime = startSaleTime + dayMilliseconds * 4

let saleday = document.getElementById("1")
let salehour = document.getElementById("2")
let saleminute = document.getElementById("3")
let salesecond = document.getElementById("4")

function updateSaleDate() {

    let rest = endSaleTime - Date.now()
    let days = Math.floor(rest / dayMilliseconds)

    rest -= days * dayMilliseconds
    let hours = Math.floor(rest / hourMilliseconds)

    rest -= hours * hourMilliseconds
    let minutes = Math.floor(rest / minuteMilliseconds)

    rest -= minutes * minuteMilliseconds
    let seconds = Math.ceil(rest / 1000)

    saleday.innerText = days
    salehour.innerText = hours
    saleminute.innerText = formatTo00(minutes)
    salesecond.innerText = formatTo00(seconds)
}

function formatTo00(number) {
    if (number < 10) return '0' + number
    return number
}

setInterval(updateSaleDate, 1000)

let nam =''
let surname = ''
let quantity = ''
let email = ''
let review = ''

function changeName(value) {
    nam = value.trim()
}

function changeSurname(value) {
    surname = value.trim()
}

function changeQuantity(value) {
    quantity = value.trim()
}

function changeEmail(value) {
    email = value.trim()
}

function changeReview(value) {
    review = value.trim()
}


function clickSubmit() {
    if (nam == '' || surname == '' || email == '' || quantity == '') {
        alert('Заполните поля')
        return
    }
    if (nam.length < 2 || surname.length < 2) {
        alert('В имени или фамилии должно быть больше 2 символов')
        return
    }
    if (email.indexOf('@') == -1 || email[0] == '@' || email.indexOf('@') > email.indexOf('.') || email.indexOf('.') - email.indexOf('@') <= 1) {
        alert('Почта написана неверно')
        return
    }
    if (quantity > 100) {
        alert('Слишком большое колличество ассистентов')
    }
    alert('Заказ отправлен!')
}

function clickSubmit2() {
    if (nam == '' || surname == '' || email == '' || review == '') {
        alert('Заполните поля')
        return
    }
    if (nam.length < 2 || surname.length < 2) {
        alert('В имени или фамилии должно быть больше 2 символов')
        return
    }
    if (email.indexOf('@') == -1 || email[0] == '@' || email.indexOf('@') > email.indexOf('.') || email.indexOf('.') - email.indexOf('@') <= 1) {
        alert('Почта написана неверно')
        return
    }
    if (review.length < 2) {
        alert('Слишком мало слов')
    }
    alert('Отзыв отправлен!')
}

const phrases = [
    "Привет! Я ИИ 🤖",
    "Как настроение?",
    "Искусственный интеллект — это будущее!",
    "Искусственный интеллект в деле! 🚀",
    "Я учусь и развиваюсь! 📚"
  ];
  
  function changePhrase() {
    const textElement = document.getElementById("robot-text");
    let randomIndex = Math.floor(Math.random() * phrases.length);
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.textContent = phrases[randomIndex];
      textElement.style.opacity = 1;
    }, 500);
  }
  
  setInterval(changePhrase, 15000);