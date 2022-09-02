import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CollectionSmall from "../../components/collection/collection";

const Home = () => {
  const [collections, setCollections] = useState([]);
  const { logout, isAuthenticated, user, isLoading } = useAuth0();
  const { usr, setUsr } = useAuth();
  useEffect(() => {
    if (user && isLoading === false) {
      axios
        .post("http://localhost:3500/social_auth", { email: user?.email })
        .catch((err) => {
          console.log(err);
        });
      setUsr(user?.email);
    }
  }, [isLoading]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/collections`).then((data) => {
      setCollections(data.data.collections);
      console.log(data);
    });
  }, []);

  const handleLogout = () => {
    logout();
    setUsr(null);
  };
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {collections.map((item, index) => {
          return (
              <CollectionSmall
              key={index}
                src={item.image}
                name={item.name}
                topic={item.topic}
                id={item._id}
              />
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
