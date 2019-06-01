// import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/16440539-a4ddb37f938edb05.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload-images.jianshu.io/upload_images/10374073-dd64ed78804cf88a?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
  
}