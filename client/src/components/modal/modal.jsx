import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import addItemIcon from "../../assets/add-item.png";

import "./modal.scss"

const CreateInputModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="light" className="modal-btn mt-4" onClick={handleShow}>
        <img className="add-item-icon" src={addItemIcon} alt="add item icon" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New item form input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Input type</Form.Label>
            <Form.Select>
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="Boolean">Yes / No</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateInputModal;
