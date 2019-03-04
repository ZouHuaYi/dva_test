/**
 * Created by zhy on 2019/3/4.
 */
import React,{Component, PropTypes} from 'react';
import {connect} from 'dva';

class TodoList extends Component{
  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return(
      <div>
        {this.props.todo_list.map((item,key)=>{
          return (
            <div key={''+key+item} onClick={()=>{this.props.add(key)}}>
              <a href="javascript:;">我是几号{item}</a>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state,ownProps) {

  return{
    todo_list:state.todo_list
  }
}

function mapDispatchToProps(dispatch,ownProps) {
  return{
    add(num){
      dispatch({
        type:'todo_list/addAfter',
        payload:num
      })
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
