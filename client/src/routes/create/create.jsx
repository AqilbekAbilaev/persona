import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ReactMarkDown from "react-markdown";

import "./create.scss";

const Create = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
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
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
              <Form.Control rows="8" as="textarea" aria-label="With textarea" />
              <Form.Check className="label" type="checkbox" label="Markdown" />
            </Form.Group>
          </Col>
          {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
        </Row>
      </Form>
    </Container>
  );
};

export default Create;
