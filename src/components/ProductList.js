/**
 * Created by zhy on 2019/3/1.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table , Popconfirm , Button } from 'antd';


const ProductList = ({onDelete,products}) => {
  const colums = [{
    title: 'Name',
    dataIndex: 'abc',
  }, {
    title:'Actions',
    render:(text,record)=>{
      return(
        <Popconfirm title="Delect?" onConfirm={()=>onDelete(record.id)}>
          <Button>Delete{record.name}</Button>
        </Popconfirm>
      )
    }
  }
  ];
  return (
    <Table
      dataSource={products}
      columns={colums}
    />
  );
};

ProductList.propTypes = {
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequired,
}

export default ProductList;
