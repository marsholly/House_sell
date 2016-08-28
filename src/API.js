import axios from 'axios';
import ServerActions from './actions/ServerActions';
import PersonServerActions from './actions/PersonServerActions';

const API = {
  getAllHouses(){
    axios.get('/api/houses')
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  createHouse(house) {
    axios.post('/api/houses', house)
      .then(res => res.data)
      .then(ServerActions.receiveOneHouse)
      .catch(console.error);
  },
  lookup(zipcode){
    axios.get(`/api/houses/lookup/${zipcode}`)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  lookupPrice(low, high){
    axios.get(`/api/houses/lookup/price/${low}/${high}`)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  lookupBedroom(low, high){
    axios.get(`/api/houses/lookup/bed/${low}/${high}`)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  editHouse(id, house){
    axios.put(`/api/houses/${id}`, house)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`)
    .then(this.getAllHouses())
  },
  createPerson(person){
   axios.post('/api/buyers', person)
        .then(res=>res.data)
        .then(PersonServerActions.receiveOnePerson)
        .catch(console.error)
  },
   getAllPeople(){
     axios.get('/api/buyers')
        .then(res=>res.data)
        .then(PersonServerActions.receiveAllPeople)
        .catch(console.error)
  },
  deletePerson(id){
    axios.delete(`api/buyers/${id}`)
    .then(PersonServerActions.receiveAllPeople)
    .catch(console.error)
  },
  addOwner(houseid, buyerid){
    axios.put(`api/houses/${houseid}/addBuyer/${buyerid}`)
      .catch(console.error)
  }
}

export default API;
