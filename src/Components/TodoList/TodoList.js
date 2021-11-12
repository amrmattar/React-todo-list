import React, {useState} from 'react';
import styles from './TodoList.module.scss';
import CreateTask from '../../Modals/CreateTask/CreateTask'


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
  const toggle = () => {
          setModal(!modal);
      }
      const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
  return (
    <>
    <div className = {"text-center",styles.header}>
      <h3>Todo List</h3>
      <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
    </div>
    <div className = "task-container">
      {taskList && taskList.map((obj) =>  <p>{obj.Name}</p> )}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
  </>
  )
  
}

export default TodoList;
