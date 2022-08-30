import { useContext } from "react";
import UserContext from "../../context/user";
import { Link, Outlet } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../../assets/icons8-storage-48.png";

import "./navigation.scss";

const Navigation = () => {
  const { usr } = useContext(UserContext);
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={navLogo} alt="nav logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            {usr ? null : (
              <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
