import React, { Component } from 'react';
import PersonStore from '../stores/PersonStore';
import PersonList from './PersonList';
import PersonActions from '../actions/PersonActions';
import PersonListForAdmin from './PersonListForAdmin';


export default class ViewPersonForAdmin extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PersonActions.getAllPeople();
    PersonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PersonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      people: PersonStore.getAll(),
    });
  }

  render() {
    let people = this.state.people;
    let personLists;
    personLists = people.map(person => {
      return (
        <PersonListForAdmin key={person._id} {...person} />
      )
    })

    return (
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { personLists }
            </tbody>
          </table>
      </div>
    )
  }
}
