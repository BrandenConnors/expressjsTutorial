const express = require('express');
const path = require('path');
const Joi = require('Joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema, (err,result)=>{
        if(err){
            console.log(err);
            res.send('an error has occured');
        }
        console.log(result);
        res.send('successfully posted data');
    })
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

