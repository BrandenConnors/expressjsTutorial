const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static')));
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: false}));
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //database work here
    res.json({success : true});
});


// app.get('/test',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// app.get('/example',(req,res)=>{
//     res.send('example');
// });

// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + ":" + req.params.age);
// });

app.listen(3000);

