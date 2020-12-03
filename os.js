const OS = require('os')

//console.log(OS.cpus())
console.log(`I have ${OS.cpus().length} cores`)
console.log(`I have ${Math.round(OS.freemem()/1024/1024)} MB memory out of ${Math.round(OS.totalmem()/1024/1024)} MB`)