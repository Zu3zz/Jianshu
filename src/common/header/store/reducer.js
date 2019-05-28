import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
    // immutable对象的set方法 会结合之前对象的值和设置的值 返回一个全新的对象
      return state.set('focused',true)
    case constants.SEARCH_BLUR:
      return state.set('focused',false)
    case constants.CHANGE_LIST:
      return state.set('list',action.data)
    default:
      return state
  }
  
}