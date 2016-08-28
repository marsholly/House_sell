import React , {Component} from 'react';
import PersonActions from '../actions/PersonActions';
import ServerActions from '../actions/ServerActions';
// import {browserHistory} from 'react-router'

export default class PersonList extends Component{
  constructor(){
    super();
    this.deletePerson=this.deletePerson.bind(this);
  }

  deletePerson(e){
     PersonActions.deletePerson(e.target.id);
  }

  select(houseId, buyerid){
    PersonActions.addOwner(houseId, buyerid);
    // browserHistory.push('/AdoptedPets')

  }

  render(){
    let {_id,name,email,phoneNum,houseId}=this.props;
    return(
      <tr key={_id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNum}</td>
        <td>
          <button id = {_id} onClick={this.select.bind(null,houseId,_id)} className ="btn btn-success">Select</button>
          <button id = {_id} onClick={this.deletePerson} className ="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}
