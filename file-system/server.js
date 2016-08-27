const fs = require('fs');

// Read a dir
fs.readdir('./file-system', (err, files) => {
    if (err) throw err;
    var i = 0;
    files.forEach((element) => {
        console.log(element);
        i++;
    }, this);
    console.log('Num Files: ' + i);
});
// Read a file 
fs.readFile('./file-system/file1.txt', 'utf8', (err, data) => {
    console.log(data);
});
