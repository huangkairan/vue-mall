const mongoose = require('./db')

const AddressModel = new mongoose.Schema({
  username: {
    type: String
  },
  postal: {
    type: String
  },
  consignee: {
    type: String
  },
  tel: {
    type: String
  },
  province: {
    type: String
  },
  city: {
    type: String
  },
  region: {
    type: String
  },
  detail: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  }
})

const Address = mongoose.model('Addre',AddressModel)

// 测试数据 测试数据1条
// Address.create({
//   username: 'kaba',
//   postal: '310000',
//   consignee: '黄开然',
//   tel: '18757128360',
//   province: '330000',
//   city: '330100',
//   region: '330110',
//   detail: '竹海水韵润泽园10-1-803',
//   status: 1
// })

module.exports = { Address }