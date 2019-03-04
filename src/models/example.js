
export default {

  namespace: 'example',
  state: 0,
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {

  },

  reducers: {
    add(state){
      return state+1
    }
  },

};
