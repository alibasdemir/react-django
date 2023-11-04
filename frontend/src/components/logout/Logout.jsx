import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Container>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
}

export default Logout;
