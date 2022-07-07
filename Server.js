const express = require('express')

const app = express()

const port = 5000

var users = [
    {name : 'Assad', age : 25, id : 1},
    {name : 'Yassine', age : 26, id : 2},
    {name : 'Olfa', age : 27, id : 3},
    {name : 'Mahmoud', age : 28, id : 4}
]

app.use(express.json())

app.get('/readUsers',(req,res)=>{
    res.send({Msg:'List of Users :',users})
})

app.post('/createUser',(req,res)=>{
    users = [...users,req.body]
    res.send({Msg:'User Added',users})
})

app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send({Msg:'User Deleted',users})
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user => user.id == id ? {...user,...req.body} : user)
    res.send({Msg:'User Updated',users})
})


app.listen(port,console.log(`Server is running on the port ${port}`))