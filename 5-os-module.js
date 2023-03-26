const os = require('os');

// info about the user
// const user = os.userInfo();
// console.log(user);

let osMudulesMethod ={
    // user : os.userInfo('prat'),
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem()/1024/1024/1024,
    freemem : os.freemem()/1024/1024/1024,
    architecture : os.arch(),
    hostname: os.hostname(),
    paleteform : os.platform(),
    tempdir :  os.tmpdir()
}

console.log(osMudulesMethod);