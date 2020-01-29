var emoji_data = require('./emoji_pretty.json');
var fs = require('fs');
var path = require('path');

var moveFrom = "sourceImages";
var moveTo = "images";
var keys = Object.keys(emoji_data);

fs.readdir(moveFrom, function (err, files) {
  files.forEach(function (file, index) {
    fileName = (file.substr(0, file.lastIndexOf('.')) || file).toUpperCase();

    for(var i = 0, length = keys.length; i < length; i++) {
        const emoji = emoji_data[keys[i]];
        if (fileName == emoji.unified) {
          fs.rename(`sourceImages/${file}`, `images/${emoji.short_name}.png`, function (err) {
            if (err) throw err;
            console.log('File renamed and copied to ./images');
          })
        }
    }
  });
});
