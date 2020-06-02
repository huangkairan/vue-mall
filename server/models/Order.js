const mongoose = require('./db')

const OrderModel = new mongoose.Schema({
  username: {
    type: String
  },
  orderid: {
    type: String
  },
  created: {
    type: String
  },
  itemid: {
    type: String
  },
  cateid: {
    type: Number
  },
  price: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 1
  },
  totalprice: {
    type: Number
  },
  consignee:{
    type: String
  },
  address: {
    type:String
  },
  tel:{
    type:String
  },
  status: {
    type: Number,
    default:0
  },
  delivertime: {
    type: String,
    default:0
  },
  receipttime: {
    type: String,
    default:0
  }
})

const Order = mongoose.model('Order',OrderModel)

// // 测试数据 
// User.create({
//   username: 'kaba',
//   password: 'kaba',
//   tel: '18757128360',
//   email: '18757128360@163.com'
// })

module.exports = { Order }