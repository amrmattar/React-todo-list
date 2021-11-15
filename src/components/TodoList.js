import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import axios from 'axios';
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/apiservice";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        getTasks().then(res => {
        const Tasks = res.data;
        setTaskList(Tasks)
    })}, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

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
            <div className = "header text-center">
                <h3>Todo List</h3>
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