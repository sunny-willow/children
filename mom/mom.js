'use strict';

let sport = document.getElementById('sport');
let film = document.getElementById('film');
let recipes = document.getElementById('recipes');

sport.addEventListener('click', function() {
    window.open('sport/sport.html', '_blank');
})

film.addEventListener('click', function() {
    window.open('film/film.html', '_blank');
})

recipes.addEventListener('click', function() {
    window.open('recipes/recipes.html', '_blank');
})