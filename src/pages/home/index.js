import React, { Component } from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4668/77e4329017294a607d78e74789afc6a22f4a6ebe.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
}

export default Home
