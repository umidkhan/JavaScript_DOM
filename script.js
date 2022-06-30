let navbar = document.querySelector('.navbar')
let blue = document.querySelector('.blue')
let red = document.querySelector('.red')
let indigo = document.querySelector('.indigo')
let yellow = document.querySelector('.yellow')
let grey = document.querySelector('.grey')
let white = document.querySelector('.default')

blue.addEventListener('click', (e) => {
    navbar.style.background = "blue"
    navbar.style.transition = "3s"
    alert('You chose blue')
})

red.addEventListener('click', (e) => {
    navbar.style.background = "red"
    navbar.style.transition = "3s"
    alert('You chose red')
})

indigo.addEventListener('click', (e) => {
    navbar.style.background = "indigo"
    navbar.style.transition = "3s"
    alert('You chose indigo')
})

yellow.addEventListener('click', (e) => {
    navbar.style.background = "yellow"
    navbar.style.transition = "3s"
    alert('You chose yellow')
})

grey.addEventListener('click', (e) => {
    navbar.style.background = "rgb(136,135,152)";
    navbar.style.background = "linear-gradient(90deg, rgba(136,135,152,1) 0%, rgba(136,135,152,1) 0%)";
    navbar.style.transition = "3s"
    alert('You chose grey')
})

white.addEventListener('click', (e) => {
    navbar.style.background = "white"
    navbar.style.transition = "5s"
    alert('You choose default')
})













// h1.addEventListener('click', () => {
//     h1.style.color = 'red'
// })
// for (let i = 0; i <= box.length; i++) {
//    box[i].addEventListener('click', function(e) {
//     box[i].style.background = 'red';
//     box[i].style.color = 'white';
//     console.log('Hello World');
//    }) 

// }
















// let box = document.querySelector('.box');
// let h1 = document.querySelector('h1');




// box.forEach(element => {
//     element.addEventListener('click', () => {
//         element.style.background = 'red'
//     })
// });


// box.forEach(element => {
//     element.addEventListener('dblclick', () => {
//         element.style.background = 'blue'
//         element.style.width = '100px';
//         element.style.transition = '0.5s';
//     })
// });