const filesList = (process.argv[2]);
const fileExt = (process.argv[3]);

const filterFilesByExt = require('./my_module.js');

filterFilesByExt(filesList, fileExt, (err,fileArray) => {
    if (err){
        return console.log('there was an error', err);
    }

    fileArray.forEach((filename) => {
        console.log(filename);
    });
});