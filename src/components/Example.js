import React from 'react';

const Example = ({num,clickAdd}) => {
  return (
    <div onClick={clickAdd}>
      Example.js {num}
    </div>
  );
};

Example.propTypes = {
};

export default Example;
