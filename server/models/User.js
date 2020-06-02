const mongoose = require('./db')

const UserModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    set(val){
      return bcrypt.hashSync(val,10)
    }
  },
  tel: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  }
})

const User = mongoose.model('User',UserModel)

// // 测试数据 测试数据1条
// User.create({
//   username: 'kaba',
//   password: 'kaba',
//   tel: '18757128360',
//   email: '18757128360@163.com'
// })

module.exports = { User }