import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container>
      <h1>Home</h1>
      {user && <p>Welcome, {user.username}!</p>}
      {/* ... Diğer içerikler ... */}
      
      <p>
        <Link to="/login/">Login</Link>
      </p>
      <p>
        <Link to="/signup">Sign up</Link>
      </p>
      <p>
        <Link to="/dashboard">Dashboard</Link>
      </p>
    </Container>
  );
}

export default Home;
