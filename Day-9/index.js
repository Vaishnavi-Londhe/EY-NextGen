const express = require('express');
const app = express();
const port = 3001;
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello Good!');
});


app.get('/product', (req, res) => {
  res.json({
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  });
});


app.get('/user', (req, res) => {
  res.json({
    "id": 1,
    "title": "User"
  });
});

app.get('/employee', (req, res) => {
    res.json({
      "id": 1,
      "title": "employee",
      "name":"abc",
      "salary":200000
    });
  });
  app.get('/download', (req, res) => {
   res.download('index.js'); // for download the file
  // res.download('./https://t3.ftcdn.net/jpg/02/73/22/74/360_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg')
  });

  app.post('/postdata', (req, res) => {
    const{name,email,number}=req.body
    console.log(req.body);
    res.send("Data received : "+name)
   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
