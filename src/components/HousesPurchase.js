import React, { Component } from 'react'
import HouseStore from '../stores/HouseStore'
import BuyerActions from '../actions/BuyerActions'
import SoldList from './SoldList'

export default class HousesPurchase extends Component{

  constructor(){
    super();
    this.state = {
      houses: HouseStore.getAll()
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
   const soldList  = this.state.houses.map( house => {
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
