import axios from 'axios';
import ServerActions from './actions/ServerActions';

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

  // addOwner(animal_id, owner_id){
  //   axios.put(`/api/animals/${animal_id}/addOwner/${owner_id}`)
  //     .then(this.getAllAnimals())
  // }
}

export default API;
