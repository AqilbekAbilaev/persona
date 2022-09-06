import axios from "axios";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import mapId from "../../utils/mapId";

import active from "../../assets/correct.png";
import blocked from "../../assets/cross.png";
import admin from "../../assets/software-engineer.png";
import user from "../../assets/profile.png";

import "./admin.scss";

const URL = `${import.meta.env.VITE_URL}`;

const Admin = () => {
  const [usrs, setUsrs] = useState([]);
  const [checkbox, setCheckbox] = useState([]);

  useEffect(() => {
    axios
      .get(URL + "/users")
      .then((data) => setUsrs(data?.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCheckbox = (e) => {
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
    let id = mapId(usrs, checkbox);
    axios
      .delete(`${URL}/users/${id}`)
      .then((data) => {
        console.log(data);
        setUsrs(data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setCheckbox([]);
      });
    setCheckbox([]);
  };

  const handleBlock = () => {
    let ids = mapId(usrs, checkbox);
    axios
      .patch(`${URL}/users/${ids}`)
      .then((data) => {
        setUsrs(data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCheckbox([]);
      });
  };

  const handleUnblock = () => {
    let ids = mapId(usrs, checkbox);
    axios
      .patch(`${URL}/users/unblock/${ids}`)
      .then((data) => {
        setUsrs(data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCheckbox([]);
      });
  };

  const handleAdmin = () => {
    let id = mapId(usrs, checkbox);
    axios
      .post(`${URL}/admin/${id}`)
      .then((data) => {
        setUsrs(data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCheckbox([]);
      });
  };

  const handleRemoveAdmin = () => {
    let id = mapId(usrs, checkbox);
    axios
      .patch(`http://localhost:3500/admin/remove/${id}`)
      .then((data) => {
        setUsrs(data?.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCheckbox([]);
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
        <Button
          variant="warning"
          disabled={checkbox.length == 0}
          onClick={handleBlock}
        >
          Block
        </Button>
        <Button
          variant="success"
          disabled={checkbox.length == 0}
          onClick={handleUnblock}
        >
          Unblock
        </Button>
        <Button
          variant="primary"
          disabled={checkbox.length == 0}
          onClick={handleAdmin}
        >
          Admin
        </Button>
        <Button
          variant="danger"
          disabled={checkbox.length == 0}
          onClick={handleRemoveAdmin}
        >
          Remove Admin
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <caption>Users</caption>
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
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {usrs?.map(({ is_admin, is_blocked, usrname, email }, index) => {
            return (
              <tr
                key={index}
                style={is_blocked ? { background: "#fa9393" } : null}
                className={is_admin ? 'admin' : null}
              >
                <td>
                  <Form.Check
                    id={index}
                    type="checkbox"
                    onChange={handleCheckbox}
                    checked={checkbox.includes(index + 1)}
                  ></Form.Check>
                </td>
                <td>{index + 1}</td>
                <td>{usrname}</td>
                <td>{email}</td>
                <td>
                  {is_admin ? (
                    <img src={admin} alt="admin" />
                  ) : (
                    <img src={user} alt="user" />
                  )}
                </td>
                <td>
                  {is_blocked ? (
                    <img src={blocked} alt="blocked" />
                  ) : (
                    <img src={active} alt="active" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
