const path=require('path')

//console.log(path);
console.log(path.sep);

const filePath= path.join('content','subfolder','test.txt');
console.log(filePath);

//to get the base name
const base=path.basename(filePath);
console.log(base);

const absolute=path.resolve(__dirname,filePath);
// const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);