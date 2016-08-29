import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Welcome from './components/Welcome';
import BuyNav from './components/BuyNav';
import SearchPage from './components/SearchPage';
import Main from './components/Main';
import HouseSell from  './components/HouseSell';
import BuyPage from  './components/BuyPage';
import SellNav from './components/SellNav';
import AddPerson from './components/AddPerson';
import ViewPerson from './components/ViewPerson';
import HousesPurchase from './components/HousesPurchase';
import SellPage from  './components/SellPage';
import LoginForm from './components/LoginForm';
import ViewPersonForAdmin from './components/ViewPersonForAdmin';



render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='buy' component={BuyNav}>
        <Route path='allHouse' component={BuyPage}></Route>
        <Route path='search' component={SearchPage}></Route>
      </Route>
      <Route path='sell' component={SellNav}>
        <Route path='sellPage' component={SellPage}></Route>
        <Route path='housesell' component={HouseSell}></Route>
        <Route path='addperson' component={AddPerson}></Route>
        <Route path='viewperson' component={ViewPerson}></Route>
        <Route path='soldHouse' component={HousesPurchase}></Route>
        <Route path='adminperson' component={ViewPersonForAdmin}></Route>
      </Route>
      <Route path='login' component={LoginForm}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
