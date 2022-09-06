import Card from "react-bootstrap/Card";

import "./comment.scss";

const Comment = ({ from, text }) => {
  return (
    <Card className="comment-container" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{from}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
