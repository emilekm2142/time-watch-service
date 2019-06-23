const express = require('express')
const app = express()
const port = process.env.PORT || 3000


//Each request requires a INT zone field


app.get('/', function(req, res) {
    let zone = req.query.zone;
    if (!req.query.zone) zone=0;
    let date = new Date();
    let current_hour = date.getUTCHours()+parseInt(zone);
    let current_minute = date.getMinutes();
    let current_second = date.getSeconds();
    res.send(`${current_hour}\n${current_minute}\n${current_second}`);
    
 
  });
app.get('/date', function(req, res) {
    let zone = req.query.zone;
    if (!req.query.zone) zone=0;

    let date = new Date();
    let y= date.getUTCFullYear();
    let m=date.getUTCMonth();
    let d = date.getUTCDay();
    res.send(`${y}\n${m}\n${d}`);


});

app.get('/datetime', function(req, res) {
    let zone = req.query.zone;
    if (!req.query.zone) zone=0;
    let date = new Date();
    let current_hour = date.getUTCHours()+parseInt(zone);
    let current_minute = date.getMinutes();
    let current_second = date.getSeconds();
    let y= date.getUTCFullYear();
    let m=date.getUTCMonth();
    let d = date.getUTCDay();
    res.send(`${y}\n${m}\n${d}\n${current_hour}\n${current_minute}\n${current_second}`);


});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))