const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const userName = 'AMRUDESH PS';
const pass = 'asd123';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

app.get("/", (req, res, next) => {
  res.render('login');
});

app.post('/submit',(req, res, next)=>{
  console.log(req.body);
  if(req.body.username == userName && req.body.password == pass){
    res.render('home');
  }else res.send('Somthing went wrong try again');

})

app.listen(3000, () => {
  console.log("server running on port 3000");
})