var $fs = require('fs');
var $tw = require("./boot/boot.js").TiddlyWiki();

var path = process.env.TW_DATA ? process.env.TW_DATA : './';

if ($fs.existsSync(path + '/tiddlywiki.info')) {
    $tw.boot.argv = [
      path,
      "--verbose",
      "--server",
      "8080",
      "$:/core/save/all",
      "text/plain",
      "text/html",
      process.env.TW_USER ? process.env.TW_USER : '',
      process.env.TW_PASS ? process.env.TW_PASS : '',
      "0.0.0.0",
    ];
}
else {
    $tw.boot.argv = [
      path,
      "--verbose",
      "--init",
      "empty",
    ];
}

// Boot the TW5 app
$tw.boot.boot();
