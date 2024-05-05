import './App.css';
import { useRef, useState } from 'react';


function App() {
  const[toDos , setToDo] = useState([])
  const inputRet = useRef()

  const handleAddTodo = () => {
    const text = inputRet.current.value; 
    const newItem = {completed:false, text}
      setToDo([...toDos,newItem])
      inputRet.current.value = ""
    
  }

  const handleItemDone =(index) => {
      const newTools = [...toDos]
      newTools[index].completed = !newTools[index].completed
      setToDo(newTools)
  }


  const handelDeletItem=(index) => {
    const newTools = [...toDos]
    newTools.splice(index,1)
    setToDo(newTools)
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='title'>
              <h2 className='text-primary'> To Do List </h2>
            </div>
            <div className='to-do'>
              <ul>
                {toDos.map(({text,completed}, index) => {
                  return (
                    <div className='item'>
                      <li 
                        className={completed?"done" : ""} 
                        key={index} onClick={() => handleItemDone(index)}>{text}
                      </li>
                      <span className="btn btn-secondary del" onClick={()=>handelDeletItem(index)}>x</span>
                    </div>)
                })}
              </ul>
              <div className='control'>
              <hr></hr>
                <input className='form-control' ref={inputRet} placeholder='Enter item...'></input>
                <br></br>
                <button className='btn btn-primary btn-all' onClick={handleAddTodo}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
