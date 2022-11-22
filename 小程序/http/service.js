const { wxRequest } = require('wxRequest.js')

//post
export function get(id) {
  const url = '/get?id=' + id
  return wxRequest('GET', url, undefined, {
    loading: {}
  })
}

//post
export function post(id) {
  const url = '/post'
  const data = { id }
  return wxRequest('POST', url, data, {
    loading: {}
  })
}
