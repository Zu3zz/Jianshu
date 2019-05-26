import * as constants from './constants'

const defaultState = {
  focused: false
}
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    console.log('focuesd is true')
    return {
      focused: true
    }
  }
  if(action.type === constants.SEARCH_BLUR) {
    console.log('focused is false')
    return {
      focused: false
    }
  }
  return state
}