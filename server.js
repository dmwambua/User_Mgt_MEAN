const express = require('express');
//specify path of  config file and inform express server to use  variable of  dotenv file
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express();


//specify the path so that we can use the env variable
//no need to specify full path since config and env are in same level?
dotenv.config({ path: 'config.env' })
    //directs server to port 8080
const PORT = process.env.PORT || 8080
    //we use morgan to log requests to console whenever we make a request
app.use(morgan('tiny'));

//mongodb connection
connectDB();
//parse request using bodyParser for urlencoded bodies
//Content-Type header matches the type option
//extended allows parsing URL-encoded data with querystring
app.use(bodyparser.urlencoded({ extended: true }));
//set view engine. We are using embedded JS ejs
//other engines include html and pug
app.set("view engine", "ejs");
//set path in views if you change folder of ejs files
//app.set("views", path.resolve(__dirname, ""views/ejs))
// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
    //load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });