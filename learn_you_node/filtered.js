var fs = require('fs');
var path = require('path');

const filesList = (process.argv[2]);
const fileExt = (process.argv[3]);

files = fs.readdir(filesList, function(err, allFiles){
    var filteredFiles = '';
    for(var i = 0; i < allFiles.length; i++){
      if(path.extname (allFiles[i]) === `.${fileExt}`){
          filteredFiles += allFiles[i];
          console.log(allFiles[i]);
      }    
    }
    // console.log(filteredFiles);
});