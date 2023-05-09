const path = require('path')

console.log('Name of file/dir: ', path.basename(__filename))
console.log('name of directory of current file', path.dirname(__filename))
console.log('Узнать расширение', path.extname(__filename))
console.log("universal", path.parse(__filename).dir)
console.log('Make a path', path.join(__dirname, 'server', 'index.html'))


