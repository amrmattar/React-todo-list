import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTaskPopup = ({modal, toggle, save}) => {
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "title"){
            settitle(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["title"] = title
        taskObj["description"] = description
        save(taskObj)
        if (title.length < 1 && description.length < 1) {
          setTitleErr("Title Field is required!");
          setDescriptionErr("Title Field is required!");
        } else if (title.length < 1) {
          setTitleErr("Title Field is required!");
          setDescriptionErr("");
        } else if (description.length < 1) {
            setTitleErr("");
          setDescriptionErr("Title Field is required!");
        } else {
            setTitleErr("");
            setDescriptionErr("");
            setDescription("");
            settitle("");
        }
    }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Task Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleChange}
              name="title"
              required
            />
            <div className="errormsg">{titleErr}</div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
              required
            ></textarea>
            <div className="errormsg">{descriptionErr}</div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;