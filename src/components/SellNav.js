import React, { Component } from 'react';
import AdminActions from '../actions/AdminActions';
import { Link, browserHistory } from 'react-router';
import AdminStore from '../stores/AdminStore';


export default class SellNav extends Component {
  constructor(props){
    super(props);

    this.state = {
      admin: AdminStore.get()
    }

    this._onChange = this._onChange.bind(this);
    this._logout = this._logout.bind(this);
  }

  componentDidMount(){
    AdminStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    AdminStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      admin: AdminStore.get()
    });
  }

  _logout() {
    AdminActions.logout();
  }

  render() {
    let { admin } = this.state;
    if(!admin){
      return(
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/sell/housesell">Sell House</Link></li>
                  <li><Link to="/sell/viewperson">View Person</Link></li>
                  <li><Link to="/sell/soldHouse">New Purchase</Link></li>
                </ul>
              </div>
            </div>
          </nav>
         <div className="container">
            {this.props.children}
          </div>
      </div>
      )
    }else{
      return(
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/sell/sellPage">All Houses</Link></li>
                  <li><Link to="/sell/housesell">Sell House</Link></li>
                  <li><Link to="/sell/addperson">Add Person</Link></li>
                  <li><Link to="/sell/adminperson">View Person</Link></li>
                  <li><Link to="/sell/soldHouse">New Purchase</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><p className="navbar-text">Welcome {admin.username}!</p></li>
                  <li onClick={this._logout} style={{cursor:'pointer'}}><Link to='/'>LOGOUT</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}
