import * as sound from './FocusTimer/sounds.js'

const themes = document.querySelector('.themes');

document.documentElement.classList.add('forest')
const themeForest = document.querySelector('#forest')
themeForest.classList.add('active')


document.addEventListener("DOMContentLoaded", function () {
    const themeItems = document.querySelectorAll(".themes .ph");

    themeItems.forEach(function (item) {
        item.addEventListener("click", function () {

            document.documentElement.classList.remove('forest', 'rain', 'cafe', 'fireplace')
            document.documentElement.classList.add(item.id)

            //percorrendo um módulo sem pegar apenas o nome do atributo
            Object.values(sound).forEach(item => item.pause())
            sound[item.id].play()

            themeItems.forEach(function (item) {
                console.log
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});
