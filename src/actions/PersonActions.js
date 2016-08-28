import API from '../API';

const PersonActions = {

  getAllPeople:API.getAllPeople,

  createPerson(person) {
    API.createPerson(person);
  },

  deletePerson(id) {
    API.deletePerson(id);
  },

  addOwner(houseId, buyerId){
    API.addOwner(houseId, buyerId);
  }
}

export default PersonActions;
