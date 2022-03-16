const express = require ("express");
const app = express();
const port = 5000;

  
const Middleware=(req,res,next)=>{
    var today = new Date();
    var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var hourNow = today.getHours();
    if (weekDays[today.getDay()] === weekDays[0] || weekDays[today.getDay()] === weekDays[6] || hourNow > 17 || hourNow < 6) 
    {
        return res.send('<h1>We are Not working Now Try during working days and hours</h1>')
    } 
    else {next()}
}
app.use(Middleware);

app.use(express.static('Public'))

app.listen(port, console.log(` server is running on ${port}`))