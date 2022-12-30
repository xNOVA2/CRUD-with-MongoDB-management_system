const mongoose = require('mongoose')
const pass = process.env.PASSWORD;
mongoose.set('strictQuery', false); 
mongoose.connect(`mongodb+srv://fanta1234:${pass}@cluster0.rueipp3.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true}).then(()=>{
   
console.log("database has been contacted ");
})