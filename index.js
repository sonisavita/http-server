const express = require("express");

const app = express();

app.get("/sum", function(req, res){
    const a =  parseInt(req.query.a);
    const b =  parseInt(req.query.b);

    res.json({
       ans: a + b
    })
});

// to run http://localhost:3000/sum/2/3 and get same result 

// app.get("/sum/:a/:b", function(req, res){
//     const a =  parseInt(req.params.a);
//     const b =  parseInt(req.params.b);

//     res.json({
//        ans: a + b
//     })
// });


app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

});

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })
});

app.get("/subtract", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a - b
    })
});

app.listen(3000);

//run http://localhost:3000/sum?a=2&b=3 test it 

// use this cmd to get rid of port in used error 
//kill -9 $(lsof -ti:3000) || true
//node index.js