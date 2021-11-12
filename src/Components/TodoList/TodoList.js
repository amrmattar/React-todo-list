import React, {useState} from 'react';
import styles from './TodoList.module.scss';
import CreateTask from '../../Modals/CreateTask/CreateTask'


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
          setModal(!modal);
      }
  return (
    <>
    <div className = {"text-center",styles.header}>
      <h3>Todo List</h3>
      <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
    </div>
    <div className = "task-container">
    </div>
    <CreateTask toggle = {toggle} modal = {modal} />
  </>
  )
  
}

export default TodoList;
