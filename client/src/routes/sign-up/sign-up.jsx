import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

// Icons
import twitter from "../../assets/twitter.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

import "./sign-up.scss";

const URL = "http://localhost:3500/register";

const SignUp = () => {
  const [usr, setUser] = useState({
    usrname: "",
    email: "",
    pwd: "",
    conf_pwd: "",
  });

  const [err, setErr] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, pwd, conf_pwd, usrname } = usr;
    if (pwd !== conf_pwd) {
      setErr("Passwords do not match");
      return;
    }
    setErr(null);

    axios
      .post(URL, {
        email,
        pwd,
        usrname,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row className="Signup">
      <Col className="Signup-form">
        <h1 className="Signup-form__title">Sign up</h1>
        <Form className="Signup-form__container" onSubmit={handleSubmit}>
          <p style={{ color: "red" }}>{err}</p>

          <Form.Group>
            <FloatingLabel
              controlId="floatingUsername"
              label="Username"
              className="Signup-form__label"
            >
              <Form.Control
                name="usrname"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="Signup-form__label"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="Signup-form__label"
            >
              <Form.Control
                name="pwd"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="floatingConfirmPassword"
              label="Confirm password"
              className="Signup-form__label"
            >
              <Form.Control
                name="conf_pwd"
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit" variant="primary" className="Signup-form__btn">
            Sign up
          </Button>
        </Form>
        <h5 className="Signup-media__title mt-4">
          Sign up with social networks
        </h5>
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

        <Link to="/login" className="link m-3">
          Login
        </Link>
      </Col>

      <Col className="Signup-img"></Col>
    </Row>
  );
};

export default SignUp;
