import request from 'utils/request.js'
// 查询字符串与对象互相转换
import qs from 'qs'

/**
 * @param {Object} options 读取文章列表接口参数
 */
const getList = (options) => {
  return request.get('/public/list?' + qs.stringify(options))
}

// 温馨提示
const getTips = () => {
  return request.get('/public/tips')
}

// 本周热议
const getTop = () => {
  return request.get('/public/topWeek')
}

// 友情链接
const getLinks = () => {
  return request.get('/public/links')
}

export {
  getList,
  getTips,
  getTop,
  getLinks
}
