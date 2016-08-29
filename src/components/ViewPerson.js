import React, { Component } from 'react';
import PersonStore from '../stores/PersonStore';
import PersonList from './PersonList';
import PersonActions from '../actions/PersonActions';


export default class ViewPerson extends Component {
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
      people: PersonStore.getAll()
    });
  }

  render() {
    let houseId = this.props.location.query.houseId;
    let { people } = this.state;
    const personLists = people.map(person => {
      return (
        <PersonList key={person._id} {...person} houseId={houseId} />
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
