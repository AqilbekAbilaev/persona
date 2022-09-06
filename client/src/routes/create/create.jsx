import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ReactMarkDown from "react-markdown";
import MultipleSelect from "../../components/multipleselect/multipleselect";
import CreateInputModal from "../../components/modal/modal";
import useCollections from "../../hooks/useCollections";
import useField from "../../hooks/useField";

import "./create.scss";

const URL = import.meta.env.VITE_URL;
const Create = (props) => {
  const [topic, setTopic] = useState([]);
  const [collection, setCollection] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const { setCollections } = useCollections();
  const { fields, setFields } = useField();

  useEffect(() => {
    axios.get(`${URL}/topics`).then((data) => {
      setTopic(data.data);
    });
  }, []);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bodyFormData = new FormData();
    Object.entries(collection).forEach((item) => {
      bodyFormData.append([item[0]], item[1]);
    });
    bodyFormData.append("image", selectedImage);

    axios
      .post(URL + "/collections", bodyFormData)
      .then((data) => {
        setCollections(data?.data);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { value, name, checked } = e.target;
    setCollection({ ...collection, [name]: value === "on" ? checked : value });
  };

  return (
    <>
      <h2 className="create-title">Create collection </h2>
      <Container>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Text className="form-text" muted={false}>
                  Collection level settings*
                </Form.Text>
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Enter the name of collection"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="topic">
                <Form.Label className="label">Topic</Form.Label>
                <Form.Select name="topic" onChange={handleChange}>
                  <option></option>
                  {topic.map((item, index) => {
                    return (
                      <option key={index} value={item.topic}>
                        {item.topic[0].toUpperCase() +
                          item.topic.slice(1).toLowerCase()}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="label">Choose an image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0]);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="label">Description</Form.Label>
                <Form.Control
                  name="description"
                  onChange={handleChange}
                  rows="8"
                  as="textarea"
                />
                <Form.Check
                  className="label"
                  type="checkbox"
                  label="Markdown"
                  name="markdown"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Row>
              <Form.Text className="form-text" muted={false}>
                Collection Item's default forms*
              </Form.Text>
              {fields?.map((item, index) => {
                return (
                  <Col key={index}>
                    <Form.Label className="label">{item?.name}</Form.Label>
                    <Form.Control
                      disabled
                      type={item?.type}
                      placeholder={item?.name}
                    />
                  </Col>
                );
              })}
            </Row>

            <CreateInputModal setFields={setFields} />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Create;
