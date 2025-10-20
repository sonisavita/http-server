const express = require("express");

//to use external middelware
const bodyParser = require("body-parser");

const app = express();

let requestCount = 0; // number of request server has , log the server request

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    req.name = "savita12345";
    console.log(`Total numbers of requests =  ${requestCount}`);
    next();
}

// logs method, timestamp and the url

function loggerMiddleware(req, res, next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.hostname);
    console.log("Route is " + req.url);
    console.log(new Date());
}

function realSumHandler(req, res) {
    //main logic
    const a =  parseInt(req.query.a);
    const b =  parseInt(req.query.b);
    console.log(req.name);

    res.json({
       ans: a + b
    });
}

app.use(requestIncreaser);

app.use(loggerMiddleware);

//to use external middelware
app.use(bodyParser.json());

app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    });

});

//better routing, add database, middlewares, here requestIncreaser is a middleware 
//app.get("/sum",  realSumHandler);


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

//steps to create a node project
// npm init -y
// npm install express
//create index.js file 

//run http://localhost:3000/sum?a=2&b=3 test it 

//express is chain of middlewares
//middlewares used for authentication 

// use this cmd to get rid of port in used error 
//kill -9 $(lsof -ti:3000) || true
//node index.js