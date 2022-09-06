import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Comments from "../comments/comments";
import { FaHeart } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import "./item.scss";

const URL = import.meta.env.VITE_URL;

const Item = () => {
  const [like, setLike] = useState(true);
  const [item, setItem] = useState({});
  const params = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axios.get(URL + "/collections/items/" + params.itemId).then((data) => {
      setItem(data.data);
    });
  }, []);

  const handleClick = () => {
    axios
      .patch(URL + "/collections/items/" + params.itemId, {
        like,
      })
      .then((data) => {
        setItem(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLike(!like);
  };

  return (
    <Container>
      <Row>
        {Object.entries(item).map((item, index) => {
          if (
            item[0] == "_id" ||
            item[0] == "__v" ||
            item[0] == "likes" ||
            item[0] == "parent"
          )
            return;
          return (
            <Col key={index}>
              <Form.Label className="label">{item[0]}</Form.Label>
              <Form.Control
                name={item[1]}
                type={item[1]}
                onChange={() => {}}
                value={item[1]}
              />
            </Col>
          );
        })}
      </Row>
      <div className="like-container">
        <FaHeart
          className="like"
          style={!like ? { color: "red" } : { color: "#444" }}
          onClick={handleClick}
        />
        {item.likes == 0 ? null : (
          <span className="like-counter">{item.likes}</span>
        )}
      </div>

      <Comments />
    </Container>
  );
};

export default Item;
