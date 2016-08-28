import React, { Component } from 'react';
import BuyerActions from '../actions/BuyerActions';
import numeral from 'numeral';
import { browserHistory } from 'react-router';

export default class HouseList extends Component {
  constructor(props){
    super(props);
    this.orderHouse = this.orderHouse.bind(this);
  }

  orderHouse(id){
    browserHistory.push({pathname:'/sell/viewperson', query:{ houseId :id}});
  }

  render() {
    let { _id, address, sqft, beds, baths, picture, price, zipcode }  = this.props;
    let priceStr = numeral(price).format('0,0');
    return(
      <tr className='trFont'>
        <td><img src={picture} width="300 px" alt="No Image"/></td>
        <td>{address}</td>
        <td>{zipcode}</td>
        <td>{sqft}</td>
        <td>{beds}</td>
        <td>{baths}</td>
        <td>${priceStr}</td>
        <td>
          <button className="btn btn-danger btn-xs" onClick={() => this.orderHouse(_id)}>
            <span className="glyphicon glyphicon-tag"></span>
          </button>
        </td>
      </tr>
    )
  }
}
