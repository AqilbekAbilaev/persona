import axios from "axios";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./admin.scss";

const URL = "http://localhost:3500/users";

const Admin = () => {
  const [usrs, setUsrs] = useState([]);
  const [checkbox, setCheckbox] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((data) => {
        setUsrs(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheckbox((prevState) => [...prevState, +e.target.id + 1]);
    } else {
      setCheckbox((prevState) =>
        prevState.filter((item) => +item !== +e.target.id + 1)
      );
    }
  };

  const handleAllCheckbox = (e) => {
    if (e.target.checked) {
      setCheckbox(usrs.map((item, index) => index + 1));
    } else {
      setCheckbox([]);
    }
  };

  const handleDelete = () => {
    let ids = usrs.map((item, index) => {
      if (checkbox.includes(index + 1)) return item._id;
    });
    ids = ids.filter(Boolean);
    axios
      .delete(`${URL}:${ids}`)
      .then((data) => {
        setUsrs(
          usrs.filter((item, index) => checkbox.includes(index + 1) === false)
        );
        setCheckbox([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h3>Admin page</h3>
      <div className="actions">
        <Button
          variant="danger"
          disabled={checkbox.length == 0}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant="warning" disabled={checkbox.length == 0}>
          Block
        </Button>
        <Button variant="success" disabled={checkbox.length == 0}>
          Unblock
        </Button>
        <Button variant="primary" disabled={checkbox.length == 0}>
          Admin
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="Checkbox"
                onChange={handleAllCheckbox}
                checked={
                  usrs.length !== 0 ? usrs.length == checkbox.length : false
                }
              />
            </th>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Is Blocked</th>
          </tr>
        </thead>
        <tbody>
          {usrs?.map(({ usrname, email, is_admin, is_blocked }, index) => {
            return (
              <tr key={index}>
                <td>
                  <Form.Check
                    id={index}
                    type="checkbox"
                    onChange={handleChecked}
                    checked={checkbox.includes(index + 1)}
                  ></Form.Check>
                </td>
                <td>{index + 1}</td>
                <td>{usrname}</td>
                <td>{email}</td>
                <td>{is_admin ? "Yes" : "No"}</td>
                <td>{is_blocked ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
