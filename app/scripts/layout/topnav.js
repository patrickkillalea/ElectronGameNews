var currGame = "";

function changeGame(game) {
    currGame = game;
    console.log("Current game: " + currGame);
    // console.log("Current game111: " + "#" + game + "/Fixtures.html");
}

function newsTop(currGame) {
    console.log("News for: " + currGame);
    window.location.href = "#" + currGame + "news";
    console.log("Newssss for: " + "#" + currGame + "news");
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
