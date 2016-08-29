import API from '../API';

const AdminActions={
  login(user){
    API.login(user);
  },
  getAdmin(){
    API.getAdmin();
  }, 
  logout(){
    API.logout();
  }
};

export default AdminActions;
