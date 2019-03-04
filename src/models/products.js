/**
 * Created by zhy on 2019/3/1.
 */
export default {
  namespace:'products',
  state:[],
  reducers: {
    'delete'(state,{payload:id}){
      return state.filter(item => item.id !== id);
    },
  },
};
