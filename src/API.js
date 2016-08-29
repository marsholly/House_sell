import axios from 'axios';
import ServerActions from './actions/ServerActions';
import PersonServerActions from './actions/PersonServerActions';
import AdminActions from './actions/AdminActions';
import RouteActions from './actions/RouteActions';

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
        .then(PersonServerActions.receiveAllPeople)
        .catch(console.error)
  },
  getAllPeople(){
    axios.get('/api/buyers')
      .then(res=>res.data)
      .then(PersonServerActions.receiveAllPeople)
      .catch(console.error)
  },
  deletePerson(id){
    axios.delete(`/api/buyers/${id}`)
      .then(this.getAllPeople())
  },
  addOwner(houseId, buyerId){
    axios.put(`/api/houses/${houseId}/addBuyer/${buyerId}`)
      .then(()=>{
        this.getAllHouses()
      })
      .catch(console.error)
  },
  houseWithoutOwner(){
    axios.get('/api/houses/houseWithoutOwner')
      .then(res=>res.data)
      .then(ServerActions.receiveHousesWithoutOwner)
      .catch(console.error)
  },
  login(user) {
    axios.post('/api/users/login', user)
      .then(() => {
        AdminActions.getAdmin()
        RouteActions.route('/sell/sellPage');
      })
      .catch(console.error)
  },
  logout(){
    axios.post('/api/users/logout')
      .then(ServerActions.removeAdmin)
      .catch(console.error)
  },
  getAdmin(){
    axios.get('/api/users/manage')
      .then(res => res.data)
      .then(ServerActions.receiveAdmin)
      .catch(console.error)
  }
}

export default API;
