
var http= require('http')
var fs=require('fs');//inbulid module
var os=require('os');

console.log(os.freemem());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.machine());
console.log(os.arch());
console.log(os.type());
console.log("Normal log");
console.warn("Danger");
console.assert(true,"transaction completed");
console.assert(false,"Transaction Failed");

const server = http.createServer((req, res) => {
    
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //res.end('{"id": 1,"title": "Dior Bag","price":20000} {"id":2,"title":"School Bag","price":200}');
  //res.end(JSON.stringify(employee)); 
  if(req.url=="/"){
    fs.readFile("Notes.txt",(error,data)=>{
        res.write(data);
        res.end();
    });
   // res.write("This is default page");
    //res.end()
  }

//   if(req.url=="/product"){
//     res.write("This is Product page");
//     res.end('{"id": 1,"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price": 109.95,"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",}')
//   }

//   if(req.url=="/user"){
//     res.write("This is User page");
//     res.end('{ "User": {"name":       "sonoo",   "salary":      56000,   "married":    true  }  } ')
//   }

//   if(req.url=="/employee"){
//     res.write("This is Employee page");
//     res.end('{ "firstName": "Sonoo","lastName": "Jaiswal","age": 27,"address" : {"streetAddress": "Plot-6, Mohan Nagar","city": "Ghaziabad","state": "UP",} } ')
//   }

//   if(req.url=="/movie"){
//     res.write("This is User page");
//     res.end('"title": "The Dark Knight","director": "Christopher Nolan","releaseYear": 2008,')
//   }

});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`