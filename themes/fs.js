const fs = require('fs')
const path = require('path')

// fs.mkdir(path.resolve(__dirname, 'tasks'), (err) =>{
//     if (err){
//         throw err
//     }
//     console.log("created suc")
// })

fs.writeFile(path.resolve(__dirname, 'test.txt'), 'hello node' , (err) => {
    if (err){
        throw err
    }
    console.log('file created')
})

fs.appendFile(path.resolve(__dirname, 'test.txt'), '\nhello x2', (err)=> {
    if (err){
        throw err
    }
    console.log('added suc')
})

fs.readFile(path.resolve(__dirname, 'test.txt'),'utf-8', (err, data) =>{
    if (err){
        throw err
    }
    // console.log(Buffer.from(data).toString())
    console.log(data)
})