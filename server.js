var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
fs.writeFile('new.txt','myFile',function(err){
    if(err) throw err;
    console.log('file created successfully'); 
});
fs.readFile(__dirname +'/new.txt','utf8',function(err,data){
    if(err) throw err;
   
   
    console.log('file read successfully'); 
    res.end(data);
    console.log(data);
}
);

console.log('123');
}
).listen(3001);
console.log('server listening on 3001');