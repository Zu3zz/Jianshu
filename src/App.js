import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import store from './store'

import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Iconfont />
          <Header />
        </Fragment>
      </Provider>
    )
  }
}

export default App
