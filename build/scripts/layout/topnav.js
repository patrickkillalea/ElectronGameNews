var currGame = "home";
var prevGame = "";


function changeGame(game) {
    prevGame = currGame;
    currGame = game;
    var d = document.getElementById(currGame+"Link");
    d.className += " active";

if (currGame==="home") {
    menuitem = document.getElementById("topNavLinks");
    menuitem.className = "nodrag hidenav";
    }
    else{
        var menuitem = document.getElementById("topNavLinks");
    menuitem.className = "nodrag"; 
    }

    prevGameInactive(prevGame);
}

function prevGameInactive(prevGame) {
    var d = document.getElementById(prevGame+"Link");
    d.className = "nodrag iconimage";

}

function newsTop(currGame) {
    window.location.href = "#" + currGame + "news";
}

function fixturesTop(currGame) {
    window.location.href = "#" + currGame + "fixtures";
}

function competitionsTop(currGame) {
    window.location.href = "#" + currGame + "competitions";
}

function resourcesTop(currGame) {
    window.location.href = "#" + currGame + "resources";
}

function closeApp() {
    var remote = require('remote');
    var window = remote.getCurrentWindow();
    window.close();
}

function maximizeApp() {
    var remote = require('remote');

    var window = remote.getCurrentWindow();

    if (window.isFullScreen()) {
        window.setFullScreen(false)
    } else {
        console.log("Maximize Application");
        window.setFullScreen(true)
    }
}

function minimizeApp() {
    var remote = require('remote');
    var window = remote.getCurrentWindow();
    window.minimize();
}
