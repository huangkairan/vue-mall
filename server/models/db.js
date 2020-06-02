const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kaba-mall',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
},(err,cb)=>{
  if(err){
    console.log('error')
  }else{
   console.log(' mongodb running') 
  }
})

module.exports = mongoose