import { useState, useEffect } from "react";
import axios from "axios";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

import close from "../../assets/cross.png";

import "./multiselect.scss";

const MultipleSelect = () => {
  const [tag, setTag] = useState([]); // For new option
  const [tags, setTags] = useState([]); // Tags from db
  const [res, setRes] = useState([]); // For tags selected
  const [field, setField] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/tags")
      .then((data) => {
        setTags(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    let result = tags.filter(
      (item) =>
        item.tag.includes(e.target.value.trim()) && !res.includes(item.tag)
    );
    setField(result);
    setTag(e.target.value);
  };

  return (
    <Col className="tag-col">
      <Form.Group className="tag-form" controlId="tag">
        <Form.Label>Tag</Form.Label>
        <Form.Control
          className="tag-input"
          type="text"
          onChange={handleChange}
          disabled
        />

        <Form.Text className="tags">
          {field.length > 0 ? (
            field.map((item, index) => {
              return (
                <option
                  className="tag"
                  key={index}
                  value={item.tag}
                  onClick={(e) => {
                    if (!res.includes(e.target.value)) {
                      setRes([...res, e.target.value]);
                      setField(field.filter((data) => item !== data));
                    }
                  }}
                >
                  {item.tag}
                </option>
              );
            })
          ) : (
            <option
              className="tag"
              onClick={(e) => {
                if (e.target.value.trim() == "") return;
                if (!res.includes(e.target.value)) {
                  setRes([...res, e.target.value]);
                }
              }}
            >
              {tag}
            </option>
          )}
        </Form.Text>
      </Form.Group>

      <div className="selected-tags">
        <div className="selected-tags-container">
          {res.map((item, index) => {
            return (
              <ListGroup.Item key={index} className="selected tag">
                <div>{item}</div>
                <img
                  className="close"
                  src={close}
                  alt="close btn"
                  onClick={() => {
                    setRes(res.filter((data) => data !== item));
                  }}
                />
              </ListGroup.Item>
            );
          })}
        </div>
      </div>
    </Col>
  );
};

export default MultipleSelect;
