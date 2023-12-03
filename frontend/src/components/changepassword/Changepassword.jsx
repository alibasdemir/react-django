import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user"))?.auth_token;
    if (!userToken) {
      navigate("/");
    }
  }, []);

  const handlePasswordChange = () => {
    const userToken = JSON.parse(localStorage.getItem("user")).auth_token;

    const data = {
      new_password: newPassword,
      re_new_password: reNewPassword,
      current_password: currentPassword,
    };

    axios
      .post("https://fakirherif.pythonanywhere.com/api/v1/users/set_password/", data, {
        headers: {
          Authorization: `Token ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("response", response);
        toast.success("Şifre değiştirme başarılı!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (response.status === 200) {
          console.log("BAŞARILI !!!!");
          toast.success("Şifre değiştirme başarılı!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Django REST framework hata detayı:", error.response.data);
          setError(error.response.data.detail);
          setSuccess(null);
          toast.error("Şifre değiştirme sırasında bir hata oluştu!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setError("Şifre değiştirme sırasında bir hata oluştu.");
          setSuccess(null);
          toast.error("Şifre değiştirme sırasında bir hata oluştu!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="4">
          <h1>Şifre Değiştir</h1>
          <Form>
            <Form.Group controlId="currentPasswordId">
              <Form.Label>Şuanki Şifre</Form.Label>
              <Form.Control
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="newPasswordId">
              <Form.Label>Yeni Şifre</Form.Label>
              <Form.Control
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="reNewPasswordId">
              <Form.Label>Tekrar Yeni Şifre</Form.Label>
              <Form.Control
                type="password"
                value={reNewPassword}
                onChange={(e) => setReNewPassword(e.target.value)}
              />
            </Form.Group>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <Button variant="primary" onClick={handlePasswordChange}>
              Şifre Değiştir
            </Button>
            <p className="mt-2">
              Şifreni Değiştirmek İstemiyor musun? <Link to="/">Anasayfaya geri dön</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangePassword;
