import { Link } from "react-router-dom";

import useCollections from "../../hooks/useCollections";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Collections = () => {
  const {collections, setCollections} = useCollections();

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {collections?.map((item, index) => (
          <Card key={index} style={{ width: "18rem", padding: "0 0" }}>
            <Card.Img
              variant="top"
              src={"http://localhost:3500/" + item.image}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.topic}</Card.Text>

              <Link to={"/collections/" + item._id}>More</Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default Collections;
