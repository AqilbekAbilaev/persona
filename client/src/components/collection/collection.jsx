import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CollectionSmall = ({ src, name, topic, description, id }) => {
  return (
    <Card style={{ width: "18rem", padding: "0 0" }}>
      <Card.Img variant="top" src={"http://localhost:3500/" + src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{topic}</Card.Text>
        {description?.slice(0, 18) + "..."}

        <Link to={"collection:" + id}>More</Link>
      </Card.Body>
    </Card>
  );
};

export default CollectionSmall;
