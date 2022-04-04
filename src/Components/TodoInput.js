import React,{useState} from 'react';
import './TodoInput.css';

export default function TodoInput(props) {

  const [inputText, SetInputText] = useState('');

  const pass_input_data = event =>{
    SetInputText(event.target.value);
    console.log("input changed");
  }

  const submitdata = () =>{
    if(inputText.trim().length == 0){
      return;
    }
    props.newinput(inputText);
    SetInputText('');
  }

  return <div className='todo-input'>
            <label>Course Goal</label>
            <input onChange={pass_input_data} type="text" value={inputText}/>
            <button onClick={submitdata}>Add Goal</button>
        </div>;
}
