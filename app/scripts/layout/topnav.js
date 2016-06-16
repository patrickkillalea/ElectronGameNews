var currGame = "home";
var prevGame = "";

function changeGame(game) {
    prevGame = currGame;
    currGame = game;
    console.log("Current game: " + currGame);
    var d = document.getElementById(currGame+"Link");
    d.className += " active";
    prevGameInactive(prevGame);
}

function prevGameInactive(prevGame) {
    var d = document.getElementById(prevGame+"Link");
    d.className = "nodrag iconimage";
}

function newsTop(currGame) {
    console.log("News for: " + currGame);
    window.location.href = "#" + currGame + "news";
}

function fixturesTop(currGame) {
    console.log("Fixtures for: " + currGame);
    window.location.href = "#" + currGame + "fixtures";
}

function competitionsTop(currGame) {
    console.log("Competitions for: " + currGame);
    window.location.href = "#" + currGame + "competitions";
}

function resourcesTop(currGame) {
    console.log("Resources for: " + currGame);
    window.location.href = "#" + currGame + "resources";
}

function closeApp() {
    var remote = require('remote');
    console.log("Closing Application");
    var window = remote.getCurrentWindow();
    window.close();
}

function maximizeApp() {
    var remote = require('remote');

    var window = remote.getCurrentWindow();

    if (window.isFullScreen()) {
        console.log("Restore Application");
        window.setFullScreen(false)
    } else {
        console.log("Maximize Application");
        window.setFullScreen(true)
    }
}

function minimizeApp() {
    var remote = require('remote');
    console.log("Minimize Application");
    var window = remote.getCurrentWindow();
    window.minimize();
}
