import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useField from "../../hooks/useField";

import "./collection.scss";

const Collection = ({}) => {
  const [collection, setCollection] = useState(null);
  const [savedItems, setSavedItems] = useState([]);
  const [item, setItem] = useState({});
  const params = useParams();
  const { fields, setFields } = useField();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/collections/${params.id}`)
      .then((data) => {
        setCollection(data.data.collection);
        setFields(data.data.collection.item_fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/collections/saveditems/get`, {
        params: {
          id: params.id,
        },
      })
      .then((data) => setSavedItems(data?.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreateItem = (e) => {
    axios
      .post(`${import.meta.env.VITE_URL}/collections/saveItem`, {
        ...item,
        parent: params.id,
      })
      .then((data) => {
        setSavedItems(data.data);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <img
            className="collection-img"
            src={import.meta.env.VITE_URL + "/" + collection?.image}
            alt="collection image"
          />
        </Col>
        <Col>
          <p>Collection Name: {collection?.name}</p>
          <p>Collection Topic: {collection?.topic}</p>
          <p>Collection Description: {collection?.description}</p>
        </Col>
      </Row>
      <h3 className="title">Items</h3>
      {savedItems.length > 0 ? (
        savedItems?.map((item, index) => {
          return (
            <Row style={{ alignItems: "flex-end" }} key={index}>
              {Object.entries(item)
                .slice(0, 4)
                .map((child, indx) => {
                  if (
                    child[0] == "_id" ||
                    child[0] == "__v" ||
                    child[0] == "parent"
                  )
                    return;

                  return (
                    <Col key={indx}>
                      <Form.Label className="label">{child[0]}</Form.Label>
                      <Form.Control
                        name={child[1]}
                        type={child[1]}
                        onChange={handleChange}
                        value={child[1]}
                        disabled
                      />
                    </Col>
                  );
                })}
              <Col>
                <Link variant="primary" to={item._id}>
                  View
                </Link>
              </Col>
            </Row>
          );
        })
      ) : (
        <p>No items</p>
      )}

      <Row className="create-item-container">
        <h3 className="title">Create new item</h3>
        {fields?.map((item, index) => {
          return (
            <Col key={index}>
              <Form.Label className="label">{item?.name}</Form.Label>
              <Form.Control
                name={item?.name}
                type={item?.type}
                placeholder={item?.name}
                onChange={handleChange}
              />
            </Col>
          );
        })}
        <Button className="create-item-btn" onClick={handleCreateItem}>
          Create item
        </Button>
      </Row>
    </Container>
  );
};

export default Collection;
