import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveHouses(houses) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_HOUSES',
      houses
    })
  },
  receiveOneHouse(house) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_HOUSE',
      house
    })
  }
}

export default ServerActions;
