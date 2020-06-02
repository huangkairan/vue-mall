const mongoose = require('./db')

const GoodModel = new mongoose.Schema({
  itemid: {
    type: String
  },
  itemname: {
    type: String
  },
  brand: {
    type: String
  },
  cateid: {
    type: Number
  },
  owner: {
    type: String,
    default: 'kaba-mall'
  },
  price: {
    type: Number,
    default: 0
  },
  desc: {
    type: String
  },
  img: {
    type: String
  },
  //购买人数
  bought: {
    type: Number,
    default: 0
  },
  created: {
    type: String,
    default: ''
  },
  star: {
    type: Number,
    default: 5
  }
})

const Good = mongoose.model('Good',GoodModel)

// // 测试数据 
// Good.create({
//   owner: '许金泰',
//   price: 6999,
//   created: '159101111',
//   itemid: '1591011111812',
//   itemname : 'iPhone11pro',
//   img : `upload/1591011110988.jpeg`,
//   brand : 'Apple',
//   desc: '称心趁手',
//   cateid : 0
// })

module.exports = { Good }