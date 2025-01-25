const express = require('express')
const cors = require('cors')

const { default: mongoose } = require('mongoose')
const Moviemodel = require('./models/Moviemodel')

const app = express()
app.use(express.json())
app.use(cors())
//const mongoose=require(mongoose)
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addmoviedata', async (req, res) => {
    try{

        const newdata = new Moviemodel(req.body);
        await newdata.save();
        res.send("Data save successfully")
    }
    catch(err){
        console.log("Data not send")
    }
  })

  app.get('/getmoviedata', async (req, res) => {
    try{

        const newdata = await Moviemodel.find({});
        res.json(newdata);
        console.log(newdata)//optional

    }
    catch(err){
        console.log("Data not received");
    }
  })


mongoose.connect("mongodb+srv://Vaishnavi:wMN20xcREcolPpto@avcoe.utl1a.mongodb.net/").then(()=>
console.log("Mongodb Database Connected Successfully")
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})