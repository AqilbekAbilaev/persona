import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Row, Col, Button } from "react-bootstrap";

import twitter from "../../assets/twitter.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";

const URL = "http://localhost:3500/login";

const Login = () => {
  const [usr, setUsr] = useState({
    email: "",
    pwd: "",
  });

  const [err, setErr] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUsr((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pwd } = usr;

    if (!pwd || !email) {
      setErr("Invalid value");
    }
    setErr("");

    axios
      .post(URL, {
        email,
        pwd,
      })
      .then(data => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.data.errMessage);
      });
  };

  return (
    <Row className="Login">
      <Col className="Login-img"></Col>

      <Col className="Login-form">
        <h1 className="Login-form__title">Login</h1>
        <Form className="Login-form__container mt-4" onSubmit={handleSubmit}>
          <p style={{ color: "red" }}>{err}</p>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="Login-form__label"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="Login-form__label"
            >
              <Form.Control
                name="pwd"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" variant="primary" className="Login-form__btn">
            Login
          </Button>
        </Form>

        <h5 className="Login-media__title mt-4">Login with social networks</h5>
        <Row className="Login-media mt-2">
          <Col>
            <Button variant="light">
              <img
                className="Login-media__icon"
                src={twitter}
                alt="twitter logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login-media__icon"
                src={google}
                alt="google logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login-media__icon"
                src={facebook}
                alt="facebook logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login-media__icon"
                src={github}
                alt="github logo"
              />
            </Button>
          </Col>
        </Row>

        <Link to="/register" className="link m-3">
          Register
        </Link>
      </Col>
    </Row>
  );
};

export default Login;
