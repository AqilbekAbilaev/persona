import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ReactMarkDown from "react-markdown";
import MultipleSelect from "../../components/multipleselect"

import "./create.scss";

const Create = (props) => {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/topics")
      .then((data) => setTopic(data.data));
  }, []);

  return (
    <>
      <h2 className="create-title">Create collection </h2>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Text className="form-text" muted={false}>
                  Collection level settings*
                </Form.Text>
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the name of collection"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Topic</Form.Label>
                <Form.Select aria-label="Default select example">
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
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="label">Description</Form.Label>
                <Form.Control
                  rows="8"
                  as="textarea"
                  aria-label="With textarea"
                />
                <Form.Check
                  className="label"
                  type="checkbox"
                  label="Markdown"
                />
              </Form.Group>
            </Col>
            <Row>
              <Form.Text className="form-text" muted={false}>
                Item level settings*
              </Form.Text>
              <Col>
                <Form.Group controlId="id">
                  <Form.Label>Id</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <MultipleSelect />
              {/* <Col style={{ display: "flex", alignItems: "center" }}>
                <Form.Group controlId="tag">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control type="text" onChange={handleChange} />
                  <Form.Text>
                    {field.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.topic}
                          onClick={(e) => {
                            if (!res.includes(e.target.value)) {
                              setRes([...res, e.target.value]);
                            }
                          }}
                        >
                          {item.topic}
                        </option>
                      );
                    })}
                  </Form.Text>
                </Form.Group>
                <div>
                  {res.map((item, index) => {
                    return (
                      <option className={"tag tag-" + index} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </div>
              </Col> */}
            </Row>
            {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Create;
