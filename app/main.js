// Module to control application life.
var app = require('app');

// Module to create native browser window.
var BrowserWindow = require('browser-window');

var mainWindow = null;

var topnav = require('./scripts/layout/topnav.js');

// var remote = require('remote');

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1000, height: 800, 'min-height': 600, 'min-width': 800, frame: false });

    // For No Top frame
    // , frame: false

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    // Open the devtools.
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    // Disables the top app menu
    mainWindow.setMenu(null);
});
