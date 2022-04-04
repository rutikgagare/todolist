import React from 'react';
import List from './List';

const TaskList = (props) => {
  console.log(props.items);

  const delete_list = (deleteelementid) =>{
    props.deletegoal(deleteelementid);
  }
  
  return <div>
    {props.items.map( item =>(
         <List key={item.id} task={item.text} id={item.id} ondelete={delete_list}/> 
    ))} 
  </div>
}

export default TaskList;
