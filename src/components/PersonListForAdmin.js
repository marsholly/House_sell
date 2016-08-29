import React , {Component} from 'react';
import PersonActions from '../actions/PersonActions';
// import ServerActions from '../actions/ServerActions';
import { browserHistory } from 'react-router'

export default class PersonListForAdmin extends Component{
  constructor(props){
    super(props);
    this.deletePerson=this.deletePerson.bind(this);
  }

  deletePerson(id){
     PersonActions.deletePerson(id);
  }

  render(){
    let {_id,name,email,phoneNum}=this.props;
    return(
      <tr key={_id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNum}</td>
        <td>
          <button id = {_id} onClick={()=>this.deletePerson(_id)} className ="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}
