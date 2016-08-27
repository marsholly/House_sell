import React, { Component } from 'react';

export default class ListHouse extends Component {
  constructor(props){
    super(props);
    this.orderHouse = this.orderHouse.bind(this);
  }
  orderHouse(id){

  }
  render() {
    let { _id, address, sqft, beds, baths, picture, price, zipcode }  = this.props;
    return(
      <tr className='trFont'>
        <td><img src={picture} width="300 px" alt="No Image"/></td>
        <td>{address},{zipcode}</td>
        <td>{sqft}</td>
        <td>{beds}</td>
        <td>{baths}</td>
        <td>${price}</td>
        <td>
          <button className="btn btn-danger btn-xs" onClick={() => this.orderHouse(_id)}>
            <span className="glyphicon glyphicon-tag"></span>
          </button>
        </td>
      </tr>
    )
  }
}
