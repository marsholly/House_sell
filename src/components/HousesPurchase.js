import React, { Component } from 'react';
import HouseStore from '../stores/HouseStore';
import BuyerActions from '../actions/BuyerActions';
import SoldList from './SoldList';

export default class HousesPurchase extends Component{
  constructor(props){
    super(props);
    this.state = {
      houses: []
    }
    this._onChange = this._onChange.bind(this);
  }

 componentDidMount(){
    BuyerActions.getAllHouses();
    HouseStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    HouseStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      houses:  HouseStore.getAll()
    });
  }

  render(){
   let houses = this.state.houses;
console.log('houses in here:', houses)
    const soldList  = houses.map( house => {
      return (
        <SoldList key = {house._id} {...house}/>
      )
    })
    return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Address</th>
          <th>Sqft</th>
          <th>Beds</th>
          <th>Baths</th>
          <th>Price</th>
          <th>Buyer</th>
        </tr>
      </thead>
      <tbody>
       { soldList }
      </tbody>
      </table>
    )
  }
}
