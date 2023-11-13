import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const onLoginClick = () => {
    const userData = {
      username: username,
      password: password,
    };

    // Kullanıcı girişi API
    axios
      .post("http://localhost:8000/api/v1/token/login", userData)
      .then((response) => {
        if (response.status === 200) {
          // Kullanıcı oturum açtığında başarılı bir yanıt
          setSuccess("GİRİŞ BAŞARILI + TOKEN:" + response.data.auth_token);
        
          const user = {
            auth_token: response.data.auth_token,
            username,
          };
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({ type: "setUser", payload: user })

          console.log("GİRİŞ BAŞARILI + TOKEN:" + response.data.auth_token);
          toast.success("GİRİŞ BAŞARILI");
          // Kullanıcı oturum açtığında başka bir sayfaya yönlendirme yapacağız
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          // Sunucudan gelen hata yanıtları burada ele alınıyor
          console.error("Sunucu hatası: " + error.response.data.detail);
          toast.error("GİRİŞ BAŞARISIZ");
          setError("Kullanıcı adı veya şifre hatalı");
        } else if (error.request) {
          // İstek gönderilirken bir sorun oluşursa
          console.error("İstek hatası: " + error.request);
          toast.error(error.request);
        } else {
          // Başka bir hata
          console.error("Giriş hatası: " + error.message);
          toast.error(error.message);
        }
      });
  };

  const onChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <Button variant="primary" onClick={onLoginClick}>
            Login
          </Button>
          <p className="mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
