const express = require("express")
const cors = require("cors")
require("dotenv").config();
const words = require("./wordData.json");
const UserModel = require("./Models/user.models");
const { connection } = require("./Config/db");
const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome')

})

//get user route

app.get('/user',async(req,res)=>{
    let userData=[]
    const data= await UserModel.find()
    userData.push({data})
    res.send(userData)

})
app.post("/user",async(req,res)=>{
   const {name,difficulty}=req.body
    const userdata=new UserModel({name,difficulty})
    await userdata.save()
    res.send({message:"User created"})
})



//get random 

function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get("/randomwords", (req, res) => {
    let random = between(1, 80);
    console.log(words);
    let randomword = words.find((ele) => ele.id === random).word.toLowerCase();
    res.send({ word: randomword });
});




app.listen(PORT, async () => {
    try {
        await connection
        console.log("connection to DB successfull")
    }
    catch (err) {
        console.log("error in connecting to DB");
        console.log(err)
    }
    console.log(`listening to port http://localhost:${PORT}`);
})