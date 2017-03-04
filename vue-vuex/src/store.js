import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
 //the state option is always necessary for any
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
    ]
  },
  getters: {
    unregisteredUsers(state){
        return state.users.filter(user => {
          return !user.registered;
        })
    }
  }
});
