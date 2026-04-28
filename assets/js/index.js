//clown
const clown = document.querySelector('#clown')
clown.style.top = "400px"
clown.style.display = "none"
const contscore = document.querySelector('#scorecontainer')
  let tetris = new Audio()
    tetris.src = "./assets/songs/[Jeu] Musique - Tetris.mp3"
let chrono = 30
let score = 0

//clown button 
clown.addEventListener("click", function (e) {
    move()
    score++

    contscore.textContent = "score : " + score

})

//deplacement du clown
function move() {
    const width = document.querySelector('main').offsetWidth
    const heigtrh = document.querySelector('main').offsetHeight

    clown.style.top = randomize(0, heigtrh) + "px"
    clown.style.left = randomize(0, (width)) + "px"
}

function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

//deplacement du clown au click
function move() {
    clown.style.top = randomize(1, 100) + "%";
    clown.style.left = randomize(1, 100) + "%";
}
function playpartie(difficult) {
    contscore.textContent = "score : 0"
    //deplacment du clown auto 
    moveclown = setInterval(() => {
        clown.style.top = randomize(1, 100) + "%";
        clown.style.left = randomize(1, 100) + "%";

    }, difficult);

    //creation du timer
    const timercontainer = document.querySelector('#timer')
    timercontainer.textContent = "timer : " + chrono
    timer = setInterval(() => {
        chrono--

        timercontainer.textContent = "timer : " + chrono
        if (chrono == 0) {
            clearInterval(timer)
            clearInterval(moveclown)
            fin()
            
        }
    }, 1000);
    
}
//son forsure
function forsure() {
    let forsure = new Audio()
    forsure.src = "./assets/songs/macron-for-sure.mp3"
    forsure.play()
}

function menu(difficult) {

    //btn play
    const menu = document.querySelector('#menu')
    menu.classList.add("hidden")

    clown.style.display = ""

    playpartie(difficult)
    forsure()
    tetris.play()
}

const btndiff = document.querySelector('#difficultés')

btndiff.addEventListener('click', function () {
    difficulté()
})

function fin() {
    chrono = 30
    score = 0
    
    const menu = document.querySelector('#menu')
    menu.classList.remove('hidden')
    tetris.pause()
    const btnplay = document.querySelector('#play')
    clown.style.display = "none"
    difficulté.style.display = "none"
    
}


function difficulté() {
    const menu = document.querySelector('#menu')
    menu.classList.add("hidden")

    const difficultés = document.querySelector('#difficultébox')
    difficultés.style.display = "flex"
    const btnnormal = document.querySelector('#btnnormal')
    btnnormal.addEventListener('click', function () {
        difficultés.style.display = "none"
    })
    const btnhard = document.querySelector('#btnhard')
    btnhard.addEventListener('click', function () {
        difficultés.style.display = "none"
    })
}

