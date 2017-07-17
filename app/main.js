var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'

import App from './components/app'
import { client } from './reducers/index'
import { Provider } from 'react-redux'
import Home from './components/home/Home.jsx';
import News from './components/news/News.jsx';
import './stylesheets/style.scss'
import './stylesheets/header.scss'
import './stylesheets/footer.scss'
import './stylesheets/home.scss'
import './stylesheets/news.scss'
ReactDOM.render(
    <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/news" component={News}/>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>
    , document.getElementById('root'));
