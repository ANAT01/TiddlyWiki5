#!/usr/bin/env node

/*
This is invoked as a shell script by NPM when the `tiddlywiki` command is typed
*/

var $tw = require("./boot/boot.js").TiddlyWiki();

// Pass the command line arguments to the boot kernel
// $tw.boot.argv = Array.prototype.slice.call(process.argv,2);

$tw.boot.argv = [
	process.env.TW_DATA,
	"--verbose",
	"--server",
	"8080",
	"$:/core/save/all",
	"text/plain",
	"text/html",
	process.env.TW_USER,
	process.env.TW_PASS,
	"0.0.0.0",
];

// Boot the TW5 app
$tw.boot.boot();
