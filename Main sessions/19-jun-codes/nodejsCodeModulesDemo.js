

var os = require('os');
var fs = require('fs');

console.log("platform = "+os.platform());

console.log(`architecture = ${os.arch()}`)

console.log("sysinfo = "+os.hostname())
console.log("version = "+os.version())
console.log("release = "+os.release())

console.log("home dir = "+os.homedir())

fs.writeFileSync("FSD.txt","Full stack web development internship program");

