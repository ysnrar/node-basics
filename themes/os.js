const os = require('os')

console.log('ОП', os.platform())
console.log('Архитектура процессора', os.arch())
console.log('колво ядер', os.cpus())
console.log('Empty storage', os.freemem())
console.log("total memory", os.totalmem())
console.log('home dir', os.homedir())
console.log('time of work', os.uptime())
