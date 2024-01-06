const {readFileSync, writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/sec.txt','utf8');

//console.log(first, second);

writeFileSync('./content/reult-sync.txt',
`here is the reult: ${first} , ${second}`,
{flag: 'a'});       //flag: 'a is fro appending