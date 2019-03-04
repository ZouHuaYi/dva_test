import dva from 'dva';
import './index.css';



const app = dva({
  initialState:{
      products: [
         { abc: 'dva', id: 1 },
         { abc: 'antd', id: 2 },
       ],
      example: 0,
      todo_list: [1,2,3,4,5,6]
     }
});

app.router(require('./router').default);
app.model(require('./models/products').default);
app.model(require('./models/example').default);
app.model(require('./models/todo_list').default);

app.start('#root');
