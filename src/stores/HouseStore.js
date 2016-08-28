import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _houses = [];
let _withoutOwnerHouses = [];

class HouseStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_HOUSES':
          _houses = action.houses;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_HOUSE':
          var { house } = action;
          _houses.push(house);
          this.emit('CHANGE');
          break;
        case 'HOUSES_WITHOUT_OWNER':
          _withoutOwnerHouses = action.houses;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _houses;
  }

  getWithoutOwnerHouses(){
    return _withoutOwnerHouses;
  }

}

export default new HouseStore();
