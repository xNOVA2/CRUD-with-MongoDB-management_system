const cors = require('cors');
require('dotenv').config()

const express= require('express')
const app = express()
require('./DB')

const user = require('./UserModel');
const joi = require('joi');

app.use(cors());

app.use(express.json())

app.get('/',async(req,res)=>{
    try {
        let data = await user.find();
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})


const userValidation = joi.object({
    firstname:joi.string().required().min(3).max(10),
    lastname:joi.string().required().min(2).max(10),
    address:joi.string().required().min(5)

})
app.post("/craeteuser",async(req,res)=>{

const {error} =    userValidation.validate(req.body)
if (error) return res.send(error).status(404)

    const data = new user({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address
    })

    let result = await data.save()
    res.status(201).send(result);


      

})

app.delete('/deleteuser:_id',async(req,res)=>{
    try {
        let data = await  user.findByIdAndDelete(req.params._id)
        res.send("deleted").status(204);
    } catch (error) {
        res.send(error).status(400)
    }
})
app.get('/search:key',async(req,res)=>{
    try {

    let data = await user.find({
        $or:[
            {firstname:{$regex:req.params.key}},
            {lastname:{$regex:req.params.key}}
        ]
    });

    
res.send(data);
    } catch (error) {
        res.send(error)
    }
})
app.listen( process.env.PORT ||  3010 ,()=>{
    console.log("server up and runnung");
})