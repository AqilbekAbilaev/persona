import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import addItemIcon from "../../assets/add-item.png";

import "./modal.scss";

const URL = import.meta.env.VITE_URL;

const CreateInputModal = ({ parent, setFields }) => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleClose = () => setShow(false);
  const handleCreate = () => {
    if (!item.name || !item.type) {
      alert("Please fill the form correctly!");
      return;
    }
    axios.post(URL + "/collections/items", item).then((data) => {
      setFields(data.data);
    });
    setShow(false);
    setItem({});
  };
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
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Input type</Form.Label>
            <Form.Select name="type" onChange={handleChange}>
              <option value=""></option>
              <option value="String">String</option>
              <option value="Number">Number</option>
              <option value="Boolean">Yes / No</option>
              <option value="Date">Date</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateInputModal;
