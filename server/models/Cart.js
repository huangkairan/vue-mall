const mongoose = require('./db')

const CartModel = new mongoose.Schema({
  username: {
    type: String
  },
  itemid: {
    type: String
  },
  count: {
    type: Number,
    default:1
  },
  price: {
    type: Number,
    default: 0
  }
})

const Cart = mongoose.model('Cart',CartModel)

// // 测试数据 


module.exports = { Cart }