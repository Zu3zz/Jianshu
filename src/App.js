import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import store from './store'
import Write from './pages/write'
import Login from './pages/login'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Iconfont />
          <Router>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </Router>
        </Fragment>
      </Provider>
    )
  }
}

export default App
