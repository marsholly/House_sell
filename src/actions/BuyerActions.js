import API from '../API';

const BuyerActions = {
  getAllHouses: API.getAllHouses,
  houseWithoutOwner: API.houseWithoutOwner,
  createHouse(house) {
    API.createHouse(house);
  },
  editHouse(id, house){
    API.editHouse(id, house);
  },
  deleteHouse(id){
    API.deleteHouse(id);
  },
  lookup(zipcode){
    API.lookup(zipcode);
  },
  lookupPrice(low, high){
    API.lookupPrice(low, high);
  },
  lookupBedroom(low, high){
    API.lookupBedroom(low, high);
  }
}

export default BuyerActions;
