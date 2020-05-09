const express = require('express')

const app = express()

// app.all((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://loacalhost:8080");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
//     if(req.method.toLowerCase() === 'options') {
//         return res.end();  
//     }
//     next();
// });

app.get('/api/home',(req,res,next) => {
    res.send("hello")
});

app.get('/api/login',(req,res,next) => {
    console.dir(req)
    res.send("hello")
});

app.listen(3000,()=>{
    console.log("服务器已启动：http://loacalhost:3000")
});