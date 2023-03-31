import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  async function addData(data){
    await fetch('https://to-do-list-25c37-default-rtdb.firebaseio.com/todolist.json',{
      method:"POST",
      body: JSON.stringify(data), // converting object to json
      headers:{
        'Content-Type':'application/json'
      }
    })
  }

  async function fetchGoal(){
    setIsLoading(true);
    const response = await fetch('https://to-do-list-25c37-default-rtdb.firebaseio.com/todolist.json');
    const data = await response.json();

    const loadedTask = [];

    for(const key in data){
      loadedTask.push({
        key:data[key].id,
        text:data[key].text
      })
    }
    setCourseGoals(loadedTask);
    setIsLoading(false);
  }

  useState(()=>{
    fetchGoal();
  },[addGoalHandler]);
  
  function addGoalHandler(enteredText){
    addData({ text: enteredText, id: Math.random().toString()});
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };


  let content;

  if(!isLoading && courseGoals.length === 0){
    content = <p style={{textAlign: "center"}}>No Data Found</p>;
  }

  if(courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  if(isLoading){
    content = <p style={{textAlign: "center"}}>Loading......</p>
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
