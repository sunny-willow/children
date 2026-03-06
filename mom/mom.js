'use strict';

let sport = document.getElementById('sport');
let film = document.getElementById('film');
let recipes = document.getElementById('recipes');

sport.addEventListener('click', function() {
    window.location = 'sport/sport.html';
})

film.addEventListener('click', function() {
    window.location = 'film/film.html';
})

recipes.addEventListener('click', function() {
    window.location = 'recipes/recipes.html';
})