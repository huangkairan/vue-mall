import { request } from './network'

export function getGoodsList(){
  return request({
    url:'/api/good'
  })
}