import { useEffect } from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import './tags.scss';

const Tags = ({tags}) => {
  let variants = [
    "secondary",
    "primary",
    "light",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ];

  return (
    <Row className="tags-container">
      {tags?.map((item, index) => (
        <Col key={index}>
          <Button
            variant={variants[Math.round(Math.random() * variants.length )]}
            key={index}
          >
            {item.tag}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Tags;
