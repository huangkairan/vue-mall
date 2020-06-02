const mongoose = require('./db')

const CateModel = new mongoose.Schema({
  cateid: {
    type: Number
  },
  catename: {
    type: String
  },
  note: {
    type: String,
    default: ''
  }
})

const Cate = mongoose.model('Cate',CateModel)

// // 测试数据 测试数据2条
//   Cate.create({
//   cateid: 2,
//   catename: '相机',
//   note: '无'
// })

module.exports = { Cate }