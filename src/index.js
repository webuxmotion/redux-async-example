import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import Post from './containers/Posts'
import Accordion from './containers/Accordion'
import { Route, Switch, Link } from 'react-router-dom'
import './styles.css'


const middleware = [ thunk ]
if (process.env.NODE_ENV === 'dev') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

render(
  <Router>
    <Provider store={store}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/posts" exact component={Post} />
        <Route path="/accordion" exact component={Accordion} />
        <Route path="/" component={() => <div>404</div>} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root')
)
