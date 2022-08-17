import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Row, Col, Button } from "react-bootstrap";

import img from "../assets/background.jpg";
import twitter from "../assets/twitter.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sign-in-form.scss";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="sign-in-form">
      <Row>
        <Col className="image-container">
          <img src={img} alt="side image" className="side-image" />
        </Col>

        <Col className="form-container">
          <h1>Login</h1>
          <Form className="mt-4 form" style={{ width: "20rem" }}>
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
          <Row
            className="social-network-container mt-2"
            style={{ gap: "1rem" }}
          >
            <Col>
              <Button variant="light">
                <img
                  src={twitter}
                  alt="twitter logo"
                  style={{ width: "25px", height: "25px" }}
                />
              </Button>
            </Col>
            <Col>
              <Button variant="light">
                <img
                  src={google}
                  alt="twitter logo"
                  style={{ width: "25px", height: "25px" }}
                />
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="mr-3">
                <img
                  src={facebook}
                  alt="twitter logo"
                  style={{ width: "25px", height: "25px" }}
                />
              </Button>
            </Col>{" "}
            <Col>
              <Button variant="light" className="mr-3">
                <img
                  src={github}
                  alt="twitter logo"
                  style={{ width: "25px", height: "25px" }}
                />
              </Button>
            </Col>
          </Row>

          <Link to="/register" className="mt-3">
            Register
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default SignInForm;
