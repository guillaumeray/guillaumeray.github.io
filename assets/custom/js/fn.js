$(document).ready(function () {
    let dateString = document.querySelector('#age').getAttribute('value');
    var ageInMilliseconds = new Date() - new Date(dateString);
    document.querySelector('#age').innerHTML = Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
});
