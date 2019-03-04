/**
 * Created by zhy on 2019/3/4.
 */
import Immutable,{fromJS} from 'immutable'

function delay() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },1000)
  })
}

export default{
  namespace:'todo_list',
  state:[],
  reducers:{
    add(state,{payload:num}){
      const list1 = fromJS(state);
      const list2 = list1.push(num)
      return list2;
    },

  },
  effects: {
    *addAfter(action,{call,put}){
      yield call(delay);
      yield put({type:'add',payload:action.payload})
    }
  },
  subscriptions:{
    setup({dispatch,history}){
      history.listen((location)=>{
        console.log(location.pathname)
      })
    }
  }
}
