import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Welcome from './components/Welcome';
import BuyNav from './components/BuyNav';
import SearchPage from './components/SearchPage';
import Main from './components/Main';
import HouseSell from  './components/HouseSell'
import BuyPage from  './components/BuyPage'


render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path='buy' component={BuyNav}>
      <Route path='allHouse' component={BuyPage}></Route>
      <Route path='search' component={SearchPage}></Route>
    </Route>
    <Route path='housesell' component={HouseSell}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);


// <Route path='seachClient' component={SearchClient}></Route>
// <Route path='animals' component={AnimalsPage}></Route>
