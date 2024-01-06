const os=require('os')  //buitl in module doesn't need ./

//info about current user
const user=os.userInfo()
console.log(user);

//meth to return the uptime
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

