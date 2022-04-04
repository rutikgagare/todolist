import React,{useState} from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TaskList from './Components/TaskList';


const App = () => {

  const [dummyGoals, setDummyGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addinput =(enteredinput) =>{
    const newgoal = { text: enteredinput, id: Math.random().toString() }
    setDummyGoals(prevGoals => {
      const updatedGoals = [...prevGoals,newgoal];
      return updatedGoals;
    });
  }

  const delete_goal = goalId => {
    setDummyGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (dummyGoals.length > 0) {
    content = (
      <TaskList items={dummyGoals} deletegoal={delete_goal} />
    );
  }

  
  return (
    <div className='main'>
      <TodoInput newinput={addinput}/>
      <div>{content}</div>
      
    </div>
  );
}

export default App;
