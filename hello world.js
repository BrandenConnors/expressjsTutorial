const express = require('express');
const router = express.router
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/test',(req,res)=>{
    res.send('test');
});

// app.get('/example', (req,res)=>{
//     res.send('hitting example route');
//   });

// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params);
//     res.send('example with route params');
// });

app.listen(3000);

