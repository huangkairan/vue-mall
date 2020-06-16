const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const fs = require('fs')
//导入模型
const { User } = require('../models/User')
const { Admin } = require('../models/Admin')
const { Address } = require('../models/Address')
const { Cart } = require('../models/Cart')
const { Cate } = require('../models/Cate')
const { Favorite } = require('../models/Favorite')
const { Good } = require('../models/Good')
const { Order } = require('../models/Order')

//首页
router.get('/', async (req,res)=>{
  res.send({
    status: 'success'
  })
})

//查询所有用户
router.get('/api/users',async (req,res)=>{
  const users = await User.find()
  res.send(users)
})

//登陆管理员login
//1.查重 2.登陆
router.post('/api/login', async (req,res)=>{
  const admin = await Admin.findOne({
    adminname : req.body.adminname
  })
  if(!admin){
    return res.status(422).send({
      message: req.body.adminname + ' is not found'
    })
  }
  const isPwdValid = bcrypt.compareSync(
    req.body.password,
    admin.password
  )
  if(!isPwdValid){
    return res.status(422).send({
      message: ' password error ',
      status: 'false'
    })
  }
  //token
  const token = jwt.sign({
    id: String(admin._id)
  },'secret')
  res.send({
    admin,
    token
  })
})

//登陆后的个人信息 暂时用axios
// const auth = async (req,res,next)=>{
//   const raw = String(req.headers.authorization).split(' ').pop()
//   const { id } = jwt.verify(raw,SECRET)
//   req.admin = await Admin.findById(id)
//   next()
// }

//注册管理员register
router.post('/adminregister',async (req,res)=>{
  const admin = await Admin.create({
    adminname: req.body.adminname,
    password: req.boduy.password
  })
  res.send(admin)
})

//查询用户收货地址
router.get('/api/address',async (req,res)=>{
  const addresss = await Address.find()
  res.send(addresss)
})

//查询所有购物车
router.get('/api/cart',async (req,res)=>{
  const carts = await Cart.find()
  res.send(carts)
})

//添加购物车
router.post('/addcart', (req,res)=>{
  console.log(req.body)
  Cart.create({
    username : req.body.username,
    itemid : req.body.itemid,
    count : req.body.count,
    price : req.body.price
  })
  res.send(req.body)
})

//查询所有收藏夹
router.get('/api/favorite',async (req,res)=>{
  const favorites = await Favorite.find()
  res.send(favorites)
})

//添加收藏夹
router.post('/addfav',(req,res)=>{
  Favorite.create({
    username: req.body.username,
    itemid: req.body.itemid,
    price :req.body.price
  })
  res.send(req.body)
})

//查询所有商品信息
router.get('/api/good',async (req,res)=>{
  const goods = await Good.find()
  res.send(goods)
})

//商品信息上传
router.post('/uploadgood',multer({dest:'upload'}).single('file'),(req,res)=>{
  console.log(req.file)
  //图片
  console.log(req.body)
  //itemname等信息
  const exts = req.file.originalname.split('.')
  const ext = exts[exts.length-1]
  //将文件后缀取出来
  const itemid = (new Date()).getTime() + parseInt(Math.random() * 9999)
  const tmpname = (new Date()).getTime() + parseInt(Math.random() * 9999)
  //生成当前时间戳+4位随机数组成的字符串，以确保文件名的唯一性
  fs.renameSync(req.file.path, `upload/${tmpname}.${ext}`)
  //文件重命名
  Good.create({
    itemid : itemid,
    itemname : req.body.itemname,
    img : `upload/${tmpname}.${ext}`,
    created : tmpname.toString().slice(0,9),
    brand : req.body.brand,
    cateid : req.body.cateid,
    owner : req.body.owner,
    price : req.body.price,
    desc : req.body.desc,
    bought : 0,
    star : 5
  })
  res.send(req.file)
})

//查询所有订单信息
router.get('/api/order',async (req,res)=>{
  const orders = await Order.find()
  res.send(orders)
})

//添加订单
router.post('/addorder',(req,res)=>{
  const orderidd = (new Date()).getTime() + parseInt(Math.random() * 9999)
  Order.create({
    uesrname : req.body.username,
    orderid : orderidd,
    created : orderidd.toString().slice(0,9),
    itemid : req.body.itemid,
    cateid : req.body.cateid,
    price : req.body.price,
    count : req.body.count,
    totalprice: req.body.totalprice,
    consignee : req.body.consignee,
    address : req.body.address,
    tel: req.body.tel
  })
  res.send(req.body)
})

//查询所有商品类别信息
router.get('/api/cate',async (req,res)=>{
  const cates = await Cate.find()
  res.send(cates)
})

//添加商品类别
router.post('/addcate', async(req,res)=>{
  const cates = await Cate.find().sort({'cateid':-1}).skip(0).limit(1)
  const x=cates[0]
  // console.log(typeof(x.cateid))
  console.log(req.body)
  Cate.create({
    cateid : x.cateid,
    catename : req.body.catename,
    note : req.body.note
  },(err,doc)=>{
    if(!err){
      res.send({
        success : 'true'
      })
    }
  })
  
})

//查询所有管理员
router.get('/api/admins',async (req,res)=>{
  const admins = await Admin.find()
  res.send(admins)
})
module.exports = { router }