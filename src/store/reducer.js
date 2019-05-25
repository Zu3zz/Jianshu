const defaultState = {
  focused: false
}
export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    console.log('focuesd is true')
    return {
      focused: true
    }
  }
  if(action.type === 'search_blur') {
    console.log('focused is false')
    return {
      focused: false
    }
  }
  return state
}