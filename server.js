const express = require('express');
const hbs = require('hbs');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

const userName = 'AMRUDESH PS';
const pass = 'asd123';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.message = req.flash('message');
  next();
});

app.set('view engine', 'hbs');

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  req.flash('message', 'You need to log in first!');
  res.redirect('/');
}

app.get("/", (req, res, next) => {
  if(req.session.user){
    res.render('home', {})
  }else{
    res.render('login');
  }
});

app.get('/home', isAuthenticated, (req, res, next)=>{
  if(req.session.user){
     res.render('home',{});
  }else{
    res.send("You are not authorized person sorry!");
  }
});

app.post('/submit',(req, res, next)=>{
  console.log(req.body);
  if(req.body.username == userName && req.body.password == pass){
    req.session.user = req.body.username;
    res.redirect('/home');
  }else {
    req.flash('message', 'Invalid username or password!');
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          console.log(err);
      } else {
          res.redirect('/');
      }
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
})