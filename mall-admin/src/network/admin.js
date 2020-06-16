import { request } from './network'
export function pLogin(name,pwd){
  return request({
    url:`/adminlogin/${name}`,
    method: 'get'
  })
}