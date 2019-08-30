export const setItem = (key, value) => {
  const valueJson = JSON.stringify(value)
  window.sessionStorage.setItem(key, valueJson)
}

export const getItem = (key) => {
  const valueJson = window.sessionStorage.getItem(key)
  const value = JSON.parse(valueJson)
  return value
}

export const removeItem = (key) => {
  window.sessionStorage.removeItem(key)
}

export const updateItem = (key, value) => {
  const valueJson = JSON.stringify(value)
  window.sessionStorage.removeItem(key)
  window.sessionStorage.setItem(key, valueJson)
}

export default {
  setItem,
  getItem,
  removeItem,
  updateItem
}
