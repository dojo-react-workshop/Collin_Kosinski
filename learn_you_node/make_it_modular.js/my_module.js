var fs = require('fs');
var path = require('path');
module.exports = function filterFilesByExt(filesList, fileExt, callback) {
    fs.readdir(filesList, function (err, allFiles) {
        if (err) {
            return callback(err);
        }
        allFiles = allFiles.filter((filename) => {
            return path.extname(filename) === `.${fileExt}`
        }); 
        callback(null, allFiles);
    })
};