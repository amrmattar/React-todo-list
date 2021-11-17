import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTaskById,
  searchTask,
} from "../services/apiservice";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    searchTask(value).then((res) => {
      const Tasks = res.data;
      setTaskList(Tasks);
    });
  };

  const getTaskDuring = () => {
    getTasks().then((res) => {
      const Tasks = res.data;
      setTaskList(Tasks);
    });
  };

  useEffect(() => {
    getTaskDuring();
  }, []);

  const saveTask = (taskObj) => {
    addTask(taskObj).then((res) => {
      getTaskDuring();
    });
    if (taskObj.title !== "" && taskObj.description !== "") {
      setModal(false);
    }
  };

  const updateListArray = (obj, id) => {
    updateTask(id, obj).then((res) => {
      getTaskDuring();
    });
  };

  const deleteTask = (id) => {
    deleteTaskById(id).then((res) => {
      getTaskDuring();
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header  shadow">
        <div className="todo-title">
          <i className="fas fa-tasks"></i>
          ToDo List
          <div className="search float-right">
            <input
              type="text"
              className="form-control "
              placeholder="Search..."
              onChange={handleChange}
              name="taskSearch"
            />
          </div>
        </div>
      </div>
      <button
        className="btn  float-right m-3 create-btn"
        onClick={() => setModal(true)}
      >
        Create Task
      </button>
      <div className="task-container">
        {taskList &&
          taskList.map((Tasks, index) => (
            <Card
              taskObj={Tasks}
              index={index}
              key={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
