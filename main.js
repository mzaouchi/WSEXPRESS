const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    console.log('Hello Yassine')
    next()
}

app.use(middleware)

app.get('/',middleware,(req,res)=>{
    res.send('Olfa')
})

app.get('/balise',middleware,(req,res)=>{
    res.send('<h1>Test balise</h1>')
})

// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/Public/Home.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/Public/style.css')
// })

// app.get('/testindex',(req,res)=>{
//     res.sendFile(__dirname+'/Public/')
// })

app.use(express.static('Public'))

app.listen(port,console.log(`Server is running on the port ${port}`))




