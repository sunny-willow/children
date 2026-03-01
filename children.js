'use strict';

let mom = document.getElementById('mom');
let child = document.getElementById('child');
let children = document.getElementById('children');
//локально работает, между прочим, и без строчек выше

mom.addEventListener('click', function() {
    //window.location = 'mom/mom.html';
    window.open('mom/mom.html', '_blank');
})

child.addEventListener('click', function() {
    //window.location = 'child/child.html';
    window.open('child/child.html', '_blank');
})

children.addEventListener('click', function() {
    //window.location = 'children/children.html';
    window.open('children/children.html', '_blank');
})