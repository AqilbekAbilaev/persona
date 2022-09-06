import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useTags from "../../hooks/useTags";
import useCollections from "../../hooks/useCollections";

import Tags from "../../components/tags/tags";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CollectionCard from "../../components/collection-card/collection-card";

const Home = () => {
  const { logout, isAuthenticated, user, isLoading } = useAuth0();
  const { usr, setUsr } = useAuth();
  const { collections } = useCollections();
  const { tags, setTags } = useTags();

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
    axios
      .get("http://localhost:3500/tags")
      .then((data) => {
        setTags(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleLogout = () => {
    logout();
    setUsr(null);
  };

  return (
    <Container>
      <Tags tags={tags} />
      {/* <Link to="collections">Collections</Link> */}
      <Row xs={1} md={4} className="g-4">
        {collections?.slice(0, 5).map((item, index) => {
          return (
            <CollectionCard
              key={index}
              src={item.image}
              name={item.name}
              topic={item.topic}
              description={item.description}
              id={item._id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
