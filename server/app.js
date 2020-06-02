const express = require('express')
const app = express()
const { router } = require('./routes/index')
const bodyParser = require('body-parser')


// app.use('/',express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)
app.use(require('cors')())
app.listen(3030,(req,res)=>{
    console.log(' http://localhost:3030 running')
})