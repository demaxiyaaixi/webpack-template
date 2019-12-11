import request from '@/utils/request'

export function getAnswer (params) {
  return request({
    url: '/test/list',
    method: 'get',
    params
  })
}
