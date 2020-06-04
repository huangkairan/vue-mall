const express = require('express')
const app = express()
const { router } = require('./routes/index')
const bodyParser = require('body-parser')
const cors = require('cors')



// app.use('/',express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
  });
app.use(router)
app.use(cors)
app.listen(3030,(req,res)=>{
  console.log(' http://localhost:3030 running')
})