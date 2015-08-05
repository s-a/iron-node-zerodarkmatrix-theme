var fs = require('fs');
var path = require('path');

var Theme = function() {
	this.init();
	return this;
}

Theme.prototype.loadCSS = function() {
	var style = document.createElement("style");
	style.setAttribute('type', 'text/css');
	style.innerHTML = fs.readFileSync(path.join(__dirname, "app.css"));
	window.document.head.appendChild(style);
};

Theme.prototype.loadExtension = function() {
	var ext = require('remote').require('browser-window').removeDevToolsExtension("DevTools Theme: Zero Dark Matrix");
	var dir = path.join(__dirname, "chrome-devtools-zerodarkmatrix-theme","theme-extension" );
	//ext = require('remote').require('browser-window').addDevToolsExtension(dir);
};

Theme.prototype.init = function() {
	this.loadCSS();
	this.loadExtension();
};

module.exports = Theme;