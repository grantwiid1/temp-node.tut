const os = require('os')

const user = os.userInfo()
const usern = os.userInfo().username
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem()/1024/1024+` GB`,
    freemem:os.freemem()/1024/1024+` GB`
}

console.log(user)
console.log(`Username is ${usern}`)
console.log(`uptime is ${os.uptime()} seconds`)
console.log(currentOs)