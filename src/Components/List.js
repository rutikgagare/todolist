import React from 'react';
import './List.css'

const List = (props) => {
  const deleteList =() =>{
    props.ondelete(props.id);
    console.log(props.id);
  }

  return <div className='list'>
      <h3 onClick={deleteList}>{props.task}</h3>
  </div>
}

export default List;
