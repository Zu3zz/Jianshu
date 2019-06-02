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
  }, {
    id: 3,
    title: '简书电影',
    imgUrl: '//upload-images.jianshu.io/upload_images/5913679-5b2dad960fc66ff7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '读书',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  articleList: [{
    id: 1,
    imgUrl: '//upload-images.jianshu.io/upload_images/10453825-03f8db0e475ca2af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title: '诗 趁我们还不够老',
    desc: '原创/苹儿(茵草芳菲) 趁我们还不够老， 快去发现生活中的美好， 别管日子过去了多少， 只看自己有没有在微笑。 趁我们还不够老， 快去走遍天漄海...'
  },{
    id: 2,
    imgUrl: '//upload-images.jianshu.io/upload_images/10453825-03f8db0e475ca2af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title: '诗 趁我们还不够老',
    desc: '原创/苹儿(茵草芳菲) 趁我们还不够老， 快去发现生活中的美好， 别管日子过去了多少， 只看自己有没有在微笑。 趁我们还不够老， 快去走遍天漄海...'
  },{
    id: 3,
    imgUrl: '//upload-images.jianshu.io/upload_images/10453825-03f8db0e475ca2af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title: '诗 趁我们还不够老',
    desc: '原创/苹儿(茵草芳菲) 趁我们还不够老， 快去发现生活中的美好， 别管日子过去了多少， 只看自己有没有在微笑。 趁我们还不够老， 快去走遍天漄海...'
  },{
    id: 4,
    imgUrl: '//upload-images.jianshu.io/upload_images/10453825-03f8db0e475ca2af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title: '诗 趁我们还不够老',
    desc: '原创/苹儿(茵草芳菲) 趁我们还不够老， 快去发现生活中的美好， 别管日子过去了多少， 只看自己有没有在微笑。 趁我们还不够老， 快去走遍天漄海...'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
  
}