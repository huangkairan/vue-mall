const mongoose = require('./db')

const FavoriteModel = new mongoose.Schema({
  username: {
    type: String
  },
  itemid: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  }
})

const Favorite = mongoose.model('Favorite',FavoriteModel)

// // 测试数据 
// User.create({
//   username: 'kaba',
//   password: 'kaba',
//   tel: '18757128360',
//   email: '18757128360@163.com'
// })

module.exports = { Favorite }