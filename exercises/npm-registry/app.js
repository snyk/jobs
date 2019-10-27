const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-hbs');
const marked = require('marked')

const app = express();

// view engine setup
hbs.registerHelper('md', (str) => {
  return new hbs.SafeString(marked.parse(str));
})

app.engine('hbs', hbs.express4({
  defaultLayout: path.join(__dirname, 'views/layouts/layout.hbs'),
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/package', require('./routes/package'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    error: req.app.get('env') === 'development' ? err : {},
    message: err.message,
  });
});

module.exports = app;
