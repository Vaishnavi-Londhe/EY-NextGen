const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const Fashionitem = require('./models/Fashionitem')
app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addfashionitem', async (req, res) => {
    try{

        const newdata = new Fashionitem(req.body);
        await newdata.save();
        res.send("Data save successfully")
    }
    catch(err){
        console.log("Data not send")
    }
  })

  app.get('/getfashionitem', async (req, res) => {
    try{

        const newdata = await Fashionitem.find({});
        res.json(newdata);
        
        res.send("Data save successfully")
    }
    catch(err){
        console.log("Data not received")
    }
  })

mongoose.connect("mongodb+srv://Vaishnavi:wMN20xcREcolPpto@avcoe.utl1a.mongodb.net/").then(()=>
    console.log("Mongodb Database Connected Successfully")
    );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})