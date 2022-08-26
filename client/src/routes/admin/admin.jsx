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

  console.log(checkbox);

  return (
    <Container>
      <h3>Admin page</h3>
      <div className="actions">
        <Button variant="danger">Delete</Button>
        <Button variant="warning">Block</Button>
        <Button variant="success">Unblock</Button>
        <Button variant="primary">Admin</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="Checkbox"
                onChange={handleAllCheckbox}
                checked={usrs.length === checkbox.length}
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
