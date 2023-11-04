import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";

function Signup() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState(null);

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSignupClick = () => {
    fetch("http://localhost:8000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 400) {
          return response.json().then((data) => {
            if (data.username) {
              // Kullanıcı adı aynıysa hata verecek
              throw new Error(data.username[0]);
            } else {
              // Diğer hatalar burada yazılacak
              throw new Error("Form eksik veya hatalı.");
            }
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Kayıt başarılı:", data);
        toast.success("Kayıt başarılı!");
      })
      .catch((error) => {
        console.error("Hata oluştu:", error.message);
        toast.error("Hata: " + error.message);
        setError(error.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter user name"
                value={userData.username}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={userData.password}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="emailId">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
          {error && <div className="alert alert-danger">{error}</div>}
          <Button variant="primary" onClick={onSignupClick}>
            Sign up
          </Button>
          <p className="mt-2">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
