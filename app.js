const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const post_typeRouter = require('./routes/post_type');
const categoryRouter = require('./routes/category');
const departmentRouter = require('./routes/department');
const postRouter = require('./routes/post');
const roleRouter = require('./routes/role');
//const post_hitRouter = require('./routes/post_hit');
const post_likeRouter = require('./routes/post_like');


const app = express();
const db = require('./helper/db.js')();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/post_types', post_typeRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/departments', departmentRouter);
app.use('/api/posts', postRouter);
app.use('/api/roles', roleRouter);
//app.use('/api/post_hits', post_hitRouter.router);
app.use('/api/post_likes', post_likeRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(createError(404));
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
