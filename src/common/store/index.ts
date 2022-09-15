import {createStore} from "vuex";

export default {
  state: {
    count: 0
  },
  mutations: {
    addCount(state: any, data:number){
      state.count+=data
    }
  }
}