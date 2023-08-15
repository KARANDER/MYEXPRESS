const express = require('express')
const app = express()
//const port = 3000

app.use(express.static(__dirname +'/public'))
//Coustom middleware
app.use(function (req,res,next){
    console.log("Middleware Called Url is " + req.url);
    next();
})
app.get('/', (req,res) => {
    //res.sendFile(__dirname + '/sum.html');
    res.send('Welcome in express')
})
app.get('/about/', (req,res) => {
    //var id =req.params.id;
   // res.send(id)
    res.sendFile(__dirname + '/about.html');
})
/*
app.get('/home/:id', (req,res) => {
    var id =req.params.id;
    res.send(id)
    res.sendFile(__dirname + '/home.html');

})

app.get('/about/', (req,res) => {
    var id =req.params.id;
    res.send(id)
    res.sendFile(__dirname + '/about.html');
})

app.get('/sum/', (req,res) => {
    var id =req.params.id;
    res.sendFile(__dirname + '/sum.html');
})
app.get('/sum1/', (req,res) => {
    var a =parseInt(req.query.txt1);
    var b =parseInt(req.query.txt2);
    var c = a + b;
    var ans =` a is ${a} and b is  ${b} and sum is ${c}`
    res.send(ans)
})
*/

app.listen(3000)