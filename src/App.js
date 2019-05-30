import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
          <Router>
            <Route path="/" exact render={() => <div>home</div>}></Route>
            <Route path="/detail" exact render={() => <div>detail</div>}></Route>
          </Router>
        </Fragment>
      </Provider>
    )
  }
}

export default App
