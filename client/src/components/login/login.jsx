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

const SignInForm = () => {
  // const [usr, setUsr] = useState("");

  return (
    <Row className="Login">
      <Col className="Login__img"></Col>

      <Col className="Login__form">
        <h1>Login</h1>
        <Form className="Login__form-container mt-4">
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="floating-label"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="floating-label"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" variant="primary" className="login-btn">
            Login
          </Button>
        </Form>

        <h5 className="mt-4">Login with social networks</h5>
        <Row className="Login__media mt-2">
          <Col>
            <Button variant="light">
              <img className="Login__media-icon" src={twitter} alt="twitter logo" />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img className="Login__media-icon" src={google} alt="google logo" />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img className="Login__media-icon" src={facebook} alt="facebook logo" />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img className="Login__media-icon" src={github} alt="github logo" />
            </Button>
          </Col>
        </Row>

        <Link to="/register" className="mt-3">
          Register
        </Link>
      </Col>
    </Row>
  );
};

export default SignInForm;
