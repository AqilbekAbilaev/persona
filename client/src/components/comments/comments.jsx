import { useState, useEffect } from "react";
import axios from "axios";

import Comment from "../../components/comment/comment";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./comments.scss";

const URL = import.meta.env.VITE_URL;

const Comments = () => {
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(URL + "/collections/items/comments").then((data) => {
      setComments(data?.data);
    });
  }, []);

  const handleSubmit = () => {
    axios
      .post(URL + "/collections/items/comments", {
        text: comment,
        date: new Date(),
      })
      .then((data) => {
        setComments(data?.data);
      });
  };
  return (
    <>
      <div className="comments-container">
        <div className="create-comment">
          <Form.Control
            className="textarea"
            as="textarea"
            rows={3}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            className="create-comment-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>

        {comments.map((item, index) => (
          <Comment key={index} from={item.from} text={item.text} />
        ))}
      </div>
    </>
  );
};

export default Comments;
