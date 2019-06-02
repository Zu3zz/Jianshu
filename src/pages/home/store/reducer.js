// import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}