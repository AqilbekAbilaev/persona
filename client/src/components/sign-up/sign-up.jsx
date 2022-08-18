import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import twitter from "../../assets/twitter.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

import "./sign-up.scss";

const SignUp = () => {
  return (
    <Row className="Signup">
      <Col className="Signup-form">
        <h1 className="Signup__title">Sign up</h1>
        <Form className="Signup-form__container mt-4">
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="Signup-form__label"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="Signup-form__label"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirm password"
              className="Signup-form__label"
            >
              <Form.Control type="password" placeholder="Confirm password" />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" variant="primary" className="Signup-form__btn">
            Sign up
          </Button>
        </Form>

        <h5 className="mt-4" style={{fontWeight: 200}}>Sign up with social networks</h5>
        <Row className="Signup-media mt-2">
          <Col>
            <Button variant="light">
              <img
                className="Signup-media__icon"
                src={twitter}
                alt="twitter logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Signup-media__icon"
                src={google}
                alt="google logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Signup-media__icon"
                src={facebook}
                alt="facebook logo"
              />
            </Button>
          </Col>
          <Col>
            <Button variant="light">
              <img
                className="Signup-media__icon"
                src={github}
                alt="github logo"
              />
            </Button>
          </Col>
        </Row>

        <Link to="/login" className="m-3">
          Login
        </Link>
      </Col>

      <Col className="Signup-img"></Col>
    </Row>
  );
};

export default SignUp;
