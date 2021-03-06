import React, { Component } from 'react';
import HouseStore from '../stores/HouseStore';
import BuyerActions from '../actions/BuyerActions';
import HouseList from './HouseList';


export default class SearchPage extends Component {
  constructor(props){
    super();
    this.state = {
      houses: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    BuyerActions.getAllHouses();
    HouseStore.startListening(this._onChange);
  }


  componentWillUnmount() {
    HouseStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      houses: HouseStore.getAll()
    });
  }

  render(){
    let {houses} = this.state;
    const listHouses = houses.map(house => {
      return (
        <HouseList key={house._id} {...house} />
      )
    })

    return(
      <div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Sqft</th>
                <th>Beds</th>
                <th>Baths</th>
                <th>Price</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {listHouses}
            </tbody>
          </table>
      </div>
    </div>
    )
  }
}
