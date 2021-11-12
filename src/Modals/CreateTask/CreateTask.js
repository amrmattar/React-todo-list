import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateTask.module.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle}) => (
 
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control"  name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" >Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
   
);

CreateTask.propTypes = {};

CreateTask.defaultProps = {};

export default CreateTask;
