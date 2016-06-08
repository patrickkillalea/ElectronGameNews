function closeApp() {
    var remote = require('remote');
    console.log("Closing Application");
    var window = remote.getCurrentWindow();
    window.close();
}

function maximizeApp() {
    var remote = require('remote');
    console.log("Maximize Application");
    var window = remote.getCurrentWindow();
    window.maximize();
}

function minimizeApp() {
    var remote = require('remote');
    console.log("Minimize Application");
    var window = remote.getCurrentWindow();
    window.minimize();
}

