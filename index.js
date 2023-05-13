// const app  = require('./app')

// console.log(app.b)

const fs = require('fs')

const http  = require('http')
fs.writeFileSync('hell2.txt',"rqwrew ewrqwerew ewrqwerqwer ewrqewrew")

console.log("dsfafd",__filename)

http.createServer((req,res)=>{
res.write("Helllo this is test running");
res.end();
}).listen(4500)