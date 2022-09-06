import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CollectionCard = ({ src, name, topic, description, id }) => {
  return (
    <Card style={{ width: "18rem", padding: "0 0" }}>
      <Card.Img variant="top" src={"http://localhost:3500/" + src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{topic}</Card.Text>
        {description?.slice(0, 40) + "..."}

        <Link to={"collections/" + id}>More</Link>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
