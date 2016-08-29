import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import AdminActions from '../actions/AdminActions'

let _admin = null;

class AdminStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ADMIN':
          _admin = action.admin;
          this.emit('CHANGE');
          break;
        case 'REMOVE_ADMIN':
          _admin = null;
          this.emit('CHANGE');
          break;
      }
    });

    if(document.cookie.includes('authtoken')){
      AdminActions.getAdmin();
    }
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  get(){
    return _admin;
  }
}

export default new AdminStore();
