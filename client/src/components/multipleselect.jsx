import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const MultipleSelect = () => {
  const [tag, setTag] = useState([]);
  const [res, setRes] = useState([]);
  const [field, setField] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/tags").then((data) => {
      setTag(data.data);
    });
  }, []);
  const handleChange = (e) => {
    let result = [
      { topic: "afds" },
      { topic: "aqilbeki" },
      { topic: "kjrt" },
      { topic: "rtgb" },
      { topic: "gfds" },
    ].filter(
      (item) =>
        item.topic.includes(e.target.value.trim()) && !res.includes(item.topic)
    );
    setField(result);
  };

  return (
    <Col style={{ display: "flex", alignItems: "center" }}>
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
    </Col>
  );
};

export default MultipleSelect;
