/**
 * Created by Umayr Shahid on 11/17/15.
 */

'use strict';
var fs = require('fs');

exports.getFiles = function getFiles(dir, files) {
  files = files || [];
  var tmp = fs.readdirSync(dir);
  for (var i in tmp) {
    var name = dir + '/' + tmp[i];
    if (fs.statSync(name).isDirectory()) getFiles(name, files);
    else files.push(name);
  }
  return files;
};
