'use strict'

const app = require('app');
const BrowserWindow = require('browser-window');

// Keep a reference of the window object
var mainWindow;

module.exports = function(html, opts){
    opts = opts || {}
    opts.onAllSpaces = Boolean(opts.onAllSpaces)
    opts.onTop = Boolean(opts.onTop)

    app.on('window-all-closed', function() {
        app.quit();
    });

    const width = 400;
    const ratio = 9/16;

    app.on('ready', function() {
      mainWindow = new BrowserWindow({
          width: width, height: width * ratio,
          frame: false,
          title: 'My media player',
          nodeIntegration: false
      });

      mainWindow.webContents.loadURL(html);
      mainWindow.setAlwaysOnTop(opts.onTop);
      mainWindow.setVisibleOnAllWorkspaces(opts.onAllSpaces);
      mainWindow.on('closed', function() {
        mainWindow = null;
      });
    });
}
