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