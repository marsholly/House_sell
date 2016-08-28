import React , {Component} from 'react';
import numeral from 'numeral';

export default class SoldList extends Component {
  render(){
    let { _id, picture, address, zipcode, sqft, beds, baths, price, buyer } = this.props;
    let priceStr = numeral(price).format('0,0');
    if(buyer) {
      return (
        <tr key={_id + price}>
          <td><img src={picture} width="300 px" alt="No Image"/></td>
          <td>{address},{zipcode}</td>
          <td>{sqft}</td>
          <td>{beds}</td>
          <td>{baths}</td>
          <td>${priceStr}</td>
          <td>{buyer.name}</td>
        </tr>
      )
    }
    else{
      return (<tr></tr>)
    }
  }
}
