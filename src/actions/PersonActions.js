import API from '../API';

const PersonActions = {

  getAllPeople:API.getAllPeople,

  createPerson(person) {
    API.createPerson(person);
    API.getAllPeople();
  },
  deletePerson(id) {
    API.deletePerson(id);
  },
  addOwner(houseid, buyerid){
    API.addOwner(houseid, buyerid);
  }
}

export default PersonActions;
