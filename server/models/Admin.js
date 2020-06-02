const mongoose = require('./db')
const bcrypt = require('bcrypt')



const AdminModel = new mongoose.Schema({
  adminname: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    set(val){
      return bcrypt.hashSync(val,10)
    }
  }
})

const Admin = mongoose.model('Admin',AdminModel)

// // 测试数据 测试数据1条
// Admin.create({
//   adminname: 'kaba',
//   password: 'kaba'
// })

module.exports = { Admin }