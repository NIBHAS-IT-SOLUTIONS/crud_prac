const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nibhas:nibhas@cluster0.ndn704r.mongodb.net/users")

app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => {
            //console.log(users);
            res.json(users)

        })
        .catch(err => res.json(err))
})
app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.put("/updateUser/:id", (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id,
        { name: req.body.name, email: req.body.email, age: req.body.age }
    )
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
 app.delete("/deleteUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
 })

app.post("/createUser", (req, res) => {
    console.log(req.body);
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server started");
})


