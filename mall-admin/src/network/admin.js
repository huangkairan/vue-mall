import { request } from './network'
export function pLogin(adminname,password){
  return request({
    url:'/api/login',
    method: 'post',
    data:{
      adminname,
      password
    }
  })
} 

export function gData(){
  return request({
    url: '/api/good',
    method: 'get'
  })
}
