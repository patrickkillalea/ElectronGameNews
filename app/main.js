// Module to control application life.
var app = require('app');

// Module to create native browser window.
var BrowserWindow = require('browser-window');

var mainWindow = null;

var topnav = require('./scripts/layout/topnav.js');

var mongoose = require('mongoose');

mongoose.connect('mongodb://patrickkillalea:ilwp2000@ds055802.mlab.com:55802/dota2newsdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB Connected!");
});

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
    mainWindow = new BrowserWindow({ width: 1000, height: 800, 'min-width': 800, 'min-height': 680, frame: false });

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
