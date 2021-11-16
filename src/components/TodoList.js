import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import {
    addTask,
    getTasks,
    updateTask,
    deleteTaskById,
} from "../services/apiservice";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        getTasks().then(res => {
        const Tasks = res.data;
        setTaskList(Tasks)
    })}, [])

    const saveTask = (taskObj) => {
        addTask(taskObj).then(res => {})
        window.location.reload()
        setTaskList(taskList)
        setModal(false)
    }

    const updateListArray = (obj, id) => {
        updateTask(id, obj).then(res => {})
        window.location.reload()
    }

    const deleteTask = (id) => {
        deleteTaskById(id).then(res => {})
        window.location.reload()
    }


    const toggle = () => {
        setModal(!modal);
    }



    return (
        <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                {/* <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/> */}
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((Tasks , index) => <Card taskObj = {Tasks} index = {index} key={index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;