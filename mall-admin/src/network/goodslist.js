import { request } from './network'

export function getGoodsList(){
  return request({
    url:'/api/good'
  })
}


export function gCate(){
  return request({
    url: '/api/cate',
    method: 'get'
  })
}