const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/vivu');

const VivuEventSchema = new Schema({
  name: String
})
const VivuEvent = mongoose.model('VivuEvent', VivuEventSchema)

const UserSchema = new Schema({
  username: String,
  password: String,
  roles: [String] // admin, user
})
const User = mongoose.model('User', UserSchema)


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log('connected')
  await VivuEvent.deleteMany({})
  await User.deleteMany({})
  await VivuEvent.insertMany([
    { name: 'Sự kiện 1'},
    { name: 'Sự kiện 2'},
    { name: 'Sự kiện 3'},
  ])
  await User.insertMany([
    {
      username: 'admin',
      password: 'admin',
      roles: ['admin']
    },
    {
      username: 'user',
      password: 'user',
      roles: ['user']
    },
  ])
})


// const app = express()
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// app.listen(5000, () => console.log('Server started listening on port 5000!'));
// module.exports = app;
