// import { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Row, Col, Button } from "react-bootstrap";

import twitter from "../../assets/twitter.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";

const Login = () => {
  // const [usr, setUsr] = useState("");

  return (
    <Row className="Login">
      <Col className="Login-img"></Col>

      <Col className="Login-form">
        <h1 className="Login__title">Login</h1>
        <Form className="Login-form__container mt-4">
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="Login__form-label"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="Login__form-label"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" variant="primary" className="Login__form-btn">
            Login
          </Button>
        </Form>

        <h5 className="Login-media__title mt-4">Login with social networks</h5>
        <Row className="Login__media mt-2">
          <Col>
            <Button variant="light">
              <img
                className="Login__media-icon"
                src={twitter}
                alt="twitter logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login__media-icon"
                src={google}
                alt="google logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login__media-icon"
                src={facebook}
                alt="facebook logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Login__media-icon"
                src={github}
                alt="github logo"
              />
            </Button>
          </Col>
        </Row>

        <Link to="/register" className="m-3">
          Register
        </Link>
      </Col>
    </Row>
  );
};

export default Login;
