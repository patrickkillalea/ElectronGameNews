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
