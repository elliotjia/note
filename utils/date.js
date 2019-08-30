// Usage formatDate(new Date(), 'yyyy年MM月dd日'), it's will be return a string like '2019年08月30日'.
// Usage formatDate('2017-11-15', 'yyyy年MM月dd日'), it's will be return a string like '2019年08月30日'.
export const formatDate = (date, fmt) => {
  if (Object.prototype.toString.call(date) === '[object String]') {
    date = new Date(date.replace(/-/g, '/'))
  }

  const properties = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let key in properties) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? properties[key] : ('00' + properties[key]).substr(('' + properties[key]).length))
    }
  }
  return fmt
}

export default {
  formatDate
}
