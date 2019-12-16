let image = document.querySelector("img");
const text = document.querySelector("p");
const dots = [...document.querySelectorAll(".dots span")];

const time = 2000
let index = 0

const imageAndText = [{
        img: "img/bees-1806219_640.jpg",
        text: "W ulu ma miejsce podzial ról. Na zdjęciu matka z opiekującą się nią świtą."
    },
    {
        img: "img/beehive-3270566_640.jpg",
        text: "Czerw pszczeli, niedlugo wygryzą sie młode pszczółki."
    },
    {
        img: "img/beehive-3960986_640.jpg",
        text: "Przychodzi taki moment, że część pszczół ze starą matka postanawia uciec z ula(tzw. rójka) i zalozyć rodzinę w innym miejscu."
    },
    {
        img: "img/beekeeper-215184_640.jpg",
        text: "Czasami trudno zapanować nad taką rójką ;)."
    },
    {
        img: "img/beekeeper-4426003_640.jpg",
        text: "Praca przy pszczołach może być hobby całej rodziny."
    },
    {
        img: "img/bees-345628_640.jpg",
        text: "Cała ramka zalana miodem."
    },
    {
        img: "img/bees-2351041_640.jpg",
        text: "Pamiętaj, to nie są pszczoły. To są osy."
    },
    {
        img: "img/bees-676012_640.jpg",
        text: "Znajdź matkę jeśli potrafisz :)."
    },
    {
        img: "img/bees-4322014_640.jpg",
        text: "Zabieramy pszczołom miód, więc musimy je czymś nakarmić."
    },
    {
        img: "img/bees-pasture-2291125_640.jpg",
        text: "Czasami pszczelarz musi wywozić pszczoły wiele kilometrów od pasieki na pożytki"
    },
    {
        img: "img/insect-1540232_640.jpg",
        text: "To osa. Pamiętaj!!!"
    },
    {
        img: "img/medium-wall-1387548_640.jpg",
        text: "Zapracowane pszczoły nie zwracaja uwagi na pszczelarza"
    },
    {
        img: "img/nest-169176_640.jpg",
        text: "To jest gniazdo os a nie pszczół !!!!"
    },
    {
        img: "img/sunflower-2492579_640.jpg",
        text: "Może będzie pyszny miód słonecznikowy"
    },
    {
        img: "img/insect-hotel-3289687_640.jpg",
        text: "Ty również możesz pomóc pszczołom"
    },
]

const changeImage = () => {

    index++;
    if (index === dots.length) {
        index = 0
    }
   
    image.src = imageAndText[index].img;
    text.textContent = imageAndText[index].text;
 changeDots()

}
let changeInTime = setInterval(changeImage, time)

const changeDots = () => {
    const active = dots.findIndex(dot => dot.classList.contains("active"));
    dots[active].classList.remove("active");
    dots[index].classList.toggle("active")
    // console.log(active)

}

const manualChange = (e) => {

    if (e.keyCode === 38 || e.keyCode === 37) {
        e.keyCode === 38 && index--;
        e.keyCode === 37 && index--;
        clearInterval(changeInTime)
        if (index < 0) {
            index = dots.length - 1
        }
    } else if (e.keyCode === 40 || e.keyCode === 39) {
        clearInterval(changeInTime)
        e.keyCode === 40 && index++;
        e.keyCode === 39 && index++;
        if (index == dots.length) {
            index = 0
        }

    }
    const active = dots.findIndex(dot => dot.classList.contains("active"));
    dots[active].classList.remove("active");
    dots[index].classList.toggle("active");
    image.src = imageAndText[index].img;
    text.textContent = imageAndText[index].text;

    changeInTime = setInterval(changeImage, time)
}


window.addEventListener("keyup", manualChange)