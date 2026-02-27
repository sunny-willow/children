'use strict';

let mom = document.getElementById('mom');
let child = document.getElementById('child');

mom.addEventListener('click', function() {
    //window.location = 'mom/mom.html';
    window.open('mom/mom.html', '_blank');
})

child.addEventListener('click', function() {
    //window.location = 'child/child.html';
    window.open('child/child.html', '_blank');
})